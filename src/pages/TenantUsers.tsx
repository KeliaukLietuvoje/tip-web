import {
  Button,
  DynamicFilter,
  FilterInputTypes,
  NotFoundInfoProps,
  Table,
  TableRow,
  useStorage,
} from '@aplinkosministerija/design-system';
import { isEmpty } from 'lodash';
import api from '../api';
import PageWrapper from '../components/wrappers/PageWrapper';
import { useGenericTablePageHooks, useTableData } from '../state/hooks';
import { TableButtonsRow } from '../styles/CommonStyles';
import {
  buttonsTitles,
  emptyStateLabels,
  emptyStateUrlLabels,
  pageTitles,
  roleLabels,
  slugs,
  User,
  userFilterLabels,
} from '../utils';

const filterConfig = {
  firstName: {
    label: userFilterLabels.firstName,
    key: 'firstName',
    inputType: FilterInputTypes.text,
  },
  lastName: {
    label: userFilterLabels.lastName,
    key: 'lastName',
    inputType: FilterInputTypes.text,
  },
};

const rowConfig = [['firstName', 'lastName']];

const tenantUsersColumns = {
  fullName: { label: 'Vardas, pavardė', show: true },
  email: { label: 'Elektroninis paštas', show: true },
  role: { label: 'Teisė', show: true },
};
const mapUsers = (users: User[]): TableRow[] =>
  users.map((user: User) => {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      phone: user.phone,
      email: user.email,
      role: user?.role ? roleLabels[user?.role] : '-',
    };
  });

const TenantUsers = () => {
  const { navigate, page } = useGenericTablePageHooks();
  const { value: filters, setValue: setFilters } = useStorage('tenantUsers', {}, true);

  const { tableData, loading } = useTableData({
    endpoint: () =>
      api.tenantUsers({
        page,
        filter: filters,
      }),
    mapData: (list) => mapUsers(list),
    dependencyArray: [page, filters],
    name: 'tenantUsers',
  });

  const notFoundInfo: NotFoundInfoProps = {
    url: slugs.newTenantUser,
    urlText: emptyStateUrlLabels.user,
    text: emptyStateLabels.user,
    onClick: () => {
      navigate(slugs.newTenantUser);
    },
  };

  return (
    <PageWrapper title={pageTitles.tenantUsers}>
      <>
        <TableButtonsRow>
          <DynamicFilter
            loading={loading}
            filterConfig={filterConfig as any}
            rowConfig={rowConfig}
            onSetFilters={(filters) => setFilters(filters)}
            filters={filters}
            texts={{
              clearAll: buttonsTitles.clearAll,
              filter: buttonsTitles.filter,
            }}
          />
          <div>
            <Button
              onClick={() => {
                navigate(slugs.newTenantUser);
              }}
              disabled={loading}
            >
              {buttonsTitles.inviteTenantUser}
            </Button>
          </div>
        </TableButtonsRow>
        <Table
          loading={loading}
          onClick={(id) => navigate(slugs.tenantUser(id))}
          notFoundInfo={notFoundInfo}
          isFilterApplied={!isEmpty(filters)}
          data={tableData}
          columns={tenantUsersColumns}
          onPageChange={(page) => {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', page.toString());
            navigate({
              search: `?${searchParams.toString()}`,
            });
          }}
        />
      </>
    </PageWrapper>
  );
};

export default TenantUsers;

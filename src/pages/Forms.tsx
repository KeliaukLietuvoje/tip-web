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
import TableStatusRowItem from '../components/other/TableStatusRowItem';
import PageWrapper from '../components/wrappers/PageWrapper';
import { useGenericTablePageHooks, useTableData } from '../state/hooks';
import { TableButtonsRow } from '../styles/CommonStyles';
import {
  buttonsTitles,
  colorsByStatus,
  emptyStateLabels,
  emptyStateUrlLabels,
  Form,
  formatDate,
  formatDateFrom,
  formatDateTo,
  FormFilters,
  formFiltersLabels,
  FormFiltersProps,
  formStatusLabels,
  getFormStatusTypes,
  pageTitles,
  slugs,
} from '../utils';

const formTableLabels = {
  name: {
    label: 'Pavadinimas',
    mobileOrder: 1,
    desktopOrder: 1,
    show: true,
  },
  createdAt: {
    label: 'Duomenų įvedimo data',
    mobileOrder: 3,
    desktopOrder: 2,
    show: true,
  },
  createdBy: {
    label: 'Sukūrė',
    mobileOrder: 4,
    desktopOrder: 3,
    show: true,
  },
  status: {
    label: 'Būsena',
    mobileOrder: 2,
    desktopOrder: 7,
    show: true,
  },
};

const filterConfig = {
  nameLT: {
    label: formFiltersLabels.name,
    key: 'nameLT',
    inputType: FilterInputTypes.text,
  },
  createdFrom: {
    label: formFiltersLabels.createdFrom,
    key: 'createdFrom',
    inputType: FilterInputTypes.date,
  },
  createdTo: {
    label: formFiltersLabels.createdTo,
    key: 'createdTo',
    inputType: FilterInputTypes.date,
  },
  status: {
    label: formFiltersLabels.status,
    key: 'status',
    inputType: FilterInputTypes.multiselect,
    options: getFormStatusTypes(),
  },
};

const rowConfig = [['nameLT'], ['createdFrom', 'createdTo'], ['status'], ['tenant']];

const mapFormFilters = (filters: FormFilters): FormFiltersProps => {
  const params: FormFiltersProps = {};

  if (filters) {
    if (filters.nameLT) {
      params.nameLT = filters.nameLT;
    }

    if (!!filters.createdFrom || !!filters.createdTo) {
      params.createdAt = {
        ...(filters.createdFrom && {
          $gte: formatDateFrom(new Date(filters.createdFrom)),
        }),
        ...(filters.createdTo && {
          $lt: formatDateTo(new Date(filters.createdTo)),
        }),
      };
    }

    if (filters.status && !isEmpty(filters.status)) {
      params.status = { $in: filters.status.map((state) => state.id) };
    }
  }

  return params;
};

const mapForms = (forms: Form[]): TableRow[] =>
  forms.map((form: Form) => {
    const tenant = form?.tenant?.name;
    const user = form?.createdBy
      ? form?.createdBy?.firstName + ' ' + form?.createdBy?.lastName
      : tenant;
    return {
      id: form.id,
      name: form?.nameLT,
      createdAt: formatDate(form?.createdAt),
      status: (
        <TableStatusRowItem
          info={[
            {
              label: formStatusLabels[form.status],
              color: colorsByStatus[form.status],
            },
          ]}
        />
      ),
      createdBy: user,
    };
  });

const Forms = () => {
  const { value: filters, setValue: setFilters } = useStorage('forms', {}, true);
  const { navigate, page } = useGenericTablePageHooks();

  const { tableData, loading } = useTableData({
    endpoint: () =>
      api.getForms({
        page,
        filter: mapFormFilters(filters),
      }),
    mapData: (list) => mapForms(list),
    dependencyArray: [page, filters],
    name: 'forms',
  });

  const notFoundInfo: NotFoundInfoProps = {
    url: slugs.newForm,
    urlText: emptyStateUrlLabels.form,
    text: emptyStateLabels.form,
    onClick: () => {
      navigate(slugs.newForm);
    },
  };

  return (
    <PageWrapper title={pageTitles.forms}>
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
                navigate(slugs.newForm);
              }}
              disabled={loading}
            >
              {buttonsTitles.newForm}
            </Button>
          </div>
        </TableButtonsRow>
        <Table
          loading={loading}
          onClick={(id) => navigate(slugs.form(id))}
          notFoundInfo={notFoundInfo}
          isFilterApplied={!isEmpty(filters)}
          data={tableData}
          columns={formTableLabels}
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

export default Forms;

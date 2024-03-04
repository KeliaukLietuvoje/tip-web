import Table from '../../components/tables/table';
import PageWrapper from '../../components/wrappers/PageWrapper';
import { slugs } from '../../utils/slugs';
import { pageTitles, tenantUsersColumns } from '../../utils/texts';
import { useData } from './hooks/useData';

const TenantUsers = () => {
  const { buttonInfo, filterInfo, navigate, notFoundInfo, tableData, loading } = useData();

  return (
    <PageWrapper title={pageTitles.tenantUsers} buttonInfo={buttonInfo}>
      <Table
        loading={loading}
        columns={tenantUsersColumns}
        filterInfo={filterInfo}
        notFoundInfo={notFoundInfo}
        onClick={(id) => navigate(slugs.tenantUser(id))}
        data={tableData}
      />
    </PageWrapper>
  );
};

export default TenantUsers;

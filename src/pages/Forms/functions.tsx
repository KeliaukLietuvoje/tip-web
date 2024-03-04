import { isEmpty } from 'lodash';
import TableStatusRowItem from '../../components/other/TableStatusRowItem';
import { TableRow } from '../../components/tables/table';
import { colorsByStatus } from '../../utils/constants';
import { formatDate, formatDateFrom, formatDateTo } from '../../utils/format';
import { formStatusLabels } from '../../utils/texts';
import { Form, FormFilters, FormFiltersProps } from '../../utils/types';

export const mapFormFilters = (filters: FormFilters): FormFiltersProps => {
  let params: FormFiltersProps = {};

  if (filters) {
    filters?.nameLT && (params.nameLT = filters.nameLT);

    (!!filters.createdFrom || !!filters.createdTo) &&
      (params.createdAt = {
        ...(filters.createdFrom && {
          $gte: formatDateFrom(new Date(filters.createdFrom)),
        }),
        ...(filters.createdTo && {
          $lt: formatDateTo(new Date(filters.createdTo)),
        }),
      });

    !isEmpty(filters?.status) &&
      (params.status = { $in: filters?.status!?.map((state) => state.id) });
  }

  return params;
};

export const mapForms = (forms: Form[]): TableRow[] =>
  forms.map((form: Form) => {
    const tenant = form?.tenant?.name;
    const user = form?.createdBy
      ? form?.createdBy?.firstName! + ' ' + form?.createdBy?.lastName
      : tenant;
    return {
      id: form.id,
      name: form?.nameLT,
      createdAt: formatDate(form?.createdAt!),
      status: (
        <TableStatusRowItem
          info={[
            {
              label: formStatusLabels[form.status!],
              color: colorsByStatus[form.status!],
            },
          ]}
        />
      ),
      createdBy: user,
    };
  });

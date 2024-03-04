import { FilterInputTypes } from '../../components/other/DynamicFilter/Filter';
import { getFormStatusTypes } from '../../utils/options';
import { formFiltersLabels } from '../../utils/texts';

export const filterConfig = {
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

export const rowConfig = [['nameLT'], ['createdFrom', 'createdTo'], ['status'], ['tenant']];

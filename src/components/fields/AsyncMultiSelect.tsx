import FieldWrapper from './components/FieldWrapper';
import MultiTextField from './components/MultiTextFieldInput';
import OptionsContainer from './components/OptionsContainer';
import { filterSelectedOptions, handleRemove } from './utils/functions';
import { useAsyncSelectData } from './utils/hooks';

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}

export interface SelectFieldProps {
  id?: string;
  name?: string;
  label?: string;
  values?: any[];
  error?: string;
  showError?: boolean;
  editable?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  handleLogs?: (data: any) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  hasBorder?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => any;
  isSearchable?: boolean;
  loadOptions: (input: any, page: number, id?: any) => any;
  dependantValue?: any[];
  handleRefresh?: () => void;
  optionsKey?: string;
}

const AsyncMultiSelect = ({
  label,
  values = [],
  name,
  error,
  hasBorder,
  showError = true,
  editable = true,
  placeholder,
  className,
  left,
  right,
  padding,
  optionsKey = 'rows',
  onChange,
  handleLogs,
  disabled = false,
  backgroundColor,
  getOptionLabel = (option) => option.label,
  getOptionValue = (option) => option.id,
  isSearchable = false,
  loadOptions,
  dependantValue: dependantId,
  handleRefresh,
  ...rest
}: SelectFieldProps) => {
  const {
    loading,
    suggestions,
    handleInputChange,
    handleToggleSelect,
    input,
    showSelect,
    observerRef,
    handleBlur,
    handleClick,
  } = useAsyncSelectData({
    loadOptions,
    name,
    disabled,
    onChange: (option: any) => onChange([...values, option]),
    dependantId,
    optionsKey,
  });

  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      label={label}
      error={error}
      showError={showError}
      handleBlur={handleBlur}
    >
      <MultiTextField
        placeholder={placeholder}
        values={values}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        input={input}
        error={error}
        disabled={disabled}
        handleInputChange={handleInputChange}
        getOptionLabel={getOptionLabel}
      />
      <OptionsContainer
        values={filterSelectedOptions(suggestions, values, getOptionValue)}
        getOptionLabel={getOptionLabel}
        loading={loading}
        observerRef={observerRef}
        showSelect={showSelect}
        handleClick={handleClick}
      />
    </FieldWrapper>
  );
};

export default AsyncMultiSelect;

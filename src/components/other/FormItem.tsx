import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../styles';
import TextField from '../fields/TextField';
import Icon from './Icons';

const FormItem = ({ group, values, errors, setFieldValue }) => {
  const [expanded, setExpanded] = useState(false);
  const setKVP = (input: string, onChange) => {
    const pattern = /^(?:[0-4]|)$/;
    if (!pattern.test(input)) return;

    onChange(input);
  };

  useEffect(() => {
    if (!isEmpty(errors)) {
      setExpanded(true);
    }
  }, [errors]);

  const showSelect = !isEmpty(group.children) && expanded;

  return (
    <>
      <TitleRow>
        <FormTitle>{group.name}</FormTitle>
        <IconContainer onClick={() => setExpanded(!expanded)}>
          <StyledIcon name={'dropdownArrow'} />
        </IconContainer>
      </TitleRow>
      {showSelect &&
        group.children?.map((item) => {
          return (
            <FullRow>
              <FormSubTitle>{item.name}</FormSubTitle>
              <FormRow columns={3}>
                <TextField
                  label={'Konfidencialumas'}
                  value={values.items[item.id!].k}
                  name={'k'}
                  error={errors?.items?.[item.id!]?.k}
                  onChange={(k) => setKVP(k, (k) => setFieldValue(`items.${[item.id!]}.k`, k))}
                />
                <TextField
                  label={'Vientisumas'}
                  value={values.items[item.id!].v}
                  error={errors?.items?.[item.id!]?.v}
                  name={'v'}
                  onChange={(v) => setKVP(v, (v) => setFieldValue(`items.${[item.id!]}.v`, v))}
                />
                <TextField
                  label={'Prieinamumas'}
                  value={values.items[item.id!].p}
                  error={errors?.items?.[item.id!]?.p}
                  name={'p'}
                  onChange={(p) => setKVP(p, (p) => setFieldValue(`items.${[item.id!]}.p`, p))}
                />
              </FormRow>
            </FullRow>
          );
        })}
    </>
  );
};

export const FormRow = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const FullRow = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 0.5px solid #cdd5df;
  padding-bottom: 14px;
  margin-bottom: 12px;
  width: 800px;
`;

const FormSubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
  color: #231f20;
  width: 300px;
`;

const FormTitle = styled.div`
  font-size: 1.6rem;
  color: #231f20;
  margin-top: 20px;
  font: normal normal normal 16px/19px Atkinson Hyperlegible;
  color: #121926;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-bottom: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: #bdc4cc;
  font-size: 2.7rem;
  margin-right: 12px;
`;

export default FormItem;

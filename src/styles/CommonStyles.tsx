import styled from 'styled-components';
import { device } from '.';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media ${device.mobileL} {
    flex-direction: column;
    gap: 0;
  }
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 2;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const ColumnTwo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex: 1;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const TableButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  margin: 16px 0;
`;

export const TableButtonsInnerRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const FormRow = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

import styled from 'styled-components';

export const RowData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 0 3px 10px;
  background-color: ${({ iteration }) => (iteration % 2 ? '' : 'lightgrey')};
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #007bff;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemContainer = styled.div`
  display: block;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextSpan = styled.span`
  font-size: 9px;
  padding-right: 5px;
`;

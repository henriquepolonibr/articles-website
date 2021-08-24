import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviousPageButton = styled.div`
  display: inline-block;
  svg{
    font-size: 16px;
  }
`;

export const NextPageButton = styled(PreviousPageButton)`
`;

export const PageNumber = styled.div`
  font-size: 18px;
  margin: 10px;
`
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (min-width: 768px){
    padding: 50px;
  }
`

export const Header = styled.div`
  display: block;
  @media (min-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`
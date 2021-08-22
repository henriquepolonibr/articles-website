import React from 'react';
import SearchArticle from '../SearchArticle';
import FilterSelect from '../FilterSelect';
import * as S from './styles';

const Home = () => {
  return(
    <S.Wrapper>
      <S.Header>
        <SearchArticle />
        <FilterSelect />
      </S.Header>
    </S.Wrapper>
  )
}

export default Home
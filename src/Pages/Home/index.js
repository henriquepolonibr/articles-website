import React from 'react';
import SearchArticle from '../../components/SearchArticle';
import FilterSelect from '../../components/FilterSelect'
import ArticleList from '../../components/ArticleList'
import * as S from './styles';

const Home = () => {
  return(
    <S.Wrapper>
      <S.Header>
        <SearchArticle />
        <FilterSelect />
      </S.Header>
      <ArticleList />
    </S.Wrapper>
  )
}

export default Home
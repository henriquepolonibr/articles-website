import React, { useContext } from 'react';
import SearchArticle from '../../components/SearchArticle';
import FilterSelect from '../../components/FilterSelect'
import ArticleList from '../../components/ArticleList'
import Pagination from '../../components/Pagination'
import { UserContext } from '../../Contexts/typedValue'
import * as S from './styles';

const Home = () => {
  const { typedValue, setTypedValue } = useContext(UserContext);
  return(
    <S.Wrapper>
      <S.Header>
        <SearchArticle />
        <FilterSelect />
      </S.Header>
      {typedValue
      ?
      <>
        <ArticleList />
        <Pagination />
      </>
      : 
        <S.NoResultsFound>
          <span>Nenhum artigo encontrado, digite um termo para obter resultados.</span>
        </S.NoResultsFound>
      }
    </S.Wrapper>
  )
}

export default Home
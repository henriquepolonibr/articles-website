import React, { useContext } from 'react';
import { UserContext } from '../../Contexts/typedValue'
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import { UserPageNumberContext } from '../../Contexts/pageNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const SearchArticle = () => {
  const { typedValue, setTypedValue } = useContext(UserContext);
  const { articleData, setArticleData } = useContext(UserDataArticleContext);
  const { pageNumber, setPageNumber } = useContext(UserPageNumberContext);

  function apiCall(){
    var url = new URL("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts"),
    params = {
      search: typedValue, 
      page: pageNumber, 
      orderby: 'relevance'
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(response => response.json()) 
    .then(data => { 
      setArticleData(data) 
    })
  }
  return (
    <S.SearchBox>
      <FontAwesomeIcon icon={faSearch} size="sm" />
      <S.SearchText
        placeholder="Buscar artigo"
        name="filterTextArea"
        type="text"
        id="textAreaFilterField"
        value={typedValue}
        onChange={(e) => {setTypedValue(e.target.value); apiCall()}}
      />
    </S.SearchBox>
  );
};

export default SearchArticle;

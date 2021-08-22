import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../Contexts/filter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const SearchArticle = () => {
  const { filter, setFilter } = useContext(UserContext);
  const [dataArticle, setDataArticle] = useState(null);

  function apiCall(){
    var url = new URL("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts"),
    params = {
      search: filter, 
      page: 2, 
      orderby: 'relevance'
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(response => response.json()) 
    .then(data => { 
      setDataArticle(data) 
    })
  }
  
  useEffect(() => {
    apiCall()
  }, []);
  console.log('dataArticle', dataArticle)
  return (
    <S.SearchBox>
      <FontAwesomeIcon icon={faSearch} size="sm" />
      <S.SearchText
        placeholder="Search article"
        name="filterTextArea"
        type="text"
        id="textAreaFilterField"
        value={filter}
        onChange={(e) => {setFilter(e.target.value); apiCall()}}
      />
    </S.SearchBox>
  );
};

export default SearchArticle;

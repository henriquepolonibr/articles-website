import React, { useState, useContext } from 'react';
import { UserContext } from '../../Contexts/typedValue'
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const SearchArticle = () => {
  const { typedValue, setTypedValue } = useContext(UserContext);
  const { articleData, setArticleData } = useContext(UserDataArticleContext);

  function apiCall(){
    var url = new URL("https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts"),
    params = {
      search: typedValue, 
      page: 2, 
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
        placeholder="Search article"
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

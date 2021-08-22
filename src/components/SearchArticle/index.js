import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const SearchArticle = () => {
  return (
    <S.SearchBox>
      <FontAwesomeIcon icon={faSearch} size="sm" />
      <S.SearchText
        placeholder="Search article"
        name="filterTextArea"
        type="text"
        id="textAreaFilterField"
      />
    </S.SearchBox>
  );
};

export default SearchArticle;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1)
  return(
    <S.Pagination>
      <S.PreviousPageButton onClick={() => setPageNumber(pageNumber-1)}>
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </S.PreviousPageButton>
        <S.PageNumber>Página {pageNumber}</S.PageNumber>
      <S.NextPageButton onClick={() => setPageNumber(pageNumber+1)}>
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </S.NextPageButton>
    </S.Pagination>
  )
}

export default Pagination;
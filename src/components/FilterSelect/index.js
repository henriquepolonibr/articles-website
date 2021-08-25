import React, { useContext } from 'react';
import { UserFilterContext } from '../../Contexts/filterSelect'
import * as S from './styles'

const FilterSelect = () => {
  const { selectedValue, setSelectedValue } = useContext(UserFilterContext)
  const orderType = [
    'relevance',
    'test'
  ]

  return (
    <S.OrderContent>
      <S.Label>
        <S.Select
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          <S.SelectOption hidden> Ordenar por: {selectedValue}</S.SelectOption>
          {orderType.map((option, index) => (
            <S.SelectOption key={index} value={option}>
              {option}
            </S.SelectOption>
          ))}
        </S.Select>
      </S.Label>
    </S.OrderContent>
  )
}

export default FilterSelect

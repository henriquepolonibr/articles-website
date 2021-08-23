import React, { useContext } from 'react';
import { UserFilterContext } from '../../Contexts/filterSelect'
import * as S from './styles'

const FilterSelect = () => {
  const { selectedValue, setSelectedValue } = useContext(UserFilterContext)
  const orderType = [
    'Mais relevantes',
    'test'
  ]

  return (
    <div>
      <S.Label>
        <S.Select
          onChange={(e) => {
            setSelectedValue(e.target.value);
            console.log('selectedValue', selectedValue)
          }}
        >
          <S.SelectOption hidden> Ordenar por: {selectedValue}</S.SelectOption>
          {orderType.map((option, index) => (
            <S.SelectOption key={option} value={index}>
              {option}
            </S.SelectOption>
          ))}
        </S.Select>
      </S.Label>
    </div>
  )
}

export default FilterSelect

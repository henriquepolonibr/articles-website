import React, { useState } from 'react';
import * as S from './styles'

const FilterSelect = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const orderType = [
    'Mais relevantes'
  ]

  return (
    <div>
      <S.Label>
        <S.Select
          onChange={(e) => {
            setSelectedValue(e.target.value)
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

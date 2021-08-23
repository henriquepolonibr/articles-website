import styled from 'styled-components'

export const OrderContent = styled.div`
  display: flex;
  justify-content: center;
`

export const Label = styled.label`
  position: relative;
  &:after {
    content: '<>';
    font: 17px 'Consolas', monospace;
    font-weight: bold;
    color: #007cc5;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 8px;
    top: 20px;
    padding: 2px 0px 0px;
    position: absolute;
    pointer-events: none;
  }
  &:before {
    content: '';
    right: 6px;
    top: 0px;
    width: 24px;
    height: 24px;
    position: absolute;
    pointer-events: none;
    display: block;
  }
`

export const Select = styled.select`
  width: 233px;
  height: 40px;
  border: 1px solid #007cc5;
  border-radius: 5px;
  opacity: 1;
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  padding: 10px 12px;
  bottom: -11px;
  position: relative;
  outline: none;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`

export const SelectOption = styled.option`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color: #262626;
  margin: 10px 0px;
`

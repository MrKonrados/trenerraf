import styled, { css } from 'styled-components'

const Button = styled.button`
  border: 2px solid #444;
  background-color: #fff;
  padding: 0 35px;
  height: 60px;
  min-width: 190px;
  line-height: 36px;
  font-size: 18px;
  font-weight: 700;
  // text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 10px;
  color: #444;
  text-align: center;
  transition: all 1.2s ease;
  -webkit-transition: all 1.3s ease;
  -moz-transition: all 1.3s ease;
  margin-right: 8px;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #444;
  }

  ${props =>
    props.dark &&
    css`
      color: #949494;
      border-color: #949494;
      &:hover {
        color: #fff;
        background-color: #949494;
      }
    `}

  ${props =>
    props.light &&
    css`
      color: #ddd;
      border-color: #ddd;
    `}

  ${props =>
    props.opaque &&
    css`
      background: none;
      &:hover {
        background-color: transparent;
        color: #fff;
        border-color: #fff;
      }
    `}

  ${props =>
    props.small &&
    css`
      height: 30px;
      font-size: 11px;
      line-height: 27px;
      min-width: 0;
    `}
`

export default Button

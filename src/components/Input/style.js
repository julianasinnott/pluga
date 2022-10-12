import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  background-color: var(--secundary);
  padding: 20px 70px;
  font-size: 16px;
  color: var(--white);
  outline: none;
  border-radius: 6px;
  border: none;
  ::placeholder {
    font-size: 14px;
    color: var(--white);
  }
`

export const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  color: var(--white);
  position: absolute;
  left: 50px;
  top: 20px;
`

import styled from "styled-components";

export const StyledModalBackground = styled.div`
  background-color: var(--backgroundModal);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`

export const StyledModal = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: var(--white);
  padding: 14px 52px;
  border-radius: 6px;
  box-shadow: var(--shadowWhite);
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: fixed;
  top: calc(50% - 250px);
  right: calc(50% - 300px);
`

export const StyledModalOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: var(--white);
`
export const StyledIcon = styled.img`
  position: absolute;
  top: -15px; 
  right: -15px;
  width: 40px;
  display: flex;
  background-color: var(--primary);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  &:hover{
    transition: all 0.4s ease-in-out;
    background-color: var(--secundary);
    scale: 1.1;
  }
`

export const StyledSelectedAppSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 45px 0;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`



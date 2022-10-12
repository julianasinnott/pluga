import styled from "styled-components";

export const StyledHeader = styled.header`  
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  color: var(--white);
  background: var(--primary);
  @media only screen and (max-width: 600px){
    padding: 0 20px;
  }
  @media only screen and (max-width: 300px) {
    padding: 0 10px;
  }
`


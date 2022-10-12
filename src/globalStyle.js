import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  color: var(--white);
  cursor: pointer;
  ${
    props => props.rounded && css`
      border-radius: 40px;
    `
  }
  background-color: 
    ${
      props => props.backgroundColor
    }
  ;
  &:hover {
    opacity: 0.8;
  }
`

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 
  ${
    props => props.padding
  };
  @media only screen and (max-width: 800px) {
    padding: 0 10px;
  }
`

export const StyledModalText = styled.p`
  color: var(--tertiary);
  text-align: center;
  font-size: ${
    props => props.fontSize
  };
  text-transform: uppercase;
`

export const StyledImage = styled.img`
  background-color: 
  ${
    props => props.backgroundColor
  };
  width: ${ 
    props => props.width
  };
  height: ${
    props => props.height
  };
  padding: 20px;
  border-radius: 50%;
`
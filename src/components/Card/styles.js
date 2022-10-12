import styled from "styled-components";

export const StyledCard = styled.div`
  width: 178px;
  height: 178px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  cursor: pointer;
  position: relative;
  box-shadow: var(--shadow);
  background-color: 
  ${
    props => props.backgroundColor
  };
  color: var(--white);
  &:hover {
    scale: 1.04;
    transition: all 0.4s ease-in-out;
  }
`;
export const StyledName = styled.h2`
  font-size: 12px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`


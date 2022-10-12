import { StyledCard, StyledName, StyledImage } from "./styles"

export function Card({data, openModal}) {
  return(
    <StyledCard backgroundColor={data.color} onClick={openModal}>
      <StyledImage src={data.icon} alt={`Ícone ${data.name}`} />
      <StyledName>
        {data.name}
      </StyledName> 
    </StyledCard>
  )
}
import { StyledHeader } from "./styles"
import { Input } from "../Input"

export function Header({handleChange, typeInput, placeholderInput}) {
  return(
    <StyledHeader>
      <Input handleChange={handleChange} type={typeInput} placeholder={placeholderInput} />
    </StyledHeader>
  )
}
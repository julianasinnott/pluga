import { Header } from "../Header";
import { StyledMain } from "./styles";

export function Template({children, paddingMobile, handleChange, typeInput, placeholderInput}) {
  return(
    <>
      <Header handleChange={handleChange} typeInput={typeInput} placeholderInput={placeholderInput} />
      <StyledMain paddingMobile={paddingMobile}>
        {children}
      </StyledMain>
    </>
  )
}
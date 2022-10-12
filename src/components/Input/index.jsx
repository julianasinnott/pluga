import { StyledInput, StyledIcon } from "./style";
import searchIcon from '/assets/search-icon.png'


export function Input({handleChange, value, type, placeholder}) {
  return( 
    <>
      <StyledIcon src={searchIcon} />
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </> 
  )
}
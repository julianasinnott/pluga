import { StyledModalBackground, StyledIcon, StyledModal, StyledSelectedAppSection, StyledDiv } from "./styles";
import { StyledButton, StyledImage, StyledModalText } from '../../globalStyle'
import closeIcon from '/assets/close-icon.png'
import { ModalSection } from "../ModalSection";
export function AppModal({data, closeModal, lastViewedApps}) {

  return(
    <StyledModalBackground>
      <StyledModal>
        <StyledIcon src={closeIcon} alt='Ícone de Fechar'  onClick={closeModal} />
        <StyledSelectedAppSection>
          <StyledImage src={data.icon} backgroundColor={data.color} width='150px' height='150px' />         
          <StyledDiv>
            <StyledModalText fontSize='20px'>
              {data.name}
            </StyledModalText>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <StyledButton rounded backgroundColor={data.color}>
                ACESSAR  
              </StyledButton>  
            </a>
          </StyledDiv>             
        </StyledSelectedAppSection>
        {
          lastViewedApps.length && <ModalSection lastViewedApps={lastViewedApps} />
        }
      </StyledModal>
    </StyledModalBackground>
  )
} 
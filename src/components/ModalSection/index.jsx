import { StyledModalText, StyledImage } from '../../globalStyle'
import { StyledAppsSection, StyledDiv, StyledModalSection } from './styles'

export function ModalSection({lastViewedApps}) {

  return(
    <StyledModalSection>
      <StyledModalText>
        ÚLTIMAS FERRAMENTAS VISUALIZADAS
      </StyledModalText>
      <StyledAppsSection>
        {
          lastViewedApps.map(app=> (
            <StyledDiv key={app.app_id}>
              <StyledModalText fontSize='14px'>
                {app.name}
              </StyledModalText>
              <StyledImage src={app.icon} backgroundColor={app.color} width='80px' height='80px' />
          </StyledDiv>
          ))
        }      
      </StyledAppsSection>
    </StyledModalSection>
  )
}
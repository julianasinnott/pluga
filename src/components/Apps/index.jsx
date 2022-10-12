import { Card } from "../Card"
import { AppModal } from "../AppModal"
import { StyledAppsSection, StyledWarning } from "./styles"
import { useState } from "react"

export function Apps({data, pageSize}) { 
  const [selectedApp, setSelectedApp] = useState(null)
  const [lastViewedApps, setLastViewesApps] = useState(JSON.parse(localStorage.getItem('lastViewedApps')) || [])

  function handleSelectedApp(app) {
    setSelectedApp(app)
    app && handleLastViewedApps(app)
  }

  function handleLastViewedApps(app) {
    if (lastViewedApps.length == 6 && !lastViewedApps.includes(app)) {
      lastViewedApps.pop()
    }
    setLastViewesApps(prev => [app, ...prev.filter(o => o !== app)])
    localStorage.setItem('lastViewedApps', JSON.stringify(lastViewedApps))
  }

  function handleLastViewedAppsDisplay() {
    return lastViewedApps.filter(app => app.app_id !== selectedApp.app_id).slice(0, 3)
  }

  return(
    <StyledAppsSection>
      {
        selectedApp && <AppModal lastViewedApps={handleLastViewedAppsDisplay()} data={selectedApp} closeModal={() => handleSelectedApp(null)} />
      }      
      {data.length ?
        data.slice(0, pageSize).map(app => (
          <Card key={app.app_id} data={app} openModal={() => handleSelectedApp(app)} />          
        ))
         :
        (
          <StyledWarning>
            NENHUMA FERRAMENTA ENCONTRADA :(
          </StyledWarning>
        )
      }
    </StyledAppsSection>
  )
}
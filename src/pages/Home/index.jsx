import { useState } from "react";
import { Apps } from "../../components/Apps";
import { Template } from "../../components/Template";
import { StyledButton, StyledDiv } from "../../globalStyle";
import { useGetApiData } from "../../hooks/useGetApiData";

export function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [pageSize, setPageSize] = useState(12)
  const data = useGetApiData('/ferramentas_search.json')
  const apps = data.filter(apps => apps.name.toLowerCase().includes(searchValue))

  function handleChange(value) {
    setSearchValue(value.toLowerCase())
  }

  function handlePageSize() {
    setPageSize(pageSize + 12)
  }

  return(
    <Template handleChange={handleChange} paddingMobile='10px' placeholderInput='BUSCAR FERRAMENTA' typeInput='search'>
      <StyledDiv padding='40px 20px'>
        <Apps data={apps} width900px='100%' pageSize={pageSize} />
        {
          apps.slice(0, pageSize).length < apps.length &&
          <StyledButton onClick={handlePageSize} backgroundColor='var(--primary)'>
            CARREGAR MAIS
          </StyledButton>
        }
      </StyledDiv>
    </Template>
  )
}
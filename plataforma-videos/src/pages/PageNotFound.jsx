import './Home/Home.css'
import styled from 'styled-components'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 50px;
`

function PageNotFound() {
    return (
        <Page>
            <h1>Erro 404</h1>
            <h3>Página não encontrada :(</h3>
        </Page>
    )
}

export default PageNotFound
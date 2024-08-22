// Importando link:
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
    display: flex;
    justify-content: center;
    padding: 50px 0px 70px 0px;
    gap: 70px;
`
const StyledLink = styled(Link)`
    user-select: none;
    text-decoration: none;
    color: #333333;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.8rem;
    &:hover {
        text-decoration: underline;
    }
    &:focus {
        text-decoration: underline;
    }
`

function Header() {
    return (
        <Container>
            <StyledLink to={"/home"}>Home</StyledLink>     
            <StyledLink to={"/sobre"}>Sobre</StyledLink>        
            <StyledLink to={"/contato"}>Contato</StyledLink>  
        </Container>
    )
}

export default Header

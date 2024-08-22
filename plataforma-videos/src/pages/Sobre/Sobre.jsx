import './Sobre.css'
import styled from 'styled-components'
import Phones from '../../assets/second-image.png'
import GirlCellphone from '../../assets/girl-cellphone.png'

// Aplicando props:
const BoxType = styled.div`
    background-color: ${props => props.corfundo || "#6975E8"};
    border-bottom: ${props => props.corlinha || "solid 2px black"};
    padding: 10px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`
const Button = styled.button`
    background-color: ${props => props.corfundo || "#6975E8"};
    border: ${props => props.borda || "none"};
    color: ${props => props.corfonte || "white"};
    cursor: pointer;
    margin: 13px 10px;
    padding: 10px 0px;
    border-radius: 10px;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.3rem;
    transition: 300ms ease;
    &:hover {
        scale: 95%;
    }
`

function Sobre() {
    return (
        <>
            <div className='content'>
                <div>
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p className='subtitle2'>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                    <button className='start'>Baixe o app</button>
                </div>
                <img className="mainimage2" src={Phones} alt="two cellphones with our video editor on the screen" />
            </div>
            
            <div className='plansbackground'>
                <h4>Planos</h4>
                <div className='plans'>
                    <div className='plansbox'>
                        <BoxType corfundo="#6975E8" corlinha="none">
                            <p className='nametype'>Individual</p>
                        </BoxType>
                        
                        <div className='boxinfo'>
                            <p className='subtitle3'>1 Usuário</p>
                            <select>
                                <option>10 Vídeos R$10,00</option>
                            </select>   
                        </div>

                        <Button>Cadastrar</Button>
                    </div>
                    <div className='plansbox'>
                        <BoxType corfundo="white" corlinha="solid 2px #EBE9E9">
                            <p className='nametype'>Profissional - Times</p>
                        </BoxType>

                        <div className="boxinfo">
                            <p className='subtitle3'>1-10 Usuários</p>
                            <select>
                                <option>Vídeos Ilimitados R$40</option>
                            </select>   
                            <p className='subtitle3'>+10 Usuários</p>
                            <select>
                                <option>Vídeos Ilimitados R$20</option>
                            </select>   
                        </div>
                    
                        <Button corfundo="white" borda="solid 2px #929292" corfonte="black">Cadastrar</Button>
                    </div> 
                    <div className='plansbox'>
                        <BoxType corfundo="white" corlinha="solid 2px #EBE9E9">
                            <p className='nametype'>Corporativo</p>
                        </BoxType>
                        <div className="boxinfo">
                            <img className='corporative-image' src={GirlCellphone} alt="girl on the side of a giant cellphone" />
                        </div>
                        <Button corfundo="white" borda="solid 2px #929292" corfonte="black">Entre Em Contato</Button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Sobre
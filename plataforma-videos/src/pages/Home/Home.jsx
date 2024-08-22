import './Home.css'
import styled from 'styled-components'
import Parkour from '../../assets/first-image.png'
import YouTube from '../../assets/youtube-logo.png'
import TikTok from '../../assets/tiktok-logo.png'
import Facebook from '../../assets/facebook-logo.png'
import Instagram from '../../assets/instagram-logo.png'

// Aplicando props
const Card = styled.div`
    background-color: ${props => props.cor || "#F1C2B0"};
    width: 315px;
    height: 350px;
    padding: 20px 20px 0px 40px;
    border-radius: 20px;
`

function Home() {
    return (
        <>
            <div className='content'>
                <div>
                    <h1>Crie seus vídeos online</h1>
                    <p className='subtitle'>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button className='start'>Começar agora!</button>
                </div>
                <img className="mainimage" src={Parkour} alt="videoplay with a guy jumping behind" />
            </div>
            <div className='cards'>
                <Card cor='#F1C2B0'>
                    <div className='cardelements'>
                        <h2>01</h2>
                        <img className='cardimage' src={YouTube}></img>
                    </div>
                    <h3>YouTube</h3>
                    <p className='boxdescription'>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                </Card>
                <Card cor='#F9EB98'>
                    <div className='cardelements'>
                        <h2>02</h2>
                        <img className='cardimage' src={TikTok}></img>
                    </div>
                    <h3>TikTok</h3>
                    <p className='boxdescription'>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                </Card>
                <Card cor='#C0D9DD'>
                    <div className='cardelements'>
                        <h2>03</h2>
                        <img className='cardimage' src={Facebook}></img>
                    </div>
                    <h3>Facebook</h3>
                    <p className='boxdescription'>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                </Card>
                <Card cor='#6975E8'>
                    <div className='cardelements'>
                        <h2>04</h2>
                        <img className='cardimage' src={Instagram}></img>
                    </div>
                    <h3>Instagram</h3>
                    <p className='boxdescription'>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                </Card>
            </div>
        </>
    )
}

export default Home
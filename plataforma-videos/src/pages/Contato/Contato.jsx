import './Contato.css'
import Twitter from '../../assets/twitter-logo.png'
import Instagram from '../../assets/instagram-logo-2.png'
import Discord from '../../assets/discord-logo.png'

function Contato() {
    async function Notification() {
    const textMessage = document.getElementsByClassName('biginput')[0]
        if (textMessage.value.length < 15) {
            alert("Erro ao enviar mensagem. Tente novamente.")
        } else {
            alert("Mensagem enviada com sucesso!")
        }
    }

    return (
        <div className='supportarea'>
            <div className='infosupport'>
                <h1 className='titlecontact'>Dúvidas e suporte, entre em contato:</h1>
                <div className="socialmedia">
                    <a href='https://x.com/?lang=en'><img className='platform' src={Twitter} alt='twitter logo' /></a>
                    <a href='https://www.instagram.com'><img className='platform' src={Instagram} alt='instagram logo' /></a>
                    <a href='https://discord.com'><img className='platform' src={Discord} alt='discord logo' /></a>
                </div>
            </div>
            <div className='middleswear'>
                <div>
                    <div className='clientswear'>
                        <h5 id='name'>Nome:</h5>
                        <input></input>
                    </div>
                    <div className='clientswear'>
                        <h5 id='email'>E-mail:</h5>
                        <input></input>
                    </div>
                    <h5>Mensagem:</h5>
                    <div className="tosubmit">
                        <textarea className='biginput'></textarea>
                        <button className='swearbutton' onClick={Notification}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato
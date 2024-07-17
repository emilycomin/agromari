import Styles from './Servicos.module.css'
import bathDog from '../../img/puppy-bath-time-stockcake.jpg'
import taxiDog from '../../img/taxidog.jpg'
import veterinary from '../../img/veterinarian-examining-dog.jpg'


export default function Servicos() {
  return (
    <div className={Styles.servicosCards}>
        <div className={Styles.cards}>
            <img src={veterinary} />
            <h2>Atendimento Veterinário</h2>
            <p>
            Drª Helen Beatrice M. L. Soares realliza consultas de clinica geral e dermatologia. <br />
            Atendimento: terças e quintas: 13:30 até 17:00. Sábados: 09:00 até 12:00. 
            <br />Atendimento por ordem de chegada.
            </p>
        </div>
      <div className={Styles.cards}>
        <img src={bathDog} />
        <h2>Banho & Tosa</h2>
        <p>
          Temos ums banho & tosa para deixar seu melhor amigo lindo e cheiroso.
          Agende se horário pelo Whatsapp!
        </p>
      </div>
      <div className={Styles.cards}>
        <img src={taxiDog} />
        <h2>Entregas e Tele-Buscas</h2>
        <p>
          Realizamos entrega de produtos da nossa loja. Também buscamos e
          entregamos seu pet de banho tomado e o que mais ele precisar! <br />
          Verifique área de entrega e taxas adicionais pelo nosso WhatsApp!
        </p>
      </div>
    </div>
  );
}


import styles from '../Contato/Contato.module.css'
import { ImWhatsapp } from "react-icons/im";

export default function Contato() {
  return (
    <div className={styles.contatoContent}>
      <div className={styles.whatsAppButton}>
        <h1>Entre em contato!</h1>
        <p>
          Conheça nossos produtos, tire suas dúvidas, marque seu horário para o
          banho e tosa tudo pelo nosso WhatsApp!
        </p>
        <button>
          <a href="https://api.whatsapp.com/send?phone=555189065594&text=Olá!%20Gostaria%20de%20mais%20informações!">
          <ImWhatsapp />
          </a>
        </button>

        <h1>Horário de funcionamento:</h1>
        <p>Segunda à Sexta: 9:00 até 19:00 <br />
        Sábado: 9:00 até 17:00 <br />
        Domingos e Feriados: Fechados </p>
      </div>
      <div className={styles.googleMaps}>
        <h1>Visite a nossa loja</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.0079529516906!2d-51.178973624743236!3d-30.151188636234174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199b486b981c6d%3A0xebb21f367a6d38ac!2sAgroMari!5e0!3m2!1spt-BR!2sbr!4v1720460563494!5m2!1spt-BR!2sbr">
        </iframe>
      </div>
    </div>
  );
}

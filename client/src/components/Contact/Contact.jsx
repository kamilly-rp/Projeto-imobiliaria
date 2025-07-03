import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Queremos ajudá-lo!</span>
          <span className="primaryText">Entre em contato</span>
          <span className="secondaryText">
            Estamos sempre prontos para ajudar, oferecendo os melhores serviços para você. Acreditamos que um bom lugar para viver pode tornar sua vida melhor.{" "}
          </span>

          <div className="flexColStart contactModes">
            
            
            {/* first row */}
            
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ligue</span>
                    <span className="secondaryText">(11) 95195-6732</span>
                  </div>
                </div>
                <a href="tel:+55(11)95195-6732" className="flexCenter button">Ligue Agora</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">(11) 95195-6732</span>
                  </div>
                </div>
                <a href="https://wa.me/5511951956732?text=Ol%C3%A1%2C%20vim%20pelo%20site.%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20compra%20de%20im%C3%B3veis!" target="_blank" rel="noopener noreferrer" className="flexCenter button">Fale Agora</a>
              </div>
            </div>

            {/* second row */}
            
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">@gsa.negocios. <br /> imobiliarios</span>
                  </div>
                </div>
                <a href="https://www.instagram.com/gsa.negocios.imobiliarios?igsh=c3FkZHphMW1pYzg0" className="flexCenter button">Veja Agora</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Financiamento</span>
                    <span className="secondaryText">Simule de <br /> Maneira Simples! </span>
                  </div>
                </div>
                <a href="https://forms.gle/a36eJHLDEc4Kr8ZX8" className="flexCenter button">Simulação</a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

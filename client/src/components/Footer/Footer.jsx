import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {

  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750434170/footer-gsa_v3yjs6.png" alt="" width={120} />
          <span className="secondaryText">
            NEGÓCIOS IMOBILIÁRIOS LTDA. <br />
            CNPJ: 53.706.918/0001-17 <br />
            CRECI: 46453-J
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Fale conosco!</span>
          <span className="secondaryText">
           <a href="https://www.instagram.com/gsa.negocios.imobiliarios?igsh=c3FkZHphMW1pYzg0" className="secondaryTextLink">Instagram</a> <br />
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=negociosimobiliariosgsa@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Email
            </a> <br />
            
            

            </span>

            {/* footer informaçõoes de contato */}
          <div className="flexCenter f-menu">

            <Link to="/properties" className="link-estilizado">
              Imóveis
            </Link>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kamillyr284@gmail.com&su=Contato%20com%20desenvolvedor&body=Gostaria%20de%20entrar%20em%20contato%20com%20o%20desenvolvedor%20sobre%20..." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Desenvolvedor
            </a> <br />
            
            {/* para add opção de adicionar novos imoveis pelo site. Mas tem que colocar um acesso ai pra só dev conseguir mexer */}
             <div>DevControl</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

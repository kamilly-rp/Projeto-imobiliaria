import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Encontre uma de nossas imobiliárias</span>
          <span className="secondaryText">
            <a href="https://www.google.com/maps/place/Rua+Cadernos+de+Viagem,+47+-+Conj.+Hab.+Castro+Alves,+S%C3%A3o+Paulo+-+SP,+08474-170/@-23.5802367,-46.4042514,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6580e145b2a9:0x2cb746ccfbc3df54!8m2!3d-23.5802367!4d-46.4042514!16s%2Fg%2F11c23w1lyr?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" class="secondaryTextLink">Rua Cadernos de Viagem, 47 - Conj. Hab. Castro Alves / Cidade Tiradentes</a> <br />
            <a href="https://www.google.com/maps/place/R.+Edimundo+Audran,+21+-+Conj.+Hab.+Barro+Branco+II,+S%C3%A3o+Paulo+-+SP,+08473-532/@-23.5832805,-46.393481,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce6f8f588ca9fb:0xa547ef0f96901223!8m2!3d-23.5832805!4d-46.3909007?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" class="secondaryTextLink">Rua Edimundo Audran, 21 - Conj. Hab. Barro Branco II / Cidade Tiradentes </a>
            
            
          </span>
          <button className="button" href>
            <a href="https://wa.me/5511951956732?text=Ol%C3%A1%2C%20vim%20pelo%20site.%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20compra%20de%20im%C3%B3veis!">Contato</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

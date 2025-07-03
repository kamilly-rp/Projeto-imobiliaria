import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
       <Link to="/" className="logo-wrapper">
            <img
              src="https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750432355/gsa01_dacnni.png"
              alt="logo"
              width={100}
            />
            <div className="creci-info">
              <p>NEGÓCIOS IMOBILIÁRIOS LTDA.</p>
              <p>CNPJ: 53.706.918/0001-17</p>
              <p>CRECI: 46453-J</p>
            </div>
        </Link>
        

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
              <NavLink to="/properties">Imóveis</NavLink>  {/* nav header */}
              
              <a href="https://forms.gle/a36eJHLDEc4Kr8ZX8">Simulação</a> {/* nav header*/}

              {/* botton de contato nav*/}
            <a
            href="https://wa.me/5511951956732?text=Ol%C3%A1%2C%20vim%20pelo%20site.%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20compra%20de%20im%C3%B3veis!" 
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Contato
            </a>

          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

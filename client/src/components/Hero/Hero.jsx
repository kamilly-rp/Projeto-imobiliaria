import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/properties?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              O Lar dos <br />
              seus sonhos
              <br /> começa aqui!
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Encontre o imóvel perfeito com quem valoriza cada conquista!</span>
            <span></span>
          </div>

          <SearchBar onSearch={handleSearch} />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Clientes <br />atendidos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={950} end={1000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Negócios <br /> fechados</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={800} /> <span>+</span>
              </span>
              <span className="secondaryText">Famílias<br />Satisfeitas</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img
              src="https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750442025/paisagem-analogica-da-cidade-com-edificios_23-2149661456_mgby02.jpg"
              alt="houses"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

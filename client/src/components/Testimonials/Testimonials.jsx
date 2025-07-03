// src/components/Testimonials/Testimonials.jsx
import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ingrid",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750440730/cliente-01_xewgx8.jpg",
    comment: "O atendimento foi impecável do começo ao fim, Guilherme corretor nota 1000, as meninas do escritório são incríveis... Obrigada por me ajudarem a conquistar minha casa própria!!!! ❤️🔥",
  },
  {
    name: "Ana Karolina",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750440729/cliente-02_rvnrac.jpg",
    comment: "Obrigada pela atenção que tiveram comigo! Excelente",
  },
  {
    name: "Paloma",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751029804/Cliente-paloma-01_zkqaar.jpg",
    comment: "Obrigada pela atenção que tiveram comigo! Excelente atendimento.",
  },
   
  {
    name: "Mariane",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750438799/icon-gsa_vdhbdg.png",
    comment: "Tudo ótimo pra mim, claro que todos os dias aprendemos mais, eu Mariane, só tenho q agradecer o vendedor Mateus, um grande vendedor dedicado, atencioso e claro se colocar no lugar do cliente. A Aline tbm, os dois foi muito paciente, como me ensinou na parte de tecnologia pra assinar. Sem palavras parabéns a todos, ótimos funcionários. Tenho certeza que a empresa gsa da forma que está, cada dia mais vai espandir no mercado de trabalho, já indiquei Mateus pra várias pessoas. Deus abençoe sempre",
  },

  {
    name: "Michele Castro",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750438799/icon-gsa_vdhbdg.png",
    comment: "Bom minha família inteira em oração de agradecimento, pela ajuda tanto sua como do Guilherme e as orações tbm voltadas em agradecimento a vcs. Serei eternamente grata. Obrigada mesmo, pela atenção paciência conosco  gratidão ",
  },

  {
    name: "Mariana Rodrigues",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1750438799/icon-gsa_vdhbdg.png",
    comment: "Muito obrigada por ajudar nós realizar nosso sonho da casa própria vocês são incríveis, nos deu bastante assistência, esperanças e agora estamos aqui com as chaves 🥰🎉🎉 muitooooo obrigadaaaaa com certeza indicarei GSA 🙏🏻🎉",
  },

   {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031477/Cliente-06_wjlx7x.png",
    // sem comment
  },

{
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031476/Cliente-05_x3d6qd.png",
    // sem comment
  },

{
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031474/Cliente-04_e8eyrm.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031473/Cliente-18_iqhe8l.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031468/Cliente-15_q1e1wa.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031471/Cliente-20_i4nkek.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031470/Cliente-19_mipr8l.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031469/Cliente-17_e46z0y.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031468/Cliente-16_ura8tr.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031466/Cliente-13_vpewvn.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031466/Cliente-14_szykpq.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031465/Cliente-12_ivkxjp.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031464/Cliente-11_bqxzly.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031463/Cliente-10_tol6ao.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031463/Cliente-09_gonuoq.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031462/Cliente-08_hneinv.png",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751031462/Cliente-07_rnh6qm.png",
    // sem comment
  },
{
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751034626/cliente-22_xyxxl9.jpg",
    // sem comment
  },

  {
    name: "Cliente Satisfeito",
    image: "https://res.cloudinary.com/dfwzpqhaz/image/upload/v1751034626/cliente-21_pitq4y.jpg",
    // sem comment
  },

];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const { name, image, comment } = testimonials[index];

  return (
    
      
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="title-comment"><h2>Avaliações</h2></div>
        <p>Veja os comentários de nossos clientes</p>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>

    

      

     
      <div className="testimonial-card">
        <img src={image} alt={name} className="testimonial-image" />
        <p className="testimonial-comment">
          "{comment || 'Seja o próximo a adquirir seu imóvel! aqui na GSA'}"
        </p>
        <h3 className="testimonial-name">- {name}</h3>

          <div className="testimonial-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button
                  onClick={prev}
                  className="r-prevButton"
                  style={{
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.8)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 30,
                    height: 30,
                  }}
                >
                  &#10094;
            </button>

            <button
                  onClick={next}
                  className="r-nextButton"
                  style={{
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.8)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 30,
                    height: 30,
                  }}
                >
                  &#10095;
            </button>
            </div>

      </div>
    </section>
  );
};

export default Testimonials;

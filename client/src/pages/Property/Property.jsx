import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getProperty } from '../../utils/api';
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from 'react-icons/ai';
import './Property.css';

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";

import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const scrollRef = useRef(null);

  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">

        {/* Like button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        
        {/* codigo de cada imovel */}
            <div style={{ marginTop: '0.1rem', fontWeight: '400', color: 'gray' }}>
                Código: {data?.code}
            </div>
        
        
        {/* Main image */}
        <img src={data?.image} alt="home image" />

        {/* Gallery with scroll buttons */}
        <div style={{ position: 'relative', width: '100%', marginTop: '1rem' }}>
          <button
            onClick={scrollLeft}
            className="r-prevButton"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
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
            onClick={scrollRight}
            className="r-nextButton"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
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

          <div
            className="image-scroll-container"
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              padding: '10px 40px', // para não cobrir os botões
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none' // IE 10+
            }}
          >
            {/* Esconde scrollbar no Chrome, Edge e Safari */}
            <style>{`
              .image-scroll-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {data?.carrossel?.map((imgUrl, index) =>
              imgUrl.endsWith(".mp4") ? (
                <video
                  key={index}
                  controls
                  className="scroll-video"
                  style={{ height: "220px", borderRadius: "8px", flexShrink: 0 }}
                >
                  <source src={imgUrl} type="video/mp4" />
                  Seu navegador não suporta o vídeo.
                </video>
              ) : (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`property image ${index + 1}`}
                  className="scroll-image"
                  style={{ height: "220px", cursor: "pointer", borderRadius: "8px", flexShrink: 0 }}
                  onClick={(e) => {
                    if (e.target.requestFullscreen) {
                      e.target.requestFullscreen();
                    } else if (e.target.webkitRequestFullscreen) {
                      e.target.webkitRequestFullscreen();
                    } else if (e.target.mozRequestFullScreen) {
                      e.target.mozRequestFullScreen();
                    } else if (e.target.msRequestFullscreen) {
                      e.target.msRequestFullscreen();
                    }
                  }}
                />
              )
            )}
          </div>
        </div>


         {/* Informações financeiras */}
        <div className="financial-info" style={{
                backgroundColor: "#f5f5f5",
                padding: "1rem",
                borderRadius: "8px",
                marginTop: "1rem",
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap"
            }}>
            <span className="secondaryText"><strong>Aceita Financiamento:</strong> {data?.financing || 'Não informado'}</span>
            <span className="secondaryText"><strong>IPTU:</strong> {data?.iptu ? `R$ ${Number(data.iptu).toLocaleString('pt-BR')}` : 'Não informado'}</span>
            <span className="secondaryText"><strong>Entrada:</strong> {data?.downPayment ? `R$ ${Number(data.downPayment).toLocaleString('pt-BR')}` : 'Não informado'}</span>
        </div>   


        {/* Details container */}
        <div className="flexCenter property-details">

          {/* Left side */}
          <div className="flexColStart left">
            {/* Head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: '1.5rem' }}>
                R$ {Number(data?.price || 0).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
              </span>
            </div>

            
         


            {/* Facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} BANHEIROS</span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parking} GARAGEM</span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} QUARTOS</span>
              </div>
              <div className="flexStart facility">
                <FontAwesomeIcon icon={faRulerCombined} size="lg" color="#1F3E72" />
                <span>{data?.facilities?.area} ÁREA CONSTRUÍDA</span>
              </div>
            </div>

            {/* Description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* Address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address} {data?.city} {data?.country}
              </span>
            </div>

            {/* Booking Button */}
           
           
           {/* WhatsApp com mensagem personalizada */}
            <a
                href={`https://wa.me/5511951956732?text=${encodeURIComponent(
                  `(Por gentileza, não edite essa mensagem, desta maneira nossa equipe poderá atendê-lo de uma maneira mais dinâmica)\n Olá, vim pelo site.\nTenho interesse no imóvel "${data?.title}", código ${data?.code}. Poderia me passar mais informações?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
              >
                Entre em contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

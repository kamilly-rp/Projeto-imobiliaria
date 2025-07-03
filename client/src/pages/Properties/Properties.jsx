import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Properties.css';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  const handleSearch = (query) => {
    const result = data.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const city = item.city?.toLowerCase() || "";
      const address = item.address?.toLowerCase() || "";

      return (
        title.includes(query) ||
        city.includes(query) ||
        address.includes(query)
      );
    });

    setFilteredData(result);
  };

  if (isError) {
    return (
      <div className='wrapper'>
        <span>Erro ao carregar dados. Aguarde...</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar onSearch={handleSearch} />

        <div className="paddings flexCenter properties">
          {
            filteredData.length > 0 ? (
              filteredData.map((card, i) => <PropertyCard card={card} key={i} />)
            ) : (
              <p>Nenhum imóvel encontrado com esse termo. <br /> Digite corretamente.</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;

import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarousel from "../components/ImageCarousel";




const PaginaDoImovel = ({ id }) => {
  const [residency, setResidency] = useState(null);

  useEffect(() => {
 fetch(`/api/residency/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log("Dados recebidos da API:", data); // <-- Adiciona isso aqui
      setResidency(data);
    });
}, [id]);


  if (!residency) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{residency.title}</h1>
      <ImovelCarrossel imagens={residency.carrossel} />
    </div>
  );
};

export default PaginaDoImovel;

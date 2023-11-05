import React    from "react";
import HeroList from "../../Components/HeroList/HeroList";
import background from "../../assets/images/BackgroundHQ.jpg";

const backgroundStyles = {
  backgroundImage: `url(${background})`,
  backgroundSize: "50%",
};
const HeroesListPage = () => {
  const [heroes, setHeroes] = React.useState([]);

  React.useEffect(() => {
    fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Erro ao obter os dados dos heróis:', error));
  }, []);

  return (
    <div style={backgroundStyles}>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default HeroesListPage;

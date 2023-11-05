import React, { useState, useEffect } from 'react';
import { Grid, InputAdornment, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HeroCard from '../HeroCard/HeroCard';
import HeroDetails from '../HeroDetails/HeroDetails'; 
import HeroComparison from '../HeroComparison/HeroComparison';
import backgroundButtonBlue from "../../assets/images/blueButton.jpg";
import backgroundButtonRed from "../../assets/images/redButton.jpg";


const HeroList = ({ heroes, onHeroSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [showWinnerButton, setShowWinnerButton] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [showDetails, setShowDetails] = useState(false);
  const [selectedHeroDetails, setSelectedHeroDetails] = useState(null);
  const handleHeroSelect = (hero) => {
    let updatedSelectedHeroes;

    if (selectedHeroes.length < 2) {
      if (selectedHeroes.includes(hero)) {
        updatedSelectedHeroes = selectedHeroes.filter(
          selectedHero => selectedHero !== hero
        );
      } else {
        updatedSelectedHeroes = [...selectedHeroes, hero];
      }
    } else {
      updatedSelectedHeroes = [hero];
    }

    setSelectedHeroes(updatedSelectedHeroes);
  };

  useEffect(() => {
    if (selectedHeroes.length === 2) {
      setShowWinnerButton(true);
    } else {
      setShowWinnerButton(false);
    }
  }, [selectedHeroes]);

  const handleWinner = () => {
    if (selectedHeroes.length === 2) {
      const [hero1, hero2] = selectedHeroes;

      const calculateTotalPower = (hero) => {
        const { powerstats } = hero;
        return Object.values(powerstats).reduce((total, stat) => total + parseInt(stat), 0);
      };

      const totalPowerHero1 = calculateTotalPower(hero1);
      const totalPowerHero2 = calculateTotalPower(hero2);

      let winnerName;
      if (totalPowerHero1 > totalPowerHero2) {
        winnerName = "The winner is: " + hero1.name;
      } else if (totalPowerHero2 > totalPowerHero1) {
        winnerName = "The winner is: " + hero2.name;
      } else {
        winnerName = "It's a tie!";
      }

      setWinnerName(winnerName);
      setShowModal(true); 
    }
  };
  const handleViewDetails = () => {
    if (selectedHeroes.length === 1) {
      setSelectedHeroDetails(selectedHeroes[0]);
      setShowDetails(true);
    } else if (selectedHeroes.length === 2) {
      setSelectedHeroDetails(selectedHeroes[1]);
      setShowDetails(true);
    }
  };
  const handleCloseDetails = () => {
    setSelectedHeroDetails(null);
    setShowDetails(false);
  };
  const handleClose = () => {
    setSelectedHeroes([]); 
    setShowModal(false); 
    setWinnerName(''); 
  };

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Styles = {
    textField: {
      width: "30%",
      background: 'white',
      border: '2px solid black',
      margin: '20px',
    },
    blue: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      color: '#ff0',
      backgroundImage: `url(${backgroundButtonBlue})`,
      backgroundSize: "250%",
      fontFamily: 'Bangers, sans-serif',
      fontSize: '200%', 
      border: '3px solid #000', 
      textShadow: '8px 4px 8px #000000', 
    },
    red: {
      position: 'fixed',
      bottom: '20px',
      color: '#ff0',
      backgroundImage: `url(${backgroundButtonRed})`,
      backgroundSize: "250%",
      fontFamily: 'Bangers, sans-serif',
      fontSize: '200%', 
      border: '3px solid #000', 
      textShadow: '8px 4px 8px #000000', 
      left: '20px',
    },
    title: {
      fontFamily: 'Bangers, sans-serif',
      fontWeight: 'bold',
      fontSize: '600%',
      textAlign: 'left',
      marginBottom: '-5%',
      marginLeft: '10%',
      color: 'transparent', 
      WebkitBackgroundClip: 'text',
      backgroundImage: '#000', 
      textShadow: '4px 4px 2px #f00', 
      
    }    
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={Styles.title}>
          SUPER HEROES BATTLE
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'right', paddingRight: '20px' }}>
          <TextField
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={Styles.textField}
          />
        </Grid>
        {filteredHeroes.map((hero) => (
          <Grid item key={hero.id} xs={12} sm={6} md={4} lg={2} sx={{ px: 0 }}>
            <HeroCard
              key={hero.id}
              hero={hero}
              onHeroSelect={handleHeroSelect}
              isSelected={selectedHeroes.includes(hero)}
              isSecondSelected={selectedHeroes.indexOf(hero) === 1}
            />
          </Grid>
        ))}
      </Grid>
      {selectedHeroes.length > 0 && (
        <Button
          variant="contained"
          onClick={() => handleViewDetails(selectedHeroes[0])} 
          style={Styles.red}
        >
          View Details
        </Button>
      )}
      {showWinnerButton && (
        <Button
          variant="contained"
          onClick={handleWinner}
          style={Styles.blue}
        >
          View Winner
        </Button>
      )}
      {showDetails && selectedHeroDetails && (
        <HeroDetails
          hero={selectedHeroDetails}
          handleCloseDetails={handleCloseDetails}
        />
      )}
  
      {showModal && selectedHeroes.length > 0 && (
        <HeroComparison
          hero1={selectedHeroes[0]}
          hero2={selectedHeroes[1]}
          winnerName={winnerName}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default HeroList;

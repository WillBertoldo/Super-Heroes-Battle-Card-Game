import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import background from "../../assets/images/fundo.jpg";
import './HeroComparison.css'; 

const styles = {
  card: {
    border: '3px solid #000', 
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '10px',
    width: '95%',
    height: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: "100%",
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
  powerStats: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    marginLeft: '15%',
    width: '65%',
    height: '65%',
    objectFit: 'cover',
    border: '4px solid #91460A', 
    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
  },
  heroComparisonContainer: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffff00',
    fontFamily: 'Bangers, sans-serif',
    fontSize: '400%',  
    textShadow: '8px 4px 8px #000000', 

  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  CardContent:{
    border: '3px solid #000', 
    margin: '5%',
    backgroundColor: '#b4713d', 
  },
  name: {
    fontSize: '200%',
    border: '3px solid #B1662A', 
    marginTop: '-10px',
    marginBottom: '10px',
    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
  },
  skills: {
    border: '3px solid #B1662A', 
    margin: "5%",
    marginTop: '5%',
    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
    backgroundColor: '#B3784C', 
    width: '90%',
  },
  skillsGrid: {
    width: '50%',
    textAlign: 'left',
  },

};

const HeroComparison = ({ hero1, hero2, winnerName, handleClose }) => {
  const resetSelectedHeroes = () => {
    handleClose();
  };

  const renderPowerStats = (hero) => {
    return (
      <div style={styles.powerStats}>
        <Typography variant="subtitle1" style={styles.name}>{hero.name}</Typography>
        <img src={hero.images.md} alt={hero.name} style={styles.image} />
  
        <Grid container spacing={3} style={styles.skills}>
          <Grid item xs={6} style={styles.skillsGrid}>
            <Typography style={{ fontWeight: 'bold' }}>Intelligence: {hero.powerstats.intelligence}</Typography>
            <Typography style={{ fontWeight: 'bold' }}>Strength: {hero.powerstats.strength}</Typography>
            <Typography style={{ fontWeight: 'bold' }}>Speed: {hero.powerstats.speed}</Typography>
          </Grid>
          <Grid item xs={6} style={styles.skillsGrid}>
            <Typography style={{ fontWeight: 'bold' }}>Durability: {hero.powerstats.durability}</Typography>
            <Typography style={{ fontWeight: 'bold' }}>Power: {hero.powerstats.power}</Typography>
            <Typography style={{ fontWeight: 'bold' }}>Combat: {hero.powerstats.combat}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <Card style={styles.card}>
        <CardContent style={styles.CardContent}>
          {renderPowerStats(hero1)}
        </CardContent>
        <CardContent style={styles.CardContent}>
          {renderPowerStats(hero2)}
        </CardContent>
        <Button onClick={resetSelectedHeroes} style={styles.closeButton}>X</Button>
      </Card>
      <Typography variant="h5" align="center" style={styles.heroComparisonContainer}>
        {winnerName}
      </Typography>
    </div>
  );

};

export default HeroComparison;

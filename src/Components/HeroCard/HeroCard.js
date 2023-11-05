import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const styles = {
  card: {
    margin: '0',
    marginLeft:'15%',
    width: "150px",
    height: '225px',
    backgroundColor: '#b4713d', 
    border: '4px solid #000', 
    cursor: 'pointer',
    position: 'relative', 
  },
  image: {
    marginBottom: '10px',
    width: '100%',
    border: '2px solid #A2673B', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'
  },
  selected: {
    borderColor: '#0000ff',
  },
  selected2: {
    borderColor: '#ff0000',
  },
  title: {
    fontSize: '12px', 
    border:'2px solid #A2673B' , 
    marginTop: '-10px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'
  }
};

const HeroCard = ({ hero, onHeroSelect, isSelected, isSecondSelected }) => {
  const handleClick = () => {
    if (typeof onHeroSelect === 'function') {
      onHeroSelect(hero);
    }
  };

  return (
    <Card
      onClick={handleClick}
      style={{
        ...styles.card,
        ...(isSelected ? styles.selected : {}),
        ...(isSecondSelected ? styles.selected2 : {}),
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h5" style={{ ...styles.title }}>
          {hero.name}
        </Typography>
        <img src={hero.images.md} alt={hero.name} style={styles.image} />
      </CardContent>
    </Card>
  );
};


export default HeroCard;

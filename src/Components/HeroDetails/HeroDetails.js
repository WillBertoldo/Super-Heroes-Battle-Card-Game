import { Grid, InputAdornment, TextField, Button } from '@material-ui/core';
import React from "react";
import background from "../../assets/images/redButton.jpg";


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
    fontFamily: 'Bangers, sans-serif',
    fontWeight: 'bold',
    fontSize: '100%',  

  },
  image: {
    width: '50%',
    height: '80%',
    border: '3px solid #000', 
    padding: '8px',
    backgroundColor: '#fff', 
  },
  name:{
    marginBottom:'12%',
    fontSize: '200%',  
    width: '90%',
    height: '10%',
    margin: '10%',
    marginTop: '2%',
    color: '#ffff00',
    backgroundImage: '#000', 
    textShadow: '4px 4px 2px #000', 
  },
  session: {
    fontSize: '150%',  
    margin: '0%',
    width: '50%',
    height: '80%',
    border: '3px solid #000', 
    padding: '8px',
    backgroundColor: '#fff', 
    textAlign: 'left',
  },
  sessions:{
    marginLeft: '-10%',
    marginTop: '0.5%',

  },
  bodyCard:{
    marginTop:'-8%',
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
};

const HeroDetails = ({ hero, handleCloseDetails }) => {
  
  return (
    <div>
      <Grid container style={styles.card}>
        <Grid item xs={12} style={styles.name}>
          <h2>{hero.name} Details:</h2>
        </Grid>
        <Grid container style={styles.bodyCard}>
          <Grid item xs={12} sm={6}>
            <img src={hero.images.md} alt={hero.name} style={styles.image} />
          </Grid>
          <Grid container item xs={12} sm={6} spacing={3} style={styles.sessions}>
            <Grid item style={styles.session}>
              <p ><strong>APPEARANCE</strong></p>
              <p><strong>Gender:</strong> {hero.appearance.gender}</p>
              <p><strong>Race:</strong> {hero.appearance.race}</p>
              <p><strong>Height:</strong> {hero.appearance.height}</p>
              <p><strong>Weight:</strong> {hero.appearance.weight}</p>
              <p><strong>Eye Color:</strong> {hero.appearance.eyeColor}</p>
              <p><strong>Hair Color:</strong> {hero.appearance.hairColor}</p>

            </Grid>
            <Grid item style={styles.session}>
            <p><strong>BIOGRAPHY</strong></p>
              <p><strong>Place of Birth:</strong> {hero.biography.placeOfBirth}</p>
              <p><strong>Full Name:</strong> {hero.biography.fullName}</p>
              <p><strong>Occupation:</strong> {hero.work.occupation}</p>
              <p><strong>Group Affiliation:</strong> {hero.connections.groupAffiliation}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <Button onClick={handleCloseDetails} style={styles.closeButton}>X</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroDetails;

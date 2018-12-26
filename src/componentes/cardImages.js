// COMPONENT REACT
import React from 'react';
import Card from '@material-ui/core/Card';


// STYLES
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// COMPONENT 
import PropTypes from 'prop-types';

//IMAGES 
import Img3 from '../img/img.jpg';
import Img1 from '../img/img_1.jpg'
import img2 from '../img/img_2.jpg'


const styles = {
  card: {
    maxWidth: 345,
    height: 140,
    marginTop: '5%',
    marginBottom: '5%'
  },
  media: {
    height: 140,
  },
  foto: {
    maxWidth: '100%',
    marginLeft: '1%',
    marginRight: '1%'
  }
};

class Images extends React.Component {

  // COMPONENT CARDS IMAGEM
  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <img src={Img3}
              className={classes.foto}
              alt={'Abrindo nossos futuros'}
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <img src={Img1} className={classes.foto} alt={'Programação é o futuro'} />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <img src={img2} className={classes.foto} alt={'netWork'} />
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}
Images.propTypes = {
  classes: PropTypes.object,
};


export default withStyles(styles)(Images);
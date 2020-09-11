// Write your Character component here
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from './CharrModal.js';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 15
    },
    actions: {
        justifyContent: "center",
    }
});

function Character(props) {
    const classes = useStyles();
    const character = props.props;

    console.log(props);

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={character.name}
                    height="140"
                    image={character.image}
                    title={character.name}
                    />
                    <CardContent>
                        <Typography noWrap gutterBottom variant="h5" component="h2">{character.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Status: {character.status}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.actions}>
                    <Modal props={character}></Modal>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Character;
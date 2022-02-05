import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const TrelloCard =({text}) =>{
    return(
        <Card style={styles.cardContainer}>
          <Typography gutterBottom>
            {text}
          </Typography>
      </Card>  
    )
}

const styles ={
    cardContainer: {
        marginBottom: 8
    }
}

export default TrelloCard;
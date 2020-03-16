import React from "react"

import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"

class Ecuson extends React.Component {
  render(){
    return(
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictogram-vector-11333805.jpg) center / cover'}}>Info</CardTitle>
        <CardText>
          I am a boy with a very strong passion for Web Development and Cyber Security.
          I hope you like it and you can learn something from it
        </CardText>
        <CardActions border>
            <Button colored>Enjoy</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    )
  }
}

export default Ecuson
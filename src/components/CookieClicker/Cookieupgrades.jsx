import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button
} from "../../../node_modules/@material-ui/core";

class CookieUpgrades extends Component {
  componentDidMount() {
    console.log(this.props.upgrades);
  }
  windowHeight() {
    return document.documentElement.scrollHeight - 100;
  }
  render() {
    // const { mouse, grandma } = this.props.upgrades;
    return (
      <Grid
        item
        xs={6}
        style={{
          marginTop: 5,
          overflowX: "hidden",
          overflowY: "scroll",
          height: "calc(100vh - 70px)"
        }}
      >
        {this.props.upgrades
          .slice(0, this.props.level)
          .map((content, index) => (
            <Paper key={index}>
              <Typography variant="display1" align="center">
                <img src={content.gfx} alt={content.upgrade} />
              </Typography>
              <Typography variant="display1" align="center">
                {content.upgrade}
              </Typography>
              <Typography align="center">
                Ilość posiadanych: {content.count}
              </Typography>
              <Typography align="center">
                Mnożnik: {content.multiplier}
              </Typography>
              <Typography align="center">Koszt: {content.price} </Typography>
              <Typography align="center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  onClick={() => this.props.onUpgrade(index)}
                >
                  Kupuj
                </Button>
              </Typography>
            </Paper>
          ))}
      </Grid>
    );
  }
}

export default CookieUpgrades;

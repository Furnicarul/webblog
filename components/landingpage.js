import React from "react"

import { Grid, Cell } from "react-mdl"

import Ecuson from "./ecuson"

class Landing extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Ecuson />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
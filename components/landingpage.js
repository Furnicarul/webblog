import React from "react"

import { Grid, Cell } from "react-mdl"
import { Spinner } from "react-mdl"
import { Chip, ChipContact } from "react-mdl"

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
        <div className="spinner">
          <Chip onClick={e => { window.open('https://github.com/Furnicarul', '_blank'); }} style={{marginLeft: '8px'}}>GitHub Chip</Chip>
          <Chip onClick={e => { window.open('https://www.hackthebox.eu/home/users/profile/103339', '_blank'); }} style={{marginLeft: '8px'}}>HackTheBox Chip</Chip>
        </div>
      </div>
    )
  }
}

export default Landing
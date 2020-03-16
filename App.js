import React from "react"
import "./style.css"

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import { Link } from "react-router-dom"

import Main from "./components/main"

class App extends React.Component {
  render(){
    return(
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Archive" scroll>
                <Navigation className="nav-hover">
                    <Link to="/aboutme">About me</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Header>
            <Drawer title="Events">
                <Navigation>
                    <Link to="/hackthebox">HackTheBox</Link>
                    <Link to="/ctf">CTF</Link>
                    <Link to="/writeups">Writeups</Link>
                    <Link to="/tryhackm">TryHackMe</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    )
  }
}

export default App
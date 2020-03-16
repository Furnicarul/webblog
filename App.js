import React from "react"
import "./style.css"

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import { Link } from "react-router-dom"
import { FooterLinkList, FooterSection, Footer } from "react-mdl"

import Main from "./components/main"

import FooterStable from "./components/footer"

class App extends React.Component {
  render(){
    return(
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Archive" scroll>
                <Navigation className="nav-hover">
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Header>
            <Drawer title="Events">
                <Navigation>
                    <Link to="/hackthebox">HackTheBox</Link>
                    <Link to="/ctf">CTF</Link>
                    <Link to="/writeups">Writeups</Link>
                    <Link to="/tryhackme">TryHackMe</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
            <FooterStable />
        </Layout>
      </div>
    )
  }
}

export default App
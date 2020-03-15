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
            <Header title="Title" scroll>
                <Navigation>
                    <Link to="#">About me</Link>
                    <Link to="#">Contact</Link>
                    <Link to="#">Projects</Link>
                    <Link to="#">Resum</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
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
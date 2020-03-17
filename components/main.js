import React from "react"

import LandingPage from "./landingpage"
import About from "./aboutme"
import Projects from "./projects"
import Skills from "./skills"

import HackTheBox from "./hackthebox"
import Ctf from "./ctf"
import Writeups from "./writeups"
import TryHackMe from "./tryhackme"

import NoMatch from "./nomatch"

import { Switch, Route } from "react-router-dom"

import "../style.css"

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/hackthebox" component={HackTheBox} />
    <Route path="/ctf" component={Ctf} />
    <Route path="/writeups" component={Writeups} />
    <Route path="/tryhackme" component={TryHackMe} />
    <Route path="/skills" component={Skills} />
    <Route component={NoMatch} />
  </Switch>
)

export default Main
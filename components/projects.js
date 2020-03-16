import React from "react"

import { Tabs, Tab } from "react-mdl"

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }

 
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>PUG</Tab>
        </Tabs>
        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    )
  }
}

export default Projects
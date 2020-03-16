import React from "react"

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
          <Tab>
            
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Projects
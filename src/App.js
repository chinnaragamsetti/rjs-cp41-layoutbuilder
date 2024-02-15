import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'
import ConfigurationController from './components/ConfigurationController'

class App extends Component {
  state = {
    showContent: false,
    showLeftNavbar: false,
    showRightNavbar: false,
  }

  onToggleShowContent = () => {
    this.setState(prevSatate => ({showContent: !prevSatate.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevSatate => ({showLeftNavbar: !prevSatate.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevSatate => ({
      showRightNavbar: !prevSatate.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="appcontainer">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

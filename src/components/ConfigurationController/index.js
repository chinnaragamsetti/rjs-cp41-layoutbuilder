// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickContent = () => {
        onToggleShowContent()
      }
      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configcontainer">
          <h1 className="confighead">Layout</h1>
          <div className="inputlabelcontainer">
            <input type="checkbox" id="content" onClick={onClickContent} />
            <label htmlFor="content" className="bartext">
              Content
            </label>
          </div>
          <div className="inputlabelcontainer">
            <input type="checkbox" id="leftnav" onClick={onClickLeftNavbar} />
            <label htmlFor="leftnav" className="bartext">
              Left Navbar
            </label>
          </div>
          <div className="inputlabelcontainer">
            <input type="checkbox" id="rightnav" onClick={onClickRightNavbar} />
            <label htmlFor="rightnav" className="bartext">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

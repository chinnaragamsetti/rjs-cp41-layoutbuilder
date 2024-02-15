// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="bodycontainer">
          {showLeftNavbar && (
            <div className="leftcontainer">
              <h1 className="leftbarhead">Left Navbar Menu</h1>
              <ul className="list">
                <li className="leftbartext">Item 1</li>
                <li className="leftbartext">Item 2</li>
                <li className="leftbartext">Item 3</li>
                <li className="leftbartext">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="contentcontainer">
              <h1 className="contenthead">Content</h1>
              <p className="contentext">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                eiusmod tempor inicididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightcontainer">
              <h1 className="righthead">Right Navbar Menu</h1>
              <p className="ad">Ad 1</p>
              <p className="ad">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

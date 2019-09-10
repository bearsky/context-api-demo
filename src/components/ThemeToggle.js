import React, { Component } from 'react'
import ToggleButton from 'react-toggle-button'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class ThemeToggle extends Component {
  static contextType = ThemeContext
  render() {
    const { toggleTheme, isLightTheme } = this.context
    return (
      <AuthContext.Consumer>
        {authContext => {
          const { isAuthenticated } = authContext

          const toggle = () => {
            return (
              // SIMPLE BUTTON WAY:
              // <button onClick={toggleTheme}>Toggle Theme</button>

              // TOGGLE BUTTON COMPONENT WAY:
              <label style={{display: 'flex', justifyContent: 'space-between' }}>
              <span>Toggle Theme: </span>
              <ToggleButton
                inactiveLabel={''}
                activeLabel={''}
                activeLabelStyle={{color: 'rgb(65, 65, 65)'}}
                value={isLightTheme}
                onToggle={toggleTheme}
                colors={{
                  activeThumb: {
                    base: 'rgb(65,66,68)',
                  },
                  inactiveThumb: {
                    base: 'rgb(250,250,250)',
                  },
                  active: {
                    base: 'rgb(238, 238, 238)',
                    hover: 'rgb(221, 221, 221)',
                  },
                  inactive: {
                    base: 'rgb(65,66,68)',
                    hover: 'rgb(95,96,98)',
                  }
                }}
                />
              </label>
            )
          }

          return isAuthenticated ? toggle() : null
        }}
      </AuthContext.Consumer>

    )
  }
}

export default ThemeToggle

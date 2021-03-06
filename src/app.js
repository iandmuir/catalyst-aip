import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Info from './pages/Info'

import config from './config'

export default function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/explore'>
          <Explore
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            config={config.ke}
            theme={config.theme}
          />
        </Route>
        <Route path='/info'>
          <Info siteAcronym={config.siteAcronym} theme={config.theme} />
        </Route>
        <Route path='/'>
          <Home
            siteAcronym={config.siteAcronym}
            siteName={config.siteName}
            imageUrl={config.imageUrl}
            theme={config.theme}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

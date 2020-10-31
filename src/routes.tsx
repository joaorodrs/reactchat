import React from 'react'

import { BrowserRouter, Route,  } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={SignIn} />
      <Route path="/app" component={Home} />
    </BrowserRouter>
  )
}

export default Routes
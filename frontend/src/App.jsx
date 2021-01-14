import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Board } from './pages/Board'
import { CardEdit } from './pages/CardEdit'
import { AppHeader } from './cmps/AppHeader'




export function App() {
  return (
    <div className="app">
      <Router>
        <main>
        <AppHeader />
          <Switch>
            {/* <Route path="/user/:id" component={UserDetails} /> */}
            {/* <Route path="/login" component={LoginSignup} /> */}
            {/* <Route path="/chat" component={Chat} /> */}
            <Route path="/board/:id/card/:cardId" component={CardEdit} />
            <Route path="/board/:id" component={Board} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
    
        </footer>
      </Router>
    </div>
  )
}


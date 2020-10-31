import React from 'react'

import { BrowserRouter, Route,  } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

interface Props {
  auth: firebase.auth.Auth,
  firestore: firebase.firestore.Firestore
}

const Routes: React.FC<Props> = ({ auth, firestore }) => {
  const [user] = useAuthState(auth)

  return (
    <BrowserRouter>
      {user ? <Route path="/" component={() => (
        <Home firestore={firestore} auth={auth} />
      )} /> : <Route path="/" component={() => (
        <SignIn firestore={firestore} auth={auth} />
      )} />}
    </BrowserRouter>
  )
}

export default Routes
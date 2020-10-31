import React from 'react'

import { BrowserRouter, Route,  } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAUky8NQpEYt4ebCTCAV02MlzfwI1xDfKM",
  authDomain: "reactchat-br.firebaseapp.com",
  databaseURL: "https://reactchat-br.firebaseio.com",
  projectId: "reactchat-br",
  storageBucket: "reactchat-br.appspot.com",
  messagingSenderId: "1029898722836",
  appId: "1:1029898722836:web:14a6fe44593a2dbae15101"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const Routes: React.FC = () => {
  const [user] = useAuthState(auth)

  return (
    <BrowserRouter>
      {user ? <Route path="/" component={() => <Home />} /> : <Route path="/" component={SignIn} />}
    </BrowserRouter>
  )
}

export default Routes
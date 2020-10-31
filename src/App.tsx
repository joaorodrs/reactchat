import React from 'react'

import Routes from './routes'

import GlobalStyles from './styles/GlobalStyles'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

function App() {
  return (
    <>
      <Routes
        auth={auth}
        firestore={firestore}
      />

      <GlobalStyles />
    </>
  )
}

export default App

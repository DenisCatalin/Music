import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './global.styles'
import Login from './pages/login/login.component';

const App = () => {
    const currentUser = false;

    return (
        <Router>
            <GlobalStyles />   
            <Route exact path="/" render={() => currentUser ? (<Redirect to='/home' />) : (<Redirect to='/signin' />)} />
            <Route path='/signin' component={Login}/>
        </Router>
    )
}

export default App;
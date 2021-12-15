import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './global.styles'
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';

const App = () => {
    const currentUser = localStorage.getItem('currentUser');
    console.log(currentUser);

    return (
        <Router>
            <GlobalStyles />   
            <Route exact path="/" render={() => currentUser === 'true' ? (<Redirect to='/home' />) : (<Redirect to='/signin' />)} />
            <Route path='/signin' component={Login}/>
            <Route path='/home' component={Home}/>
        </Router>
    )
}

export default App;
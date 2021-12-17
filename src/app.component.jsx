import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './global.styles'
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';

const App = () => {
    const code = new URLSearchParams(window.location.search).get('code');
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser) localStorage.setItem('currentUser', code);
    else localStorage.removeItem('currentUser');
    
    return (
        <Router>
            <GlobalStyles />   
            <Route path="/" render={() => code ? (<Redirect to='/home' />) : (<Redirect to='/signin' />)} />
            {code ? 
                <Route path='/home' component={Home}/>
            :
                <Route path='/signin' component={Login}/>
            }
        </Router>
    )
}

export default App;
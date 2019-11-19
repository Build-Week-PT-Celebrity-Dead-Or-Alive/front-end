import React from 'react';

import { Link, Route, withRouter } from 'react-router-dom';

// utilities
import { getToken } from './Utilities/AxiosWithAuth';
import ProtectedRoute from './Utilities/ProtectedRoute';

// components
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/FinalPage/SignUp/SignUp';
import Account from './components/FinalPage/Account/Account';
import Login from './components/FinalPage/Login/Login';
import Logout from './components/FinalPage/Logout';
import './App.css';
import Final from './components/FinalPage/FinalPage';
import './Fonts.css';

function App() {

  const signedIn = getToken();

  

  return (
    <>
    <main>
        <Route exact path="/final" component={Final}/>
    </main>
    <div className="App">

      <nav className="nav-bar">
        <Link to='/landingpage'>Home</Link>
        {!signedIn && <Link to='/signup'>Sign-Up</Link>}
        {signedIn && <Link to='/account'>My Account</Link>}
        {!signedIn && <Link to='/login'>Login</Link>}
        <Link to='/logout'>Logout</Link>
      </nav>

      <Route exact path='/landingpage' component={LandingPage} />
      <Route exact path='/signup' component={SignUp} />
      <ProtectedRoute exact path='/account' component={Account} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />

      <Route exact path='/' render={(props) =>{
        return(<LandingPage {...props}/>);
      }}/>
      <Route path="/quizpage">

      </Route>
      <Route path="finalpage">

      </Route>

    </div>
    </>
  );
}

export default withRouter(App);

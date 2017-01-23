import ReactDOM from 'react-dom';
import React from 'react';
import {Link} from 'react-router';
// components
// import UserForm from './userform';
import LandingArea from './LandingArea';

const Mainpage = React.createClass({
  render(){
    return (
        <div>
          <div className="welcome">
            <Link to="/"><p className="landingBrand"></p></Link>
            <div className="landingWelcome">
              <h1 className="landingH1">welcome back,<span> Kathy</span></h1>
              <div className="karmaPoint">
                <i className="fa fa-star" aria-hidden="true"></i>
                <p>256</p>
              </div>
            </div>
          </div>
          <LandingArea />
          {/* <UserForm /> */}
        </div>
    )
  }
})

export default Mainpage

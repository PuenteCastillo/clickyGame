import React, { Component } from "react";
import { Link } from "react-router-dom";

// By extending the React.Component class, Counter inherits functionality from it
function Nav (props) {
// class Nav extends Component {

let HightScore =<p></p>;

if( props.HightScore > 0 ){
    HightScore =  <p> HightScore: {props.HightScore}</p>
}
    // The render method returns the JSX that should be rendered
   
        return (
            <div>

               <nav className="navbar navbar-light bg-light">
               <div className="container">
                     <a className="navbar-brand" href="#">
                        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                           Clicky Game!!
                     </a>
                     <p>Score: {props.Score}</p>
                     {HightScore}
               </div>
                  
                </nav> 
                
            </div>
        );
    
}

export default Nav;

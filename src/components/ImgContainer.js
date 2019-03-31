import React, { Component } from "react";
import { Link } from "react-router-dom";

// By extending the React.Component class, Counter inherits functionality from it
function ImgContainer(props) {

    // const numbers = ['http://i0.wp.com/cdn-images-1.medium.com/max/1600/1*5DAQEDPv_5opTqr-y6yEag.gif','https://cdn.dribbble.com/users/10958/screenshots/2421804/rudolph.gif','https://cdn.dribbble.com/users/189524/screenshots/2375731/02-cossack_v1-dribbble.gif','https://cdn.dribbble.com/users/1099127/screenshots/3735598/dribbble.gif','https://media0.giphy.com/media/xUOwG3n2WnEIokZ9ew/source.gif','https://cdn.dribbble.com/users/17707/screenshots/2612185/rt-ani.gif','https://i.gifer.com/WyD2.gif', 'https://i.pinimg.com/originals/58/46/2c/58462c6f915dbac62df69a262a8950a2.gif','https://cdn.dribbble.com/users/1265589/screenshots/4443637/turtle_dribble.gif','https://cdn.dribbble.com/users/879235/screenshots/2438738/turtle_01.gif','https://data.whicdn.com/images/313044851/original.gif','https://cdn.dribbble.com/users/722246/screenshots/3450853/sealion_earthday.gif'];
    const listItems = props.gifs.map((number) =>
        
        <div className="col-md-3 mt-5" onClick={props.thisIsAnEvent} >
            <img className="clickImg" src={number} name ="search"/>
        </div>
    );
   
    return (
        <div>
            <div className="container">

                <div className="row">
                    {listItems}
                </div>

            </div>
        </div>
    );

}

export default ImgContainer;
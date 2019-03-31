import React, { Component } from "react";
import { Link } from "react-router-dom";

// By extending the React.Component class, Counter inherits functionality from it
class HomePage extends Component {
  
    render() {
        return (

            <div>


                <div className="carousel-inner fullScreen">
                    <div className="carousel-item active slideImg">
                        <img src="http://i0.wp.com/cdn-images-1.medium.com/max/1600/1*5DAQEDPv_5opTqr-y6yEag.gif" className="d-block w-100 slideImg" alt="..." />
                    </div>
                    <div className="carousel-item slideImg">
                        <img src="https://img.youtube.com/vi/BhTkoDVgF6s/maxresdefault.jpg" className="d-block w-100 slideImg" alt="..." />
                    </div>
                    <div className="carousel-item  slideImg">
                        <img src="https://wallpapercave.com/wp/gWAwDVv.jpg" className="d-block w-100 slideImg" alt="..." />
                    </div>

                </div>
                <div className="content">

                    <h1 className="text-center mt-4 text-dark"> Clicky Game</h1>


                    <h4 className="text-center mt-4 "> This will change the way you React!</h4>


                    <Link to="/GamePage" > 
                    <button type="button" class="btn btn-outline-dark startBtn mt-4">     Start</button>
                      </Link>

                </div>

            </div>

        );
    }
}

export default HomePage;

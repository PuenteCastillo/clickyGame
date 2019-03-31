import React, { Component } from "react";
import Nav from '../components/Nav';
import ImgContainer from '../components/ImgContainer';
import MyPromp from '../components/model';
import { Button, ButtonToolbar, Modal, Footer, Body, Title } from 'react-bootstrap';
// By extending the React.Component class, Counter inherits functionality from it
class GamePage extends Component {
    // Setting the initial state of the Counter component

    state = {
        search: [],
        gifs: ['http://i0.wp.com/cdn-images-1.medium.com/max/1600/1*5DAQEDPv_5opTqr-y6yEag.gif', 'https://cdn.dribbble.com/users/10958/screenshots/2421804/rudolph.gif', 'https://cdn.dribbble.com/users/189524/screenshots/2375731/02-cossack_v1-dribbble.gif', 'https://cdn.dribbble.com/users/1099127/screenshots/3735598/dribbble.gif', 'https://media0.giphy.com/media/xUOwG3n2WnEIokZ9ew/source.gif', 'https://cdn.dribbble.com/users/17707/screenshots/2612185/rt-ani.gif', 'https://i.gifer.com/WyD2.gif', 'https://cdn.dribbble.com/users/967990/screenshots/3529567/panda_gif.gif', 'https://cdn.dribbble.com/users/1265589/screenshots/4443637/turtle_dribble.gif', 'https://cdn.dribbble.com/users/879235/screenshots/2438738/turtle_01.gif', 'https://i.pinimg.com/originals/39/54/9d/39549d8412a5ca0cfa6da1c8dd4b1da0.gif', 'https://cdn.dribbble.com/users/722246/screenshots/3450853/sealion_earthday.gif'],
        show: false,
        Score: 0,
        hightScore:0
    };
    smClose = event => {

        if (this.state.Score >= this.state.hightScore) {
            this.setState({
                search: [],
                show: false,
                hightScore: this.state.Score,
                Score: 0

            });
        } else {
            this.setState({
                search: [],
                show: false,
                Score: 0
            
        });
        }

    }

    thisIsAnEvent = event => {

        const name = event.target.name;
        const value = this.state.search.slice();
        let arr = this.state.gifs;

        console.log(arr);


        if (value.indexOf(event.target.src) >= 0) {
            console.log('already in arry')
            this.setState({
                show: true
            });

        } else {
            let newScore = this.state.Score + 1;
            function shuffleArray(array) {
                let i = array.length - 1;
                for (; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                arr = array;
            }

            shuffleArray(arr);


            console.log('not in arry');
            value.push(event.target.src);
            this.setState({
                [name]: value,
                gifs: arr,
                Score: newScore
            }, () => {
                console.log(this.state.search);

                console.log('-----------------------------');
            });
        }



    }

    // The render method returns the JSX that should be rendered
    render() {
        return (

            <div>
                <Nav Score={this.state.Score} HightScore={this.state.hightScore} />
                <ImgContainer thisIsAnEvent={this.thisIsAnEvent} gifs={this.state.gifs} />
                <MyPromp show={this.state.show} score={this.state.Score} smClose={this.smClose} />



            </div >

        );
    }
}

export default GamePage;

import React, { Component } from "react";
import CardArray from "../components/CardArray";
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Loginpage from "./src/components/Loginpage";

class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            robots : robots ,
            searchfield: '',
        }
    }

    // componentDidMount(){                                          //follows react lifecycle hooks
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots:users}));
    // }

    onSearchChange = (event) =>{                                 //changes the state 
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robo =>{                              //filter robots on current state
            return ( 
                robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
                || 
                robo.keyword.forEach(item => {
                    console.log("item : ",item);
                    return(item.toLowerCase().includes(this.state.searchfield.toLowerCase()))
                })
            );
        })
        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1  >Photo Gallery App</h1>

                    <nav class="">
                        {/* <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a> */}
                        {/* <div class="ph3"> */}
                            {/* <h1 class="f6 fw6 ttu tracked">Basic button</h1> */}
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-black" href="#0">Home</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" href="#0">Favourites</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray" href="#0">Profile</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" href="/src/components/loginpage.js">Login</a>
                        {/* </div> */}
                    </nav>

                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardArray robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
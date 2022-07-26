import React, { Component } from "react";
import CardArray from "../components/CardArray";
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : robots ,
            searchfield: ''
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
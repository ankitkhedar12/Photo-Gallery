import React, { Component } from "react";
import CardArray from "../components/CardArray";
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : robots ,
            searchfield: '',
            route: 'home',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
      }
        }
    }

    loadUser = (data) => {
        this.setState({
          user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        }})
      }

    // componentDidMount(){                                          //follows react lifecycle hooks
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots:users}));
    // }

    onRouteChange = (route) => {
        if (route === 'signout') {
          this.setState({isSignedIn: false})
        } else if (route === 'home') {
          this.setState({isSignedIn: true})
        }
        this.setState({route: route});
      }

    onSearchChange = (event) =>{                                 //changes the state 
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robo =>{                              //filter robots on current state
            return ( 
                robo.keyword.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
                // || 
                // robo.keyword.forEach(item => {
                //     // console.log("item : ",item);
                //     if(item.toLowerCase().includes(this.state.searchfield.toLowerCase()) === true){
                //         return(item.toLowerCase().includes(this.state.searchfield.toLowerCase()))
                //     }
                //     }
                // )
            );
        })
        // console.log({filteredRobots})
        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1  >Photo Gallery App</h1>
                    { this.state.route === 'home'
                        ?    <><nav className="">
                            {/* <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a> */}
                            {/* <div class="ph3"> */}
                            {/* <h1 class="f6 fw6 ttu tracked">Basic button</h1> */}
                            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black" onClick={ '#0'}>Home</button>
                            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" onClick={'#0'}>Favourites</button>
                            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray" onClick={'#0'}>Profile</button>
                            {/* <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" onClick={ ()=> {this.onRouteChange('signin')} }>Login</button> */}
                            {this.state.isSignedIn 
                            ?
                                <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" onClick={() => {this.onRouteChange('signout')}}>Signout</button>
                            :   <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" onClick={ ()=> {this.onRouteChange('signin')} }>Login</button>
                            }
                            {/* </div> */}
                        </nav><SearchBox searchChange={this.onSearchChange} /><Scroll>
                                <CardArray robots={filteredRobots} />
                            </Scroll></> 
                        :( 
                            this.state.route === 'signin'
                            ? <Signin loadUser = {this.loadUser} onRouteChange={this.onRouteChange}/>
                            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />  
                        )  
                    }     
                </div>
            );
        }
    }
}

export default App;
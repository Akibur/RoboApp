import React, {Component} from 'react'
import CardList from '../Components/CardList';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    //Always use arrow functions while creating user defiened functions inside class
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    render () {


        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        } );


        return(



            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList  robots = {filteredRobots}/>

                </Scroll>
            </div>
           );
    }

     
}

export default App; 
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { robotsData } from './robots';

function App() {
    const [robots, setRobots] = useState(robotsData);
    const [searchfield, setSearchfield] = useState('');

    // The fake data from 3rd party API is broken.
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {setRobots(users)})
    // }, [])
    
    // to get the input value of the search box
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)}

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

    return !robots.length ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

export default App;
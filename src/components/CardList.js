import React from 'react';
import Card from './Card';

// CarList is Card's parents. Using map method to iterate all robots.
// Each child in an array or iterator should have a unique "key" prop. 

const CardList = ({robots}) => {
    return (
        <div>
            { 
            robots.map( (user, i) => { 
                return (
                <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />);
                })
            }
        </div>
    );
}

export default CardList;
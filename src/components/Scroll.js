import React from 'react'

// To keep the SearchBox at the top.
// Using props.children to wrap the CardList

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll

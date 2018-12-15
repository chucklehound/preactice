import React from 'react';
import './Card.scss';

const Card = (props) => {
        return (
        <div className="App-card">
           {props.children}
        </div>
        );
}

export default Card;
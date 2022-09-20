import React from "react";
import Card from './Card';

const CardArray = ({robots}) => {
    const cardComponent = robots.map((user,i) => {
        return(
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            picture={robots[i].picture} 
            />
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardArray;
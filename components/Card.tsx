import React from 'react';

export default function Card({ text = "" } : { text: string }) {
    return (
        <div className="cardContainer">
            {text}
        </div>
    )    
}
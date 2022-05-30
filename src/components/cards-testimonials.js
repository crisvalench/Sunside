import React from "react";
import '../styles/cards-testimonials.css'
export default function Testimonials ({img, text, name, profession}){
    return(
        <div className="clients">
            <img className="error" src={ require(`../images/image-${img}.jpg`)} alt={name}></img>
            <div className= 'text1'>{text}</div>
            <div className='name1'>{name}</div>
            <div className='prof1'>{profession}</div> 
        </div>
    )
}
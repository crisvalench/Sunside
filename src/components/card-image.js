import React from "react"
import '../styles/card-image.css'
export default function Image({img, alt, name}){
  const cardClass =`cards-${name}`
  return(
    <div className={cardClass}>
          <img className= 'imagen'src={ require(`../images/${img}.jpg`)}
            alt={`Foto de ${alt}`}/>
    </div>
  )
}

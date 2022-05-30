import React from "react"
import '../styles/card-image-text.css'
export default function ImageText({img, alt,tittle, text,name, classname,classname1}){
  const cardClass =`cards-${name}`
  const tittleClass= `${classname}`
  const textClass= `${classname1}`
  return(
    <div className={cardClass}>
          <img className= 'imagen'src={ require(`../images/${img}.jpg`)}
            alt={`Foto de ${alt}`}/>
          <div className={tittleClass} >{tittle}</div>
          <div className={textClass} >{text}</div>
    </div>
  )
}

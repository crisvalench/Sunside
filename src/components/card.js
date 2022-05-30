import React from "react"
import '../styles/card.css'
 export default function Card({tittle, text1, text2}){
  return(
    <div className='card-small'>
          <div className='tittle-card'>{tittle}</div>
          <div className='text-card'>{text1}</div>
          <a className='link-card'href='#'> {text2} </a>
        </div>
  )
 }
 
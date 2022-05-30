import React from "react";
import '../styles/section-image.css'
export default function Gallery({img1}){
  return(
    <img className= 'imf'src={ require(`../images/image-gallery-${img1}.jpg`)}></img>
    )
}
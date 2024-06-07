import React from 'react'
import '../Shimmer/Shimmer.scss'
const Shimmer = ({type}) => {
  return (
    <div class={`${type=="default"?'card':'card-story'}`}>
      <div class={`shimmer-animation ${type=="default"?'loader-shimmer-banner':'loader-shimmer-banner-story'}`}></div>
    </div>
  )
}

export default Shimmer
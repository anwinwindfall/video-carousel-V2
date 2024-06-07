import React, { useContext, useState } from 'react'
import '../Cards/CardDefault.scss'
import { context } from '../Context/ContextProvider'


const Card = ({ url, type, poster, title }) => {

const {handlePlay, setBlobVideoUrl} = useContext(context)
  return (
    <div className='cards-wrapper'>
      <div className='cards-container'>
        <div onClick={()=>handlePlay(url)} className='btn-play'>
          <img src='https://143223961.fs1.hubspotusercontent-eu1.net/hubfs/143223961/raw_assets/public/Assets/Eucharistic%20Revival/play.svg' />
        </div>
        <img src={poster.src} />
        <div className='title'>
          {/* <p>{`2 mins watch`}</p> */}
          <h1>{title && title}</h1>
        </div>
      </div>

    </div>
  )
}

export default Card

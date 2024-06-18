import React, { useContext } from 'react'
import './CardStory.scss'
import { context } from '../Context/ContextProvider'

const CardStory = ({url,poster}) => {
const {handlePlay, setBlobVideoUrl} = useContext(context)
    return (
        <div className='cards-story_wrap'>
            <div className='cards-story-container'>
                <div onClick={() => handlePlay(url)} className='btn-play'>
                    <img alt='play button' loading='lazy' src='https://143223961.fs1.hubspotusercontent-eu1.net/hubfs/143223961/raw_assets/public/Assets/Eucharistic%20Revival/play.svg' />
                </div>
                <img src={poster.src} loading='lazy' alt={poster.alt}/>
            </div>
        </div>
    )
}

export default CardStory
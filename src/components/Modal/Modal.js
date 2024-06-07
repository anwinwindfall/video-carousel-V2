import React, { useContext, useEffect, useRef } from 'react'
import '../Modal/Modal2.scss'
import { context } from '../Context/ContextProvider'
import useKeyPress from '../CustomHook/Keypress'
import ReactPlayer from 'react-player/lazy'

const Modal = ({ type }) => {
  const { blobVideoUrl, setModalActive } = useContext(context)
  const videoRef = useRef(null)
  const closeModal = () => {
    setModalActive(false)
  }
  useKeyPress('Escape', closeModal)
  const handleVideoPlay = ()=>{
    
  }
  const handleFullScreen = () => {
    const video = videoRef.current.getInternalPlayer();
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setModalActive(false)
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  return (
    <div className="video-modal-wrap">
      <span class="close">&times;</span>
      <div className="modal-video-content">
        <div className="nav-content" >
          <ReactPlayer
            ref={videoRef}
            width={'100%'}
            height={'100%'}
            onPlay={handleFullScreen}
            playing={true}
            url={`${blobVideoUrl}`}
            controls={true}
            className={`${type == "story" && 'Video-player-story'}`}
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
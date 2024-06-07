import { createContext, useState } from "react";
import React from 'react'
import { fetchVideoUrl } from "../API/VimeoApi";

export const context = createContext({});



const ContextProvider = ({children}) => {

    const [modalActive, setModalActive] = useState(false)
    const [blobVideoUrl, setBlobVideoUrl] = useState("")


    function handlePlay(url){
      // console.log(videoId);
      setModalActive(!modalActive)
      const blobUrl = fetchVideoUrl(url)
      // fetchVideoUrl(videoId)
      setBlobVideoUrl(url)
    }

  return (
    <context.Provider value={{modalActive, handlePlay, blobVideoUrl, setModalActive}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider
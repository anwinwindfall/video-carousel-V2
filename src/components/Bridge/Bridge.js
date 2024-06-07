import React, { useContext } from 'react'
import {context} from '../Context/ContextProvider'
import CarouselDefault from '../CarouselDefault/CarouselDefault'
import Modal from '../Modal/Modal'

const Bridge = ({moduleData}) => {

    const {modalActive} = useContext(context)
    console.log(modalActive);
  return (
    <>
        <CarouselDefault type={moduleData.video_type} videos={moduleData.video_settings} heading={moduleData.carousel_heading} />
        {modalActive&&<Modal type={moduleData.video_type}/>}
    </>
  )
}

export default Bridge
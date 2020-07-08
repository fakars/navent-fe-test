import React from 'react'
import styled from 'styled-components'

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  width: 50px;
  position: absolute;
  top: 85%;
  left: 80%;
  border-radius: 5px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
  img {
    height: 16px;
    width: 16px;
    display: block;
  }
`
const ImageCounter = ({ activeImage, images }) => {
  const countImages = (currentImage, images) => {
    return <span>{`${currentImage + 1}/${images.length}`}</span>
  }
  return (
    <Counter>
      <img src={require('../../assets/img/camera.png')} alt="camera" />
      {countImages(activeImage, images)}
    </Counter>
  )
}

export default ImageCounter

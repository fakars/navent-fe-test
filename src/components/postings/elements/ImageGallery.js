import React from 'react'
import styled from 'styled-components'
//340px
//290px
const GalleryWrapper = styled.div`
  position: relative;
  height: 180px;
  width: ${({ plan }) => (plan === 'SUPERHIGHLIGHTED' ? '320px' : '290px')};
  img {
    width: 100%;
    height: 100%;
  }
  /* ::after {
    content: '';
    position: absolute;
    border: 3px solid white;
    border-width: 3px 0 0 3px;
    display: block;
    height: 20px;
    width: 20px;
    bottom: 45%;
    border-radius: 3px;
    left: 86%;
    transform: rotate(135deg);
    box-shadow: 0 0 12px 12px rgba(0, 0, 0, 0.33);
  } */
`

const ImageGallery = ({ postingData }) => {
  return (
    <GalleryWrapper plan={postingData.publication_plan}>
      <img src={postingData.posting_picture} alt="property" />
    </GalleryWrapper>
  )
}

export default ImageGallery

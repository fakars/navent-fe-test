import React from 'react'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  position: relative;
  height: 180px;
  width: ${({ plan }) => (plan === 'SUPERHIGHLIGHTED' ? '320px' : '290px')};
  img {
    width: 100%;
    height: 100%;
  }
  ::after,
  ::before {
    content: '';
    position: absolute;
    border: 3.5px solid white;
    border-width: 3px 0 0 3px;
    display: block;
    height: 18px;
    width: 18px;
    bottom: 45%;
    border-radius: 3px;
    cursor: pointer;
  }
  ::before {
    left: 5%;
    transform: rotate(-45deg);
  }
  ::after {
    left: 87%;
    transform: rotate(135deg);
  }
`

const ImageGallery = ({ postingData }) => {
  return (
    <GalleryWrapper plan={postingData.publication_plan}>
      <img src={postingData.posting_picture} alt="property" />
    </GalleryWrapper>
  )
}

export default ImageGallery

import React, { useState } from 'react'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  position: relative;
  display: flex;
  height: 190px;
  width: ${({ plan }) => (plan === 'SUPERHIGHLIGHTED' ? '320px' : '290px')};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`

const SliderButton = styled.button`
  background: transparent;
  height: 20%;
  width: 20%;
  border: none;
  outline: none;
  cursor: pointer;
  ::after {
    content: '';
    border: 3.5px solid white;
    border-width: 3px 0 0 3px;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 3px;
    transform: ${({ direction }) =>
      direction === 'right' ? 'rotate(135deg)' : 'rotate(-45deg)'};
    margin-left: ${({ direction }) => (direction === 'right' ? '45%' : '20%')};
  }
`
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  position: absolute;
  z-index: 1;
  padding: 0 13px;
`

const Plan = styled.span`
  font-size: 12px;
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: none;
  background: white;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    transition: 400ms;
  }
`
const Icon = styled.span`
  height: 16px;
  width: 16px;
  background-image: ${({ favorite }) =>
    favorite
      ? `url(${require('../../../assets/img/favChecked.svg')})`
      : `url(${require('../../../assets/img/fav.svg')})`};
`

const ImageCounter = styled.div`
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

const ImageGallery = ({ postingData }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [favorite, setFavorite] = useState(false)

  const renderImages = images => {
    const styles = {
      transform: `translateX(${
        activeImage < images.length ? activeImage * -100 : ''
      }%)`,
      transition: 'transform 0.4s ease-in-out',
    }
    return images.map((image, i) => {
      return <img style={styles} key={i} src={image} alt="property" />
    })
  }

  const nextImage = () => {
    if (activeImage + 1 < postingData.posting_pictures.length) {
      setActiveImage(activeImage + 1)
    }
  }
  const previousImage = () => {
    if (
      activeImage + 1 <= postingData.posting_pictures.length &&
      activeImage > 0
    ) {
      setActiveImage(activeImage - 1)
    }
  }

  const handleFavorite = () => {
    return !favorite ? setFavorite(true) : setFavorite(false)
  }

  const countImages = (currentImage, images) => {
    return <span>{`${currentImage + 1}/${images.length}`}</span>
  }

  const renderPlan = plan => {
    if (plan) {
      switch (plan) {
        case 'SUPERHIGHLIGHTED':
          return 'Super destacado'
        case 'HIGHLIGHTED':
          return 'Destacado'
        case 'SIMPLE':
          return 'Simple'
        default:
          return ''
      }
    }
  }

  return (
    <GalleryWrapper plan={postingData.publication_plan}>
      <TopContent>
        <Plan>{renderPlan(postingData.publication_plan)}</Plan>
        <FavoriteButton onClick={handleFavorite}>
          <Icon favorite={favorite} />
        </FavoriteButton>
      </TopContent>
      {renderImages(postingData.posting_pictures)}
      <SliderControls>
        <SliderButton onClick={previousImage} direction="left" />
        <SliderButton onClick={nextImage} direction="right" />
      </SliderControls>
      <ImageCounter>
        <img
          src={require('../../../assets/img/camera.png')}
          alt={postingData.title}
        />
        {countImages(activeImage, postingData.posting_pictures)}
      </ImageCounter>
    </GalleryWrapper>
  )
}

export default ImageGallery

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const MainImage = styled.div`
  grid-column: 1 / 2;
  height: 600px;
  position: relative;

  img {
    border-radius: 12px;
  }
`;

const SmallImage = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 290px);
  gap: 20px;
  height: 100%;

  div {
    height: 100%;
    position: relative;
  }

  img {
    border-radius: 12px;
  }
`;

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <GalleryContainer>
      <Grid>
        {/* Main Image */}
        <MainImage>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        </MainImage>

        {/* First Small Image Column */}
        <SmallImage>
          {images.slice(1, 3).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          ))}
        </SmallImage>

        {/* Second Small Image Column */}
        <SmallImage>
          {images.slice(3, 5).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          ))}
        </SmallImage>
      </Grid>
    </GalleryContainer>
  );
};

// Define PropTypes for the component
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
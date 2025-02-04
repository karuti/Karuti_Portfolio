import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 1280px; /* Total width of the gallery */
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr; /* Large image takes 3 parts, others take 1 part each */
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const MainImage = styled.div`
  grid-column: 1 / 2; /* Large image spans the first column */
  height: 600px; /* Fixed height for the large image */
 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fits without distortion */
    border-radius: 12px;
   
  }
`;

const SmallImage = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 290px); /* Two equal rows */
  gap: 20px;
  height: 100%; /* Match the height of the grid */
  

  div {
    height: 100%; /* Ensure each child div takes up equal height */
    display: flex; /* Ensure the image inside is properly aligned */
   
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fits without distortion */
    border-radius: 12px;
  }

`;

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <GalleryContainer>
      <Grid>
        <MainImage>
          <img src={images[0]} alt="Main view" />
        </MainImage>
        <SmallImage>
          {images.slice(1, 3).map((image, index) => (
            <div key={index}>
              <img src={image} alt={`View ${index + 1}`} />
            </div>
          ))}
        </SmallImage>
        <SmallImage>
          {images.slice(3, 5).map((image, index) => (
            <div key={index}>
              <img src={image} alt={`View ${index + 3}`} />
            </div>
          ))}
        </SmallImage>
      </Grid>
    </GalleryContainer>
  );
};

export default ImageGallery;
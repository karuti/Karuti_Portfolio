"use client";

import styled from "styled-components";
import FloatingButton from "../components/FloatingButton.js";
import ImageGallery from '../components/ImageGallery';
import Image from 'next/image';



export default function Detail() {

  const images = [
    { src: '/Cloud.jpeg', alt: 'A beautiful view of clouds in the sky' },
    { src: '/Cloud.jpeg', alt: 'Clouds in the sky - Image 1' },
    { src: '/Cloud.jpeg', alt: 'Clouds in the sky - Image 2' },
    { src: '/Cloud.jpeg', alt: 'Clouds in the sky - Image 3' },
    { src: '/Cloud.jpeg', alt: 'Clouds in the sky - Image 4' },
  ];
  return (
    <PageWrapper>
       <Header>
       <a href="https://karuti.co.ke/">  <HeaderLogoImg src="/kARUTI LOGO LIGHT.svg" alt="Karuti Logo"/></a>
       
      </Header>
      <FeaturedArea>
        <FeatureTitle>Making Bumble inclusive for every gender
        </FeatureTitle>
        <FeatureDescription>Super Follows are paid account subscriptions on Twitter where 
          fans can pay to subscribe to a range of benefits including exclusive content, community, access, recognition and deals plus discounts. 
        </FeatureDescription>
        <FeatureImage><Image  alt="Feature Image" src="/Cloud.jpeg"/></FeatureImage>
      </FeaturedArea>
      <DetailArea>
        <DetailContent>
        <DetailTitle>Understanding the brief</DetailTitle>
        <DetailDescription>Over 37,000 credit card rejections were reported by Navan users—business travelers 
          who found their Navan business credit cards unusable due to company policies that only activate travel 
          cards for trips involving flights or hotel bookings.

</DetailDescription></DetailContent>
<Infoshowcasecontainer>
      <Infoshowcasetext>
      <DetailTitle>Sugee: Loan Management System for Rural Sector.</DetailTitle>
        <DetailDescription>Our field users have a supervisor assigned to 
          them who is responsible for managing them.Our current app does not 
          sufficiently cater to the needs of the supervisors.

For instance they spend a lot of time on the field as well 
and most do not have laptops making it difficult to 
access the reporting which we have provided for them on the web-app.
</DetailDescription>
      </Infoshowcasetext>
      <Infoshowcaseimage><Image  alt="Feature Image" src="/Cloud.jpeg"/></Infoshowcaseimage>
      </Infoshowcasecontainer>
      <GalleryWrapper>   <ImageGallery images={images} /></GalleryWrapper>
   
      <DetailGallery></DetailGallery>
       
      </DetailArea>

  <FloatingButton>Go to Website </FloatingButton>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
margin:0px auto;
  background-color:#fefefe;

`
const Header = styled.div`
padding:12px 160px 12px 160px;
position: sticky; 
  top: 0;
  z-index: 100; 
  background-color:#152314;
`
const HeaderLogoImg = styled.img`
width:251px;
height:50px;
`
const FeaturedArea = styled.div`
padding:120px 160px 120px 160px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;


`
const FeatureTitle = styled.h1`

max-width:800px;
text-align:center;`
const FeatureDescription = styled.p`
max-width:600px;

text-align:center;
`

const FeatureImage = styled.div`
padding:40px 0 0px 0;
img{
  width:1280px;
  height:600px;
  border-radius:12px;
  object-fit: cover;
  }
`
const DetailArea = styled.div`
padding:40px 160px 120px 160px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
`
const DetailContent = styled.div`
  max-width: 960px; /* Sets a fixed width for the content */
  width: 100%; /* Ensures the content spans the available width */
`;
const DetailTitle = styled.h2`


  text-align: left;

`
const DetailDescription = styled.p`
  text-align: left;


`
const DetailGallery = styled.div``
const Infoshowcasecontainer= styled.div`
margin:24px 0 24px 0;
border-radius:12px;
background-color:#f6f5f7;
padding:60px;
 max-width: 960px;
display:grid;
gap:80px;
grid-template-columns:auto auto;
align-items:center;



`
const Infoshowcasetext = styled.div``
const Infoshowcaseimage = styled.div`

img{
  width:400px;
  height:480px;
  border-radius:12px;
  object-fit: cover;
  }
`
const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
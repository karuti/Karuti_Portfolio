"use client";

import styled from "styled-components";



export default function Detail() {
  return (
    <PageWrapper>
       <Header>
        <HeaderLogoImg src="/SOIE SMALL LOGO WTH TXT MARK.svg" alt="Soie & Scale Logo"/>
      </Header>
      <FeaturedArea>
        <FeatureTitle>Super Follows
        </FeatureTitle>
        <FeatureDescription>Super Follows are paid account subscriptions on Twitter where 
          fans can pay to subscribe to a range of benefits including exclusive content, community, access, recognition and deals plus discounts. 
        </FeatureDescription>
        <FeatureImage><img src="/Cloud.jpeg"/></FeatureImage>
      </FeaturedArea>
      <DetailArea>
        <DetailTitle>Understanding the brief</DetailTitle>
        <DetailDescription>A Super Follows subscription, is a chance for creators to connect even further with their biggest supporters, 
          all while earning monthly revenue without leaving Twitter. Super Follow accounts can share extra content, feel free to be your 
          real self, and easily identify and interact with fans. All for a monthly subscription of $2.99, $4.99, or $9.99 USD fit for 
          their audience demographic, Super Followers would see Tweets posted just for them and be able to join subscriber-only conversations. 
          Super follow accounts can then take home up to 97% of monthly subscription revenue after fees through Stripe. </DetailDescription>
        <DetailGallery></DetailGallery>
      </DetailArea>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
margin:0px auto;
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

`
const FeatureTitle = styled.div`font-size:64px;
font-type:bold;
max-width:800px;`
const FeatureDescription = styled.div`
max-width:600px;
padding-top:24px;
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
const DetailArea = styled.div`padding:40px 160px 120px 160px;

`
const DetailTitle = styled.div`
font-size:32px;
font-type:bold;
padding-bottom:24px;
max-width:600px;
`
const DetailDescription = styled.div`
max-width:600px;

`
const DetailGallery = styled.div``

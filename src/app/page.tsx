"use client";

import styled from "styled-components";
import Chip from '../app/components/Chip.js';


export default function Home() {
  return (
    <PageWrapper>
      <Header>
        <HeaderLogoImg src="/SOIE SMALL LOGO WTH TXT MARK.svg" alt="Soie & Scale Logo"/>
      </Header>
      <HeroContent>
        <MainIntro>
        I’m Joy, a Product Manager & Designer with 6 years of experience blending design and strategy to create user-centric, impactful products.
        Currently building delightful products at <a href="https://www.fieldproapp.com/">FieldPro</a>
          </MainIntro> 
          <SupportingIntro>Previously a product designer at FieldPro</SupportingIntro>
          <TagContainer>
            <Chip>Product Management</Chip>
            <Chip>Product Design</Chip>
          </TagContainer>
          <HorizontaLine></HorizontaLine>
          <Peek>
<BasedIn>Based in Nairobi Kenya</BasedIn>
<Showcase><p>See selected works</p><img src="/Arrow Down Circle Icon 1Inverse.svg"/></Showcase>
          </Peek>
      </HeroContent>
     
     <WorkShowcase>
    
      <CardContainer>
        <ShowCaseImage><img src="/Cloud.jpeg"/></ShowCaseImage>
        <ShowCaseContent>
          <CategoryChip> <Chip>Product Management</Chip></CategoryChip>
          <ItemDate>09 JAN 2025</ItemDate>
          <ItemTitle>Launching a new EB2B mobile app in a new market </ItemTitle>
        </ShowCaseContent>
        <ShowCaseCTA> <a href="/detail"><img src="/Open Arrow Icon.svg"/></a></ShowCaseCTA>
      </CardContainer>
      <CardContainer>
        <ShowCaseImage><img src="/Cloud.jpeg"/></ShowCaseImage>
        <ShowCaseContent>
          <CategoryChip> <Chip>Product Management</Chip></CategoryChip>
          <ItemDate>09 JAN 2025</ItemDate>
          <ItemTitle>Launching a new EB2B mobile app in a new market </ItemTitle>
        </ShowCaseContent>
        <ShowCaseCTA><img src="/Open Arrow Icon.svg"/></ShowCaseCTA>
      </CardContainer>
      <CardContainer>
        <ShowCaseImage><img src="/Cloud.jpeg"/></ShowCaseImage>
        <ShowCaseContent>
          <CategoryChip> <Chip>Product Management</Chip></CategoryChip>
          <ItemDate>09 JAN 2025</ItemDate>
          <ItemTitle>Launching a new EB2B mobile app in a new market </ItemTitle>
        </ShowCaseContent>
        <ShowCaseCTA><img src="/Open Arrow Icon.svg"/></ShowCaseCTA>
      </CardContainer>
     </WorkShowcase>
     
     <Footer>
<FooterCTA>
<HeaderLogoImg src="/SOIE SMALL LOGO WTH TXT MARK.svg" alt="Soie & Scale Logo"/>

</FooterCTA>
<Copyright>Copyright© 2024 Soie & Scale. All Rights Reserved.</Copyright>
     </Footer>
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
const HeroContent = styled.div`

  padding:120px 0 0 0;
  margin:0 160px;

`
const MainIntro= styled.p`
font-size:64px;
font-type:bold;
max-width:1080px;

`
const SupportingIntro= styled.p`
font-size:24px;
font-type:regular;
`
const TagContainer = styled.div`
display: flex;
  flex-direction: row; 
  justify-content: flex-start; 
  align-items: flex-start;
  gap:16px;

`
const HorizontaLine = styled.div`
width:auto;
heigh:1px;
color:#D9D9D940;
border:1px solid;
margin:24px 0;
`
const Peek = styled.div`
display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-start;
  margin:24px 0 ;

`
const BasedIn = styled.div`
`
const Showcase = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap:12px;

`
const WorkShowcase = styled.div`
padding:24px 160px 24px 160px;
background-color:#B9B173;


`
const CardContainer = styled.div`
display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center;
  border-bottom:#D9D9D980 1px solid;
  padding:40px 0;
  `
  
const ShowCaseImage = styled.div`


img{
width:360px;
height:270px;
border-radius:12px;
object-fit: cover;
}
`
const ShowCaseContent = styled.div`
display:grid;
gap:16px;
`
const CategoryChip = styled.div``
const ItemDate = styled.div`
font-size:16px;
font-type:bold;
`
const ItemTitle = styled.div`
font-size:32px;
font-type:bold;
max-width:400px;`
const ShowCaseCTA = styled.div`
img{
width:64px;
height:64px;
object-fit: cover;
}
`
const Footer = styled.div`
padding:80px 160px 40px 160px; 
background-color:#152314;

`
const FooterCTA = styled.div`
display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-start;

  img{
width:251px;
height:50px;
object-fit: cover;

}
`
const Copyright = styled.div`
text-align:center;
`
"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <PageWrapper>
      <Header>
        <HeaderLogoImg src="/SOIE SMALL LOGO WTH TXT MARK.svg" alt="Soie & Scale Logo"/>
      </Header>
      <HeroContent>
        <HeroImage
          src="/Soiebiglogo.svg"
          alt="Soie logo"
         
        />  
      </HeroContent>
      <Content>
      <p>Business by Design & Beyond </p>
      <p>Coming Soon.....</p>
      </Content>
     
      <footer>
       
      </footer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
margin:0px auto;
`
const Header = styled.div`
padding:24px 160px 24px 160px;
`
const HeaderLogoImg = styled.img`
width:251px;
height:50px;
`
const HeroContent = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  padding:120px 0;

`
const HeroImage= styled.img`
width:942px;
height:372px;
`
const Content= styled.div`
text-align: center;
`
import styled from "styled-components";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import { GoDotFill } from "react-icons/go";

const AboutUsConteiner = styled.div`
  display: flex;
  gap: 30px;
`;

const ImgHolder = styled.div`
  display: flex;
  width: 50%;
`;
const ContentContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RelativeImage = styled.div`
  margin-left: -10%;
  margin-top: 10%;
`;
const Img = styled.img`
  border-radius: var(--border-radius-sm);
`;

const List = styled.li`
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

function AboutUs() {
  return (
    <Container>
      <AboutUsConteiner>
        <ImgHolder>
          <div>
            <Img
              src="pexels-boris-pavlikovsky-6803643.jpg"
              alt="Hotel outside"
            />
          </div>
          <RelativeImage>
            <Img src="pexels-aleksey-kuprikov-3551230.jpg" alt="Hotel" />
          </RelativeImage>
        </ImgHolder>
        <ContentContainer>
          <Heading as="h3">About us</Heading>
          <Heading as="h2">We Provide Best Place To Enjoy Your time</Heading>
          <p>
            Welcome to The Wild Oasis, where luxury and hospitality come
            together to redefine your travel experience. Nestled in the heart of
            Zlatibor, our hotel is a haven of comfort and sophistication.
          </p>
          <div>
            <ul>
              <List>
                <GoDotFill />
                Impeccable Service
              </List>
              <List>
                <GoDotFill />
                Elegant Accommodations
              </List>
              <List>
                <GoDotFill />
                Gastronomic Delights
              </List>
              <List>
                <GoDotFill />
                Central Location
              </List>
            </ul>
          </div>
          <div>
            <Button>View more</Button>
          </div>
        </ContentContainer>
      </AboutUsConteiner>
    </Container>
  );
}

export default AboutUs;

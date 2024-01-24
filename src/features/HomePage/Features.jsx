import styled from "styled-components";
import Heading from "../../ui/Heading";
import FeaturesCard from "./FeaturesCard";
import HeadingContainer from "../../ui/HeadingContainer";
import Container from "../../ui/Container";

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-color: var(--color-brand-100);
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const FeaturesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

function Features() {
  return (
    <StyledFeatures>
      <HeadingContainer>
        <Heading as="h3">Features</Heading>
        <Heading as="h2">Experience the Best Hotel Reservation Service</Heading>
      </HeadingContainer>
      <Container>
        <FeaturesCards>
          <FeaturesCard
            feature="Easy Booking"
            text="Quickly reserve your hotel room with just a few clicks"
          />
          <FeaturesCard
            feature="Wide Selection"
            text="Choose from a variety of hotels to suit your preferences and budget"
          />
          <FeaturesCard
            feature="Best price Guaeantee"
            text="Get the lowest rates available for hotel reservations"
          />
          <FeaturesCard
            feature="24/7 Customer Support"
            text="Assistance is available round the clock to address any queries or concerns"
          />
        </FeaturesCards>
      </Container>
    </StyledFeatures>
  );
}

export default Features;

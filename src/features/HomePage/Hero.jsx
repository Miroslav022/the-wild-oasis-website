import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../ui/Container";

const StyledHero = styled.div`
  height: 50dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Hero() {
  return (
    <Container>
      <StyledHero>
        <Heading as="h1">Find the Perfect Cabin</Heading>
        <ButtonsWrapper>
          <Button>Search Now</Button>
          <Button variation="secondary">
            Learn More <FaArrowRightLong />
          </Button>
        </ButtonsWrapper>
      </StyledHero>
    </Container>
  );
}

export default Hero;

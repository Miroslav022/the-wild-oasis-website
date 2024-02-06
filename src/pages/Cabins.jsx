import styled from "styled-components";
import CabinList from "../features/Cabins/CabinList";
import CabinOperations from "../features/Cabins/CabinOperations";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import HeadingContainer from "../ui/HeadingContainer";

const Right = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

function Cabins() {
  return (
    <Container>
      <HeadingContainer>
        <Heading as="h3">All Cabins</Heading>
        <Heading as="h2">Explore all cabins</Heading>
      </HeadingContainer>
      <Right>
        <CabinOperations />
      </Right>
      <CabinList />
    </Container>
  );
}

export default Cabins;

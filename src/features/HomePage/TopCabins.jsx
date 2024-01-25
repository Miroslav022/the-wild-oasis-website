import { useNewCabins } from "./useNewCabins";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import CabinCard from "./CabinCard";
import styled from "styled-components";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import HeadingContainer from "../../ui/HeadingContainer";

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
`;

function TopCabins() {
  const { newCabins, status, error } = useNewCabins();
  if (status === "pending") return <Spinner />;
  console.log(newCabins, status);
  if (error) return <Error />;
  return (
    <Container>
      <HeadingContainer>
        <Heading as="h3">Cabins</Heading>
        <Heading as="h2">Explore brand new cabins</Heading>
      </HeadingContainer>
      <CardsWrapper>
        {newCabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </CardsWrapper>
    </Container>
  );
}

export default TopCabins;

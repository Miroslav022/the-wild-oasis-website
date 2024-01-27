import CabinList from "../features/Cabins/CabinList";
import Heading from "../ui/Heading";
import HeadingContainer from "../ui/HeadingContainer";

function Cabins() {
  return (
    <div>
      <HeadingContainer>
        <Heading as="h3">All Cabins</Heading>
        <Heading as="h2">Explore all cabins</Heading>
      </HeadingContainer>
      <CabinList />
    </div>
  );
}

export default Cabins;

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinCard from "../HomePage/CabinCard";
import { useCabins } from "./useCabins";
import Pagination from "../../ui/Pagination";

const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

function CabinList() {
  const { isLoading, cabins, count } = useCabins();
  if (isLoading) return <Spinner />;
  return (
    <>
      <CardWrapper>
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </CardWrapper>
      <Pagination count={count} />
    </>
  );
}

export default CabinList;

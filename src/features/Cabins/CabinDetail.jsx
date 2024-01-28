import styled from "styled-components";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { useCabin } from "./useCabin";
import { formatCurrency } from "../../utils/helpers";
import { MdPeopleOutline } from "react-icons/md";
import Button from "../../ui/Button";

const Img = styled.img`
  border-radius: var(--border-radius-lg);
`;
const CabinWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const CabinInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Discount = styled.del`
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-red-700);
`;

function CabinDetail() {
  const { cabin, status } = useCabin();

  if (status === "pending") return <Spinner />;
  const { id, image, name, maxCapacity, regularPrice, discount, description } =
    cabin;
  return (
    <CabinWrapper>
      <div>
        <Img src={image} alt={`cabin-${id}`} />
      </div>
      <CabinInformation>
        <div>
          <PriceInfo>
            <Heading as="h2">{name} - cabin</Heading>
            {discount ? (
              <div className="flex">
                <Discount>{formatCurrency(regularPrice)}</Discount>
                <Price>{formatCurrency(regularPrice - discount)}</Price>
              </div>
            ) : (
              <Price>{formatCurrency(regularPrice)}</Price>
            )}
          </PriceInfo>
          <div className="flex">
            <MdPeopleOutline />
            {maxCapacity}
          </div>
        </div>
        <p>{description}</p>
        <Button size="large" to={`/booking/${id}`}>
          Booking cabin {name} for{" "}
          {discount
            ? formatCurrency(regularPrice - discount)
            : formatCurrency(regularPrice)}
        </Button>
      </CabinInformation>
    </CabinWrapper>
  );
}

export default CabinDetail;

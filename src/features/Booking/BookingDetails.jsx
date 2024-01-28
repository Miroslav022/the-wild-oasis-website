import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useCabin } from "../Cabins/useCabin";
import Heading from "../../ui/Heading";
import Checkbox from "../../ui/CheckBox";

const BookingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const Img = styled.img`
  border-radius: var(--border-radius-lg);
`;

const Date = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

function BookingDetails() {
  const { cabin, state } = useCabin();

  if (state === "pending") {
    return <Spinner />;
  }

  const { id, image, name, maxCapacity, regularPrice, discount, description } =
    cabin;

  console.log(
    id,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description
  );

  return (
    <BookingWrapper>
      <Img src={image} alt={`cabin-booking-${id}`} />
      <div>
        <Heading as="h3">Booking information</Heading>
        <Form>
          <FormRowVertical label="Name">
            <p>{name}</p>
          </FormRowVertical>
          <FormRowVertical label="Max capacity">
            <p>{maxCapacity}</p>
          </FormRowVertical>
          <FormRowVertical label="How many guests">
            <Input type="number" max={maxCapacity} />
          </FormRowVertical>
          <Date>
            <FormRowVertical label="Start date">
              <Input type="date" />
            </FormRowVertical>
            <FormRowVertical label="End date">
              <Input type="date" />
            </FormRowVertical>
          </Date>
          <FormRowVertical label="Include breakfast">
            <Checkbox>I want pay extra $30.00 for breakfast</Checkbox>
          </FormRowVertical>
        </Form>
      </div>
    </BookingWrapper>
  );
}

export default BookingDetails;

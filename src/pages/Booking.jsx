import BookingDetails from "../features/Booking/BookingDetails";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

function Booking() {
  return (
    <Container>
      <Heading as="h2">Booking cabin</Heading>
      <BookingDetails />
    </Container>
  );
}

export default Booking;

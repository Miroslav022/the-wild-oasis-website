import { BookingProvider } from "../contexts/BookingContext";
import BookingDetails from "../features/Booking/BookingDetails";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

function Booking() {
  return (
    <BookingProvider>
      <Container>
        <Heading as="h2">Booking cabin</Heading>
        <BookingDetails />
      </Container>
    </BookingProvider>
  );
}

export default Booking;

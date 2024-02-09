import ContactForm from "../features/Contact/ContactForm";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import HeadingContainer from "../ui/HeadingContainer";

function Contact() {
  return (
    <Container>
      <HeadingContainer>
        <Heading as="h3">Contact us</Heading>
        <Heading as="h2">Contact us in case you have any questions</Heading>
      </HeadingContainer>
      <ContactForm />
    </Container>
  );
}

export default Contact;

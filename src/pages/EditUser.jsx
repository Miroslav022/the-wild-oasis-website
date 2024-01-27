import UserEditForm from "../features/User/UserEditForm";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import HeadingContainer from "../ui/HeadingContainer";

function EditUser() {
  return (
    <Container>
      <HeadingContainer>
        <Heading as="h2">Edit user account</Heading>
      </HeadingContainer>
      <UserEditForm />
    </Container>
  );
}

export default EditUser;

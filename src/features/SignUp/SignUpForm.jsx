import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function SignUpForm() {
  return (
    <Form>
      <FormRowVertical label="Full name">
        <Input type="text" id="fullName" />
      </FormRowVertical>
      <FormRowVertical label="Email">
        <Input type="email" id="email" />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input type="password" id="password" />
      </FormRowVertical>
      <FormRowVertical label="Confirm password">
        <Input type="password" id="Confirmpassword" />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Register</Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignUpForm;

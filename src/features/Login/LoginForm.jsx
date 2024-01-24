import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

function LoginForm() {
  return (
    <Form>
      <FormRowVertical label="Email">
        <Input type="email" id="email" />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input type="password" id="password" />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

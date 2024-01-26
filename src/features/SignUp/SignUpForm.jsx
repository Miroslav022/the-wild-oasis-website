import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";

function SignUpForm() {
  const { signUp, isLoading } = useSignUp();
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  console.log(errors);
  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRowVertical>
      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Your email has a wrong format",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must contain 8 characters!",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          id="Confirmpassword"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignUpForm;

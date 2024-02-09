import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useContact } from "./useContact";

function ContactForm() {
  const { sendMessage, isLoading } = useContact();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    sendMessage(data, { onSuccess: () => reset() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          placeholder="Miroslav Jandric"
          {...register("fullName", {
            required: "This field is required!",
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          placeholder="example@gmail.com"
          //   id="email"
          //   name="email"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Message" error={errors?.message?.message}>
        <Textarea
          placeholder="Message"
          rows="10"
          {...register("message", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          Send message
        </Button>
      </FormRowVertical>
    </form>
  );
}

export default ContactForm;

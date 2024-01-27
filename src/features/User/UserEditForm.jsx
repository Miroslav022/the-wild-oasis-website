import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUser } from "../../hooks/useUser";
import styled from "styled-components";
import FileInput from "../../ui/FileInput";
import { useEditUser } from "./useEditUser";

const ImgHolder = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;

const Img = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
`;

function UserEditForm() {
  const { data } = useUser();
  const { editUser } = useEditUser();

  const { fullName, avatar } = data.user_metadata;
  const { email } = data;

  const { handleSubmit, getValues, formState, register } = useForm();
  const { errors } = formState;

  const isLoading = false;

  function onSubmit(data) {
    let dataToSent = { ...data, avatar: data.image[0] };
    editUser(dataToSent);
  }

  return (
    <>
      <ImgHolder>
        <Img src={avatar} alt="" />
      </ImgHolder>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label="Full name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="fullName"
            defaultValue={fullName}
            {...register("fullName", { required: "This field is required" })}
          />
        </FormRowVertical>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input type="email" id="email" disabled={true} defaultValue={email} />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            {...register("password", {
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
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
          />
        </FormRowVertical>
        <FormRowVertical>
          <FileInput id="image" accept="image/*" {...register("image")} />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {isLoading ? "Editing..." : "Edit"}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default UserEditForm;

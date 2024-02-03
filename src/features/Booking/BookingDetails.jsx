import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useCabin } from "../Cabins/useCabin";
import Heading from "../../ui/Heading";
import Checkbox from "../../ui/CheckBox";
import Counter from "../../ui/Counter";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import RadioButton from "../../ui/RadioButton";

import { formatCurrency } from "../../utils/helpers";
import { useBookingContext } from "../../contexts/BookingContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBooking } from "./useCreateBooking";
import { useQueryClient } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
// import { useGuest } from "./useGuest";

// import { FaRegCreditCard } from "react-icons/fa";

const BookingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const Img = styled.img`
  border-radius: var(--border-radius-lg);
  position: sticky;
  top: 20px;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const FlexRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

//Make component
const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const Discount = styled.del`
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--color-red-700);
`;

function BookingDetails() {
  const [breakfast, setBreakfast] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { cabin, status } = useCabin();
  const { nights, guests, dispatch } = useBookingContext();
  const { bookingCabin, isLoading } = useCreateBooking();

  if (status === "pending") {
    return <Spinner />;
  }

  const { id, image, name, maxCapacity, regularPrice, discount } = cabin;

  function handleIncrease(e, type) {
    e.preventDefault();
    if (type === "guests") {
      if (guests === maxCapacity) return;
    }
    dispatch({ type: `${type}/Increase` });
  }

  function handleDecrease(e, type) {
    e.preventDefault();
    if (type === "guests" && guests === 1) return;
    if (type === "nights" && nights === 1) return;
    dispatch({ type: `${type}/Decrease` });
  }

  function handleCardPaymentForm(e) {
    console.log("ozbiljnoooooooo");
    console.log(e.target.value);
    if (e.target.value === "card") setIsFormOpen(true);
    if (e.target.value === "cash") setIsFormOpen(false);
  }
  function onSubmit(data) {
    const currentUser = queryClient.getQueryData(["user"]);
    const guestId = currentUser.user_metadata.id;

    const dateDifference = formatDistance(data.endDate, data.startDate);
    console.log(dateDifference);

    let extrasPrice = breakfast ? 30 * guests * nights : 0;
    let totalPrice = breakfast
      ? regularPrice * nights + 30 * guests * nights
      : regularPrice * nights;

    let formData = {
      startDate: data.startDate,
      endDate: data.endDate,
      numNights: nights,
      numGuests: guests,
      totalPrice,
      extrasPrice,
      cabinPrice: totalPrice - extrasPrice,
      status: "unconfirmed",
      hasBreakfast: breakfast,
      isPaid: isFormOpen,
      cabinId: id,
      observations: data.observations,
      guestId,
    };
    bookingCabin(formData);
    // console.log(bookingCabin);
    // console.log(formData);
  }

  const radio = getValues();
  console.log(radio);
  return (
    <BookingWrapper>
      <Img src={image} alt={`cabin-booking-${id}`} />
      <div>
        <Heading as="h3">Booking information</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <div>
              <FormRowVertical label="Name">
                <P>{name}</P>
              </FormRowVertical>
              <FormRowVertical label="Max capacity">
                <P>{maxCapacity} quests</P>
              </FormRowVertical>
            </div>
            <FormRowVertical label="Price">
              <PriceInfo>
                {discount ? (
                  <div className="flex">
                    <Discount>{formatCurrency(regularPrice)}</Discount>
                    <Price>{formatCurrency(regularPrice - discount)}</Price>
                  </div>
                ) : (
                  <Price>{formatCurrency(regularPrice)}</Price>
                )}
              </PriceInfo>
            </FormRowVertical>
          </Flex>
          {/* <FormRowVertical label="How many guests">
            <Input type="number" max={maxCapacity} />
          </FormRowVertical> */}
          <Flex>
            <FormRowVertical label="How many guests">
              <Counter
                increase={(e) => handleIncrease(e, "guests")}
                decrease={(e) => handleDecrease(e, "guests")}
                result={guests}
              />
            </FormRowVertical>
            <FormRowVertical label="How many nights">
              <Counter
                increase={(e) => handleIncrease(e, "nights")}
                decrease={(e) => handleDecrease(e, "nights")}
                result={nights}
              />
            </FormRowVertical>
          </Flex>
          <Flex>
            <FormRowVertical
              label="Start date"
              error={errors?.startDate?.message}
            >
              <Input
                type="date"
                id="startDate"
                {...register("startDate", {
                  required: "This field is required",
                })}
              />
            </FormRowVertical>
            <FormRowVertical label="End date" error={errors?.endDate?.message}>
              <Input
                type="date"
                id="endDate"
                {...register("endDate", {
                  required: "This field is required",
                  validate: (value) => {
                    const distanceBetweenDates = formatDistance(
                      value,
                      getValues().startDate
                    );
                    const days = Number(distanceBetweenDates.split(" ")[0]);
                    return (
                      days <= nights ||
                      `You set ${nights} nights to stay, so if you want to stay longer please increase the number of nights.`
                    );
                  },
                })}
              />
            </FormRowVertical>
          </Flex>
          <FormRowVertical label="Include breakfast">
            <Checkbox
              value={breakfast}
              onChange={() => setBreakfast(!breakfast)}
            >
              I want pay extra $30.00 for breakfast
            </Checkbox>
          </FormRowVertical>
          <FormRowVertical
            label="How i want to pay"
            error={errors?.payment?.message}
          >
            <Flex>
              <FlexRadio>
                <RadioButton
                  type="radio"
                  value="card"
                  onClick={(e) => handleCardPaymentForm(e)}
                  {...register("payment", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <label htmlFor="cash">With card</label>
              </FlexRadio>
              <FlexRadio>
                <RadioButton
                  onClick={(e) => handleCardPaymentForm(e)}
                  type="radio"
                  value="cash"
                  {...register("payment", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <label htmlFor="cash">Cash</label>
              </FlexRadio>
            </Flex>
          </FormRowVertical>
          {isFormOpen && (
            <>
              <FormRowVertical
                label="Card Number"
                error={errors?.cardNumber?.message}
              >
                <Input
                  type="text"
                  // defaultValue={<FaRegCreditCard />}
                  placeholder="0000 0000 0000 0000"
                  id="cardNumber"
                  {...register("cardNumber", {
                    required: "This field is required!",
                  })}
                />
              </FormRowVertical>

              <FormRowVertical
                label="Name on card"
                error={errors?.nameOnCard?.message}
              >
                <Input
                  type="text"
                  id="nameOnCard"
                  {...register("nameOnCard", {
                    required: "This field is required",
                  })}
                />
              </FormRowVertical>
              <Flex>
                <FormRowVertical
                  label="Expiry date"
                  error={errors?.expDate?.message}
                >
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    id="expDate"
                    {...register("expDate", {
                      required: "This field is required",
                    })}
                  />
                </FormRowVertical>
                <FormRowVertical label="CVC/CVV" error={errors?.cvv?.message}>
                  <Input
                    type="text"
                    placeholder="000"
                    id="cvv"
                    {...register("cvv", {
                      required: "This field is required",
                    })}
                  />
                </FormRowVertical>
              </Flex>
            </>
          )}
          <FormRowVertical label="Something you want to mention">
            <Textarea
              rows="5"
              id="observations"
              {...register("observations")}
            ></Textarea>
          </FormRowVertical>

          <FormRowVertical label="Total price">
            <P>
              {formatCurrency(
                breakfast
                  ? regularPrice * nights + 30 * guests * nights
                  : regularPrice * nights
              )}{" "}
              to pay in total
            </P>
          </FormRowVertical>

          <FormRowVertical>
            <Button size="large" disabled={isLoading}>
              Book Cabin
            </Button>
          </FormRowVertical>
        </Form>
      </div>
    </BookingWrapper>
  );
}

export default BookingDetails;

import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  guests: 1,
  nights: 1,
};

const BookingContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "guests/Increase":
      return { ...state, guests: state.guests + 1 };
    case "guests/Decrease":
      return { ...state, guests: state.guests - 1 };
    case "nights/Increase":
      return { ...state, nights: state.nights + 1 };
    case "nights/Decrease":
      return { ...state, nights: state.nights - 1 };
  }
}

function BookingProvider({ children }) {
  const [{ guests, nights }, dispatch] = useReducer(reducer, initialState);
  return (
    <BookingContext.Provider value={{ guests, nights, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

function useBookingContext() {
  const context = useContext(BookingContext);
  if (context === undefined)
    throw new Error("Booking context was used outsite BookingProvider");
  return context;
}

BookingProvider.propTypes = {
  children: PropTypes.node,
};
export { BookingProvider, useBookingContext };

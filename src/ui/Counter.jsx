import styled from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";

const CounterWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Number = styled.span`
  font-size: 2rem;
`;

function Counter({ increase, decrease, result }) {
  return (
    <CounterWrapper>
      <Button size="rounded" onClick={decrease}>
        -
      </Button>
      <Number>{result}</Number>
      <Button size="rounded" onClick={increase}>
        +
      </Button>
    </CounterWrapper>
  );
}

Counter.propTypes = {
  result: PropTypes.number,
  decrease: PropTypes.func,
  increase: PropTypes.func,
};

export default Counter;

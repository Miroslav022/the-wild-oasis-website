import { LuBox } from "react-icons/lu";
import Heading from "../../ui/Heading";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: var(--color-brand-50);
  padding: 20px;
`;

const StyledLuBox = styled(LuBox)`
  font-size: 25px;
`;

const FeatureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function FeaturesCard({ feature, text }) {
  return (
    <Card>
      <StyledLuBox />
      <FeatureTextWrapper>
        <Heading as="h4">{feature}</Heading>
        <p>{text}</p>
      </FeatureTextWrapper>
    </Card>
  );
}

FeaturesCard.propTypes = {
  feature: PropTypes.string,
  text: PropTypes.string,
};

export default FeaturesCard;

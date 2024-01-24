import styled from "styled-components";
import Description from "../../ui/Description";
import Heading from "../../ui/Heading";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  max-width: 100%;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-lg);
`;

const ImgWrapper = styled.img`
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0px 0px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

function CabinCard({ cabin }) {
  const { name, regularPrice, description, image } = cabin;
  return (
    <Card>
      <div>
        <ImgWrapper src={image} alt="" />
      </div>
      <ContentWrapper>
        <Flex>
          <Heading as="h4">{name}</Heading>
          <p>{regularPrice}</p>
        </Flex>
        <Description>
          <p>{description.substring(0, 100) + "..."}</p>
        </Description>
      </ContentWrapper>
    </Card>
  );
}

CabinCard.propTypes = {
  cabin: PropTypes.object,
};

export default CabinCard;

import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";

import Description from "../../ui/Description";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpecificationList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Specification = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Price = styled.p`
  font-weight: 600;
`;

function CabinCard({ cabin }) {
  const { id, name, regularPrice, description, image, maxCapacity, discount } =
    cabin;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/cabin/${id}`);
  }
  return (
    <Card>
      <div>
        <ImgWrapper src={image} alt="" />
      </div>
      <ContentWrapper>
        <Flex>
          <Heading as="h4">{name}</Heading>
          <Price>{formatCurrency(regularPrice)}</Price>
        </Flex>
        <SpecificationList>
          <Specification>
            <MdPeopleOutline />
            {maxCapacity}
          </Specification>
          <Specification>
            <MdOutlineDiscount />
            {discount > 0 ? formatCurrency(discount) : "No discount"}
          </Specification>
        </SpecificationList>
        <Description>
          <p>{description.substring(0, 100) + "..."}</p>
        </Description>
        <div>
          <Button onClick={handleClick}>View more</Button>
        </div>
      </ContentWrapper>
    </Card>
  );
}

CabinCard.propTypes = {
  cabin: PropTypes.object,
};

export default CabinCard;

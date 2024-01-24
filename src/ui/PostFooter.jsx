import { AiOutlineCopyright } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import styled from "styled-components";

const StyledPostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--color-grey-200);
  padding-top: 20px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
`;
const P = styled.p`
  display: flex;
  gap: 5px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function PostFooter() {
  return (
    <StyledPostFooter>
      <P>
        <Span>
          <AiOutlineCopyright />
        </Span>
        2024 The-wild-oasis. All Rights Reserved
      </P>
      <SocialLinks>
        <FaInstagram />
        <FaSquareFacebook />
      </SocialLinks>
    </StyledPostFooter>
  );
}

export default PostFooter;

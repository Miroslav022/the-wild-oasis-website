import styled from "styled-components";

const LogoWrapper = styled.div`
  text-align: center;
  width: 100px;
`;

function Logo() {
  return (
    <LogoWrapper>
      <img src="/logo-light.png" alt="Logo Light" />
    </LogoWrapper>
  );
}

export default Logo;

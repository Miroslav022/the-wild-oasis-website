import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: flex;
  width: 100%;
  height: 100vh;
`;

function AppLayout() {
  const { isLoading } = useUser();
  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    );

  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

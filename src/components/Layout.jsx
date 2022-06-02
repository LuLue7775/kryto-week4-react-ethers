import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  font-family: "Roboto", "Noto Sans TC", sans-serif !important;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <div className="container">{children}</div>
    </StyledLayout>
  );
};

export default Layout;

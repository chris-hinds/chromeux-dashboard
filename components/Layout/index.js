import styled from "@emotion/styled";

const Container = styled.div`
  padding: 32px;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
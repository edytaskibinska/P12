import { Aside, Menu, Content, Container, Header } from "../";
import "./Layout.scss";

function Layout({ menu, content }) {
  return (
    <section className="layout">
      <Header>
        <Menu menuArray={menu} />
      </Header>
      <Container>
        <Aside>Menu vertical</Aside>
        <Content>{content}</Content>
      </Container>
    </section>
  );
}
export default Layout;

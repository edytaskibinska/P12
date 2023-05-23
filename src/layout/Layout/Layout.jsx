import { Aside, Menu, Content, Container, Header } from "../";


function Layout({ menu, content }) {
  return (
    <section className="layout">
      <Header>
        <Menu menuArray={menu} />
      </Header>
      <Container>
        <Aside copyText="Copiryght, SportSee 2020"/>
        <Content>{content}</Content>
      </Container>
    </section>
  );
}
export default Layout;

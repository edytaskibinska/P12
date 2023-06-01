import { NavLink } from "react-router-dom";
import { Block, Text } from "../../components";
import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

const AccueilStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${colors?.main};
  max-width: 100%;
  padding: 20px;
  .accueilTitle {
    padding: 30px;
  }
  .navLink {
    color: ${colors?.bgWhite};
    margin: 20px 10px;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: ${colors?.main};
    text-decoration: none;
  }
  .flexBlock {
    display: flex;
    margin-top: 40px;
  }
`;

function Accueil() {
  return (
    <AccueilStyled className="accueil">
      <Text className="accueilTitle">Choisissez un utilisateur:</Text>
      <Block className="flexBlock">
        <NavLink className="navLink" index={1} to="/12">
          Karl
        </NavLink>
        <NavLink className="navLink" index={1} to="/18">
          Cecilia
        </NavLink>
      </Block>
    </AccueilStyled>
  );
}

export default Accueil;

import styled from "styled-components";
import PropTypes from "prop-types";

const LoaderElementStyled = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #ff0002;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ff0002 transparent transparent transparent;
  @media all and (max-width: 640px) {
    width: 40px;
    height: 40px;
  }

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoaderStyled = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px auto;
`;

function Loader() {
  return (
    <LoaderStyled className="lds-ring">
      <LoaderElementStyled></LoaderElementStyled>
      <LoaderElementStyled></LoaderElementStyled>
      <LoaderElementStyled></LoaderElementStyled>
      <LoaderElementStyled></LoaderElementStyled>
    </LoaderStyled>
  );
}
Loader.propTypes = {
  //TODO - delete if not used
};

export default Loader;

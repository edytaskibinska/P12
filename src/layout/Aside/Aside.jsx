import styled from "styled-components";
import { Block, IconBlock } from "../../components";
import { YogaIcon, SwimIcon, CycleIcon, HandleIcon } from "../../assets";
import colors from "../../globalStyles/colorsIndex";
import styleSettings from "../../globalStyles/styleSettings";

const AsideStyled = styled.aside`
  background-color: black;
  box-sizing: border-box;
  width: 117px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Copyright = styled.span`
  position: absolute;
  left: -15px;
  bottom: 76px;
  font-family: ${styleSettings.fontFamily.regular}, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: ${colors.bgWhite};
  min-width: 140px;
  transform: rotate(-90deg);
`;

function Aside({ copyText }) {
  return (
    <AsideStyled className="aside">
      <Block padding="20px" specialClass="iconsAside" color={colors.blackBg}>
        <IconBlock
          padding="5px"
          margin="0 0 20px 0"
          dimensions="64px"
          color={colors.bgClear}
        >
          <YogaIcon color={colors.main} />
        </IconBlock>
        <IconBlock
          padding="5px"
          margin="20px 0"
          dimensions="64px"
          color={colors.bgClear}
        >
          <SwimIcon color={colors.main} />
        </IconBlock>
        <IconBlock
          padding="5px"
          margin="20px 0"
          dimensions="64px"
          color={colors.bgClear}
        >
          <CycleIcon color={colors.main} />
        </IconBlock>
        <IconBlock
          padding="5px"
          margin="20px 0 0 0"
          dimensions="64px"
          color={colors.bgClear}
        >
          <HandleIcon color={colors.main} />
        </IconBlock>
      </Block>
      <Copyright>{copyText}</Copyright>
    </AsideStyled>
  );
}

export default Aside;

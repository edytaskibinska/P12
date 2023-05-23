import styled from "styled-components";
import { Block, IconBlock } from "../../components";
import { YogaIcon, SwimIcon, CycleIcon, HandleIcon } from "../../assets";
import colors from "../../globalStyles/colorsIndex";

const AsideStyled = styled.aside`
  background-color: black;
  box-sizing: border-box;
  width: 117px;
`;

function Aside() {
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
    </AsideStyled>
  );
}

export default Aside;

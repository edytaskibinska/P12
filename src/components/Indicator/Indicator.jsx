import PropTypes from "prop-types";
import { Block, IconBlock, IndicatorText } from "..";

function Indicator({
  children,
  title,
  count,
  unity,
  colorBgClear,
  colorIconBox,
}) {
  return (
    <Block grid1to3 color={colorBgClear} padding="20px" margin="0 0 20px 0">
      <IconBlock padding="5px" dimensions="60px" color={colorIconBox}>
        {children}
      </IconBlock>
      <IndicatorText indicatorvalue={`${count} ${unity}`} description={title} />
    </Block>
  );
}

Indicator.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  count: PropTypes.number,
  unity: PropTypes.string,
  colorBgClear: PropTypes.string,
  colorIconBox: PropTypes.number,
};

export default Indicator;

import colorVariables from '../globalStyles/vars/colorVariables'

const {
  transparent,
  white,
  main,
  black
 
} = colorVariables

const colors = {
  leadingColor: getMainColor,
  bgWhite: white,
  transparentColor: transparent,
  darkBackground: black
  
}

export default colors

function getMainColor() {
  return main
}
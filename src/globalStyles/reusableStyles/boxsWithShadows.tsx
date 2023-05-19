import styled from 'styled-components'
import colors from '../../settings/colorsIndex'

export const ShadowBoxMedium = styled.div`
    padding: 10px;
    background-color: ${colors.boxBgClear};
    margin: 20px 0px;
    display: table;
    -webkit-box-shadow: 0 10px 20px 0 ${colors.shadow};
    box-shadow: 0 10px 20px 0 ${colors.shadow};
    width: 100%;
`
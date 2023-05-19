import styled from 'styled-components'
import colors from '../../settings/colorsIndex'

export const Tr = styled.tr`
    padding: 5px;
    background-color: ${colors.boxBgClear};
    border-bottom: 1px solid  ${colors.borderGray};

`
export const Td = styled.td`
    padding: 10px;
    vertical-align: middle;
    &.alignRight {
        text-align: right;
    }
`

export const CellRightContent = styled.td`
    width: 100%;
    padding: 0 10px;
    text-align: right;
`
export const CellCenterContent = styled.div`
    width: 100%;
    padding: 0 10px;
    text-align: center;
`
export const CellCenterAutoContent = styled.div`
    padding: 0 10px;
    text-align: center;
`
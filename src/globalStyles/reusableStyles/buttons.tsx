import styled from 'styled-components'

export const BasicButtonContainer = styled.div`
  display: flex;
  position: relative;
  width: auto!important;
  justify-content: flex-end;
  div {
    max-width: 100%;
    button{
      width: 260px!important;
      text-align: left;
      padding: 3px 20px 3px 20px!important;
    }
    span {
      right: 9px!important;
    }
    svg {
      margin: 10px 2px!important;
      &.PlusIcon  {
        margin: 4px auto!important;//refacto
      }
    }
  }
`
export const ButtonContainer = styled(BasicButtonContainer)`
  position: absolute;
  width: 100%!important;
`
export const BasicV2ButtonContainer = styled(BasicButtonContainer)`
  div {
    // svg {
    //   //margin: 9px 8px!important;
    //   border: 1px solid green;
    // }
  }
`
export const ButtonV2Container = styled(BasicV2ButtonContainer)`
  position: absolute;
  width: 100%!important;
  padding-top: 1%;
`
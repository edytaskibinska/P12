/**
 * Creates an animation of two swiping blocks. 
 * Adding class .animate the right block swipe to the left and the left block swipe to the right.
 * No animation for mobile for now.
 * @example
 *  <A_SwipeBox className={`${condition ? "animate" :  ""}`} >
        <El className="box-left">swipe me to right</El>
        <El className="box-right">swipe me to left</El>
    </A_SwipeBox>
 */
import styled from 'styled-components'
import { transitionAllEase1s } from '../vars/transitions'

const A_SwipeBoxIE = styled.div`
    .box-left,
    .box-right {
        position: relative;
        width: 50%;
        ${transitionAllEase1s};
       @media (max-width: 768px) {
            width: 100%;
            flex-direction: column;
        }
    };
    .box-left{
        left: 0px;
    };
    .box-right {
        right: 0px;
    };
    @media (max-width: 768px) {
        .box-left{
            left: 0px;
            height: auto!important;
        };
        .box-right {
            right: 0px;
            height: auto!important;
        };
    }

    &.animate {
        .box-left {
            position: absolute;
            left: 50%;
            ${transitionAllEase1s};
        };
        .box-right {
            position: absolute;
            right: 90%;
            ${transitionAllEase1s};
        };
        @media (max-width: 768px) {
            .box-left{
                position: relative;
                left: 0px;
            };
            .box-right {
                position: relative;
                right: 0px;
            };
        }
    }
`

const A_SwipeBox = styled(A_SwipeBoxIE)`
    @supports (display: grid) {
        &.animate {
            .box-left {
                min-height: 400px;
            }
            .box-right {
                position: absolute;
                right: 50%;
                ${transitionAllEase1s};
            };
            @media (max-width: 768px) {
                .box-right {
                    position: relative;
                    right: 0px;
                };
            }
        }
    }
   
`

export default A_SwipeBox;
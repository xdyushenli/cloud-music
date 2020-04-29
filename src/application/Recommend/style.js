import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding: 0 1%;
    .before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 60%;
        background: ${style["theme-color"]};
    }
`
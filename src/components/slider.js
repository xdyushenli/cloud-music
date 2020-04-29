import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import style from '../assets/global-style.js';
// todo 不许使用 style 里的属性, 要将这个组件独立出来
// todo 找箭头的svg图片

const SliderContainer = styled.div` 
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`

// 轮播图列表
const SliderList = styled.ul`
    position: relative;
    display: flex;
    width: 100%;
    transform: translateX(${props => (props.activeIndex + 1) * -100}%);
    transition: transform 0.5s;
`

// 轮播图内的项目
const SliderItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    background: ${style["background-color"]};
    &>img {
        display: block;
        max-width: 100%;
    }
`

// 可切换轮播图显示的按钮组成的列表
const SliderDots = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    bottom: 4%;
    z-index: 999;
    & div:nth-child(${props => {
        const { activeIndex, maxLen } = props;
    
        if (activeIndex === -1) {
            return maxLen;
        } else if(activeIndex === maxLen) {
            return 1;
        } else {
            return activeIndex + 1;
        }
    }}) {
        background: ${style['theme-color']};
    }
`

// 可切换轮播图显示的按钮
const SliderDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 8px;
    background: rgba(0, 0, 0, .4);
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, .6);
    }
`

// 向左\右切换的按钮
const SliderArrow = styled.div`
    position: absolute;
    top: 30%;
    bottom: 30%;
    width: 10%;
    background: rgba(0, 0, 0, .4);
    z-index: 999;
    &:hover {
        background: rgba(0, 0, 0, .6);
    }
    &.prev {
        left: 0;
    }
    &.next {
        right: 0;
    }
`

// 节流
const throttle = (func, wait) => {
    let previous = +new Date();

    return function () {
        let now = +new Date();
        let context = this;
        let args = Array.from(arguments);

        if (now - previous > wait) {
            previous = +new Date();
            func.apply(context, args);
        }
    }
}

function Slider(props) {
    const { bannerList, interval = 2000 } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const refUl = useRef(null);

    function transitionEndEventListener(e) {
        const $ul = refUl.current;

        if (activeIndex <= -1) {
            $ul.style.transition = 'transform 0s';
            setActiveIndex(bannerList.length - 1);
        } else if (activeIndex >= bannerList.length) {
            $ul.style.transition = 'transform 0s';
            setActiveIndex(0);
        }
    }

    // 节流, 否则快速点击切换按钮, 会出现动画错误
    const setActive = throttle((nextIndex) => {
        setActiveIndex(nextIndex);
    }, 500)

    useEffect(() => {
        const $ul = refUl.current;
        $ul.style.transition = 'transform 0.5s';

        const timer = setTimeout(() => {
            setActiveIndex(activeIndex + 1);
        }, interval);

        return () => clearTimeout(timer);
    })

    return (
        <SliderContainer>
            <SliderArrow className='prev' onClick={() => setActive(activeIndex - 1)}>
                <span className='iconfont'></span>
            </SliderArrow>

            <SliderArrow className='next' onClick={() => setActive(activeIndex + 1)}>
                <span className='iconfont'></span>
            </SliderArrow>

            <SliderList activeIndex={activeIndex} ref={refUl} onTransitionEnd={transitionEndEventListener}>
                <SliderItem key={-1 + bannerList[0]}><img src={bannerList[0]} /></SliderItem>
                {bannerList.map((src, index) => <SliderItem key={index + src}><img src={src} /></SliderItem>)}
                <SliderItem key={bannerList.length + bannerList[bannerList.length - 1]}><img src={bannerList[bannerList.length - 1]} /></SliderItem>
            </SliderList>
            
            <SliderDots activeIndex={activeIndex} maxLen={bannerList.length}>
                {bannerList.map((src, index) => <SliderDot key={index} onClick={() => setActiveIndex(index)} />)}
            </SliderDots>
        </SliderContainer>
    )
}

export default React.memo(Slider);
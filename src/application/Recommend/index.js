import React from 'react';
import { SliderContainer } from './style.js';
import Slider from '../../components/slider.js';
import RecommendList from '../../components/list.js';

function Recommend(props) {
    // mock 数据 todo 删除
    const bannerList = [
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
    ]

    const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
        return {
            id: 1,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    });

    // todo 记得修改样式
    return (
        <div>
            <SliderContainer>
                <div className='before'></div>
                <Slider bannerList={bannerList} interval={2000}></Slider>
            </SliderContainer>
            <RecommendList recommendList={recommendList}></RecommendList>
        </div>
    )
}

export default React.memo(Recommend);
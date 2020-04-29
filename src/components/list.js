import React from 'react';
import styled from 'styled-components';
import style from '../assets/global-style.js';

const ListWrapper = styled.div`
    padding: 15px;

    .title{
        border-bottom: 1px solid ${style['border-color']};
        padding: 5px;
        color: ${style['font-color-desc']};
    }
`;

const List = styled.div`
`;

const ListItem = styled.div``;

function RecommendList(props) {
    return (
        <ListWrapper>
            <h1 className='title'>推荐歌曲</h1>
            <List>
                {
                    props.recommendList.map(item => {
                        return (
                            <ListItem>

                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}

export default React.memo(RecommendList);
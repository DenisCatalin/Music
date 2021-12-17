import React from 'react';
import SongList from '../song-list/song-list.component';
import { Desc, UpperTable } from '../page-content/page-content.styles';
import { Width100Height100 } from '../../global.styles'

const HomeContent = () => {
    return (
        <Width100Height100>
            <UpperTable>
                <Desc>#</Desc>
                <Desc style={{marginLeft: '3em'}}>TITLE</Desc>
                <Desc style={{marginLeft: '25em'}}>ALBUM</Desc>
                <Desc style={{marginLeft: '15em'}}>DATE ADDED</Desc>
                <Desc style={{marginLeft: '10em'}}>DURATION</Desc>
            </UpperTable>
            <SongList />
        </Width100Height100>
    )
}

export default HomeContent

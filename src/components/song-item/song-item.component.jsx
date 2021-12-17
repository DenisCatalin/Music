import React from 'react'
import { SongAlbum, SongDateAdded, SongDuration, SongImage, SongItemContainer, SongNumber, SongTitle, SongTitleContainer, SongDescription, SongArtist } from './song-item.styles'

const SongItem = ({number, img, title, artist, album, date, duration}) => {
    return (
        <SongItemContainer>
            <SongNumber>{number}</SongNumber>
            <SongTitleContainer>
                <SongImage src={img}/>
                <SongDescription>
                    <SongTitle>{title}</SongTitle>
                    <SongArtist>{artist}</SongArtist>
                </SongDescription>
            </SongTitleContainer>
            <SongAlbum>{album}</SongAlbum>
            <SongDateAdded>{date}</SongDateAdded>
            <SongDuration>{duration}</SongDuration>
        </SongItemContainer>
    )
}

export default SongItem

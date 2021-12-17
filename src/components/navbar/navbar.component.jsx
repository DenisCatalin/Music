import React from 'react';
import Logo from '../../assets/img/music.png';
import { AddNewCircle, AddNewContainer, AddNewText, LogoContainer, LogoImage, LogoText, NavbarContainer, Option, OptionsContainer, PlaylistContainer, PlaylistName } from './navbar.styles';

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <LogoImage src={Logo} alt='Logo Musify' />
                <LogoText>Musify</LogoText>
            </LogoContainer>
            <OptionsContainer>
                <Option><i className="fas fa-home" style={{marginRight: '1em'}}></i>Home</Option>
                <Option><i className="fas fa-search" style={{marginRight: '1em'}}></i>Search</Option>
                <Option><i className="fas fa-layer-group" style={{marginRight: '1em'}}></i>Playlists</Option>
            </OptionsContainer>
            <AddNewContainer>
                <AddNewCircle><i className="fas fa-plus"></i></AddNewCircle>
                <AddNewText>Add new playlist</AddNewText>
            </AddNewContainer>
            <PlaylistContainer>
                <PlaylistName>Rock</PlaylistName>
                <PlaylistName>Rock</PlaylistName>
                <PlaylistName>Rock</PlaylistName>
            </PlaylistContainer>
        </NavbarContainer>
    )
}

export default Navbar;

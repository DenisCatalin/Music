import React from 'react';
import { HomepageContainer, NavContainer, ContentContainer, ControllerContainer } from './home.styles';
import Navbar from '../../components/navbar/navbar.component';
import PageContent from '../../components/page-content/page-content.component';
import Controller from '../../components/controller/controller.component';

const Home = () => {
    const currentUser = localStorage.getItem('currentUser');
    return (
        <HomepageContainer>
            <NavContainer>
                <Navbar />
            </NavContainer>
            <ContentContainer>
                <PageContent code={currentUser} />
            </ContentContainer>
            <ControllerContainer>
                <Controller />
            </ControllerContainer>
        </HomepageContainer>
    )
}

export default Home

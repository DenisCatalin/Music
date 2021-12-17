import React from 'react'
import { PageContentContainer } from './page-content.styles';
import useAuth from '../../customHooks/useAuth';
import HomeContent from '../home-content/home-content.component';

const PageContent = ({ code }) => {
    const accessToken = useAuth(code);

    return (
        <PageContentContainer>
           <HomeContent />
        </PageContentContainer>
    )
}

export default PageContent

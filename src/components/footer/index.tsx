import React from 'react';

import { FooterContainer } from './styled';

const Footer = (): React.ReactElement => {
    return (    
        <FooterContainer className='h-56 mt-10 bg-blue-200'>
            <h1>Hello from Footer.</h1> 
        </FooterContainer>
    );
}

export default Footer;
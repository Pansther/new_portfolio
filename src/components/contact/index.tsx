import React from 'react';

import { ContactBox } from './styled';

import { contactType } from '../../types/contact';

const contactData: contactType[] = [
    {
        id: 1,
        name: 'Facebook',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/facebook.png',
        path: 'https://www.facebook.com/werawit.boat'
    },
    {
        id: 2,
        name: 'Line',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/line.png',
        path: '',
        text: 'boat_boaty'
    },
    {
        id: 3,
        name: 'Email',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/email.png',
        path: '',
        text: 'werawit.boat@gmail.com'
    },
    {
        id: 4,
        name: 'GitHub',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/github.png',
        path: 'https://github.com/Pansther'
    }
];


const Contact = (contact: contactType): React.ReactElement => { 
    return (
        <div className='contact-box'>
            <a href={contact.path} target={contact.path === '' ? '_self' : '_b'} rel="noopener noreferrer">
                {/* <img src={contact.img} alt={contact.name} /> */}
                <img
                    className='my-8 mx-3 w-16 h-16 rounded-full'
                    src={`http://localhost:8080/uploads/image/${contact.name.toLowerCase()}.png`}
                    alt={contact.name}
                />
            </a>
        </div>
    );
}

const ContactGroup = (): React.ReactElement => {
    return (
        <ContactBox>
            {/* <div className='group-name-box flex-col justify-center'>
                <p className='text-4xl text-center'><b>Contact Me</b></p>
            </div> */}
            <div className='group-contact flex justify-center items-center'>
                {
                    contactData?.map(contact => (
                        <Contact key={contact.id} { ...contact } />
                    ))
                }
            </div>
        </ContactBox>
    );
}

export default ContactGroup;
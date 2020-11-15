import React from 'react';
import { message, BackTop } from 'antd';

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
        text: 'line_id boat_boaty'
    },
    {
        id: 3,
        name: 'Email',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/email.png',
        text: 'email werawit.boat@gmail.com'
    },
    {
        id: 4,
        name: 'GitHub',
        img: 'https://werawit.s3.ap-southeast-1.amazonaws.com/my_port/github.png',
        path: 'https://github.com/Pansther'
    }
];

const clipboardDisplay = (msg: string): Function => {
    document.addEventListener('copy', function (e) { 
        e?.clipboardData?.setData('text/plain', `${msg.split(' ')[1]}`);  
        e.preventDefault();
    });
    document.execCommand("copy");

    message.config({
        maxCount: 1,
        duration: 4
    });

    return message.success({
        content: 
                <p className='inline'>
                    <span>Copied </span>
                    <span className='text-blue-500 font-bold'>
                        {`${msg}`}
                    </span>
                    <span> to clipboard.</span>
                </p>, 
        className: 'clipboard-display', 
    });
};

const Contact = (contact: contactType): React.ReactElement => { 
    return (
        <div className='contact-box'>
            <a 
                href={contact.path} 
                target={contact.path ? '_blank' : '_self'} 
                rel="noopener noreferrer"
                onClick={contact.path ? () => {} : () => clipboardDisplay(`${contact.text}`)}
            > 
                <img
                    className='my-8 mx-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full'
                    src={contact.img}
                    alt={contact.name}
                />
                {/* <img
                    className='my-8 mx-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full'
                    src={`http://localhost:8080/uploads/image/${contact.name.toLowerCase()}.png`}
                    alt={contact.name}
                /> */}
            </a>
        </div>
    );
}

const ContactGroup = (): React.ReactElement => {
    return (
        <ContactBox>
            <BackTop />
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
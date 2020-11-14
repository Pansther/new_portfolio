import React from 'react';
import axios from 'axios';
import { Typography } from 'antd';

import { ProfileBox } from './styled' 

import { profileType } from '../../types/profile'

import { getProfile } from '../../api/getData'
  
const Profile = (): React.ReactElement => {

    const { Paragraph } = Typography;
    
    const [profileData, setProfile] = React.useState([]);

    React.useEffect(() => {
        axios.get(getProfile)
            .then(data => {
                setProfile(data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <ProfileBox className='profile-container flex-col justify-center'>
            <p className='profile-name text-center text-4xl'><b>Profile</b></p> 
            <div className='profile-box flex justify-center pt-2'>
                <Typography className='flex justify-center w-10/12'>
                    <Paragraph className='text-lg sm:text-2xl break-all'>
                        {
                            profileData?.map((profile: profileType) => (
                                <p className='font-mitr font-light text-center'>{profile.content}</p>
                            ))
                        }
                    </Paragraph>
                </Typography>
            </div>
        </ProfileBox>
    );
}

export default Profile;
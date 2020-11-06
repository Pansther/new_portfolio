import React from 'react';

import { HomeCoverBox } from './styled'; 

const HomeCover = (): React.ReactElement => {
    return (
        <HomeCoverBox>
            <div className='cover-container flex min-h-full w-full mt-0 mb-10 mx-auto w-full bg-blue-400 bg-opacity-100 shadow-md justify-center'>
                <div className='cover-box flex w-full sm:w-10/12 lg:w-8/12 flex-col md:flex-row '>
                    <div className='texasdsat-box flex my-0 mx-auto md:w-5/12 h-56 md:h-full items-center text-center'>
                        <p className='text-5xl xl:text-6xl text-white'><b>Werawit Sirakunwat</b></p>  
                    </div>
                    <div className='profile-img-box flex w-full md:w-7/12 items-end justify-center'>
                        {/* <img className='profile-img w-full h-56 md:h-full bg-blue-200' src='https://werawit.s3.amazonaws.com/my_port/profile.png' alt='profile-img' /> */}
                        <img className='profile-img lg:h-64 xl:h-full' src='http://localhost:8080/uploads/image/profile.png' alt='profile-img' />
                    </div>
                </div>
            </div>
        </HomeCoverBox>
    );
}

export default HomeCover;
import React from 'react';

import { HomeCoverBox } from './styled';

const HomeCover = (): React.ReactElement => {
    return (
        <HomeCoverBox>
            <div className='cover-container flex w-full mt-5 mb-10 mx-auto w-full bg-red-200 justify-center'>
                <div className='cover-box flex w-8/12 flex-col sm:flex-row'>
                    <div className='text-box w-full sm:w-5/12 h-56 sm:h-full bg-green-200'>

                    </div>
                    <div className='profile-img-box w-full sm:w-7/12'>
                        <img className='profile-img w-full h-56 sm:h-full bg-blue-200' src='' alt='profile-img' />
                    </div>
                </div>
            </div>
        </HomeCoverBox>
    );
}

export default HomeCover;
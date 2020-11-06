import React from 'react';

import { HomeCoverBox } from './styled';

const HomeCover = (): React.ReactElement => {
    return (
        <HomeCoverBox>
            <div className='cover-container flex w-full my-5 mx-auto w-full bg-red-200 justify-center'>
                <div className='cover-box flex w-9/12 flex-column'>
                    <div className='text-box w-6/12 h-full bg-green-200'>

                    </div>
                    <div className='profile-img-box w-6/12'>
                        <img className='profile-img w-full h-full bg-blue-200' src='' alt='profile-img' />
                    </div>
                </div>
            </div>
        </HomeCoverBox>
    );
}

export default HomeCover;
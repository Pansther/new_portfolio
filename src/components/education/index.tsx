import React from 'react';
import axios from 'axios';
import { Steps } from 'antd';
import { EducationBox } from './styled';

import { educationType } from '../../types/education';
import { getEducation } from '../../api/getData';
  
const EducationGroup = (): React.ReactElement => {

    const [educateData, setEducate] = React.useState([]);

    React.useEffect(() => {
        axios.get(getEducation)
        .then(data => {  
            setEducate(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <EducationBox className='education-container flex flex-col justify-center'>
            <p className='education-group-name text-center text-4xl text-blue-500'><b>Education</b></p> 
            <div className='education-box flex justify-center'>
                <Steps 
                    className='w-9/12 sm:w-auto my-5' 
                    direction="vertical" 
                    current={0} 
                >
                    {
                        educateData?.map((educate: educationType) => (
                            <Steps.Step
                                className='font-mitr font-light'
                                title={<p className='text-lg sm:text-xl'>{educate.name}</p>} 
                                description={educate.content} 
                                icon={<img src={educate.img} alt={`${educate.name}-img`} />}
                                // icon={<img src='http://localhost:8080/uploads/image/apw_log.png' alt={''} />}
                                
                            />
                        ))
                    }
                </Steps>
            </div>
        </EducationBox>
    );
}

export default EducationGroup;
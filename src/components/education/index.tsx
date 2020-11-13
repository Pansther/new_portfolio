import React from 'react';
import axios from 'axios';
import { Steps } from 'antd';
import { EducationBox } from './styled';

import { educationType } from '../../types/education';
import { getEducation } from '../../api/getData';

const EducationStep = (props: educationType): React.ReactElement => {

    const { Step } = Steps;

    return (
        <Step
            title={props.name}
            description={props.content}
        />
    );
}

const EducationGroup = (): React.ReactElement => {

    const [educateData, setEducate] = React.useState([]);

    React.useEffect(() => {
        axios.get(getEducation)
        .then(data => {
            console.log(getEducation);
            setEducate(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <EducationBox className='education-container flex flex-col justify-center'>
            <p className='education-group-name text-center text-4xl'><b>Education</b></p> 
            <div className='education-box'>
                <Steps direction="vertical" current={1}>
                    {
                        educateData?.map(educate => (
                            <EducationStep { ...educate } />
                        ))
                    }
                </Steps>
            </div>
        </EducationBox>
    );
}

export default EducationGroup;
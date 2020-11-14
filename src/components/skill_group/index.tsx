import React from 'react';
import CardFlip from 'react-card-flip';

import { SkillContainer } from './styled';

import { skillType } from '../../types/skill';

interface IProps {
    skillData: skillType[]
}

function useCardFlip(frontComponent: React.ReactElement, backComponent: React.ReactElement) {

    const [isFlipped, setFilp] = React.useState(false);

    function handleClick (e: any) { 
        e.preventDefault(); 
        setFilp(prevFlip => !prevFlip); 
    }

    return (
        <span 
            className='my-4 ml-4 mr-4 cursor-pointer' 
            onMouseEnter={handleClick} 
            onMouseDown={handleClick} 
            onTouchEnd={handleClick}
        >
            <CardFlip isFlipped={isFlipped}>
                {frontComponent}
                {backComponent}
            </CardFlip>
        </span>
    );
}

const Skill = (skill: skillType): React.ReactElement => {

    const CardFlipComp = useCardFlip(
        /// Front component.
        <div className='flex justify-center items-center rounded-md w-32 h-32 border-solid border-2 border-gray-400 shadow-md'>
            <p className='m-0 p-0 text-lg'>{skill.name}</p>
        </div>,

        /// Back component.
        <img 
            className='flex justify-center items-center rounded-md w-32 h-32 border-2 border-gray-400 shadow-md'  
            alt={skill.name}
            // src={skill.img}
            src={`http://localhost:8080/uploads/image/${skill.name.toLocaleLowerCase()}.png`}
        />
    );  

    return ( 
        <>
            {CardFlipComp} 
        </>
    );
}


const SkillGroup = (props: IProps): React.ReactElement => {
    return (
        <SkillContainer className='flex flex-col'>
            <p className='skill-group-name text-center text-4xl text-blue-500'><b>Skills</b></p>
            <div className='skill-list flex flex-row flex-wrap justify-center mt-0 mb-4 mx-auto'>
                {
                    props?.skillData?.map(skill => (
                        <Skill key={skill.skill_id} { ...skill } />
                    ))
                }
            </div>
        </SkillContainer>
    );
}

export default SkillGroup;
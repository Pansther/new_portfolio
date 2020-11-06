import React from 'react'; 
import { Skeleton } from 'antd';

import { projectType } from '../../types/project';

import { ProjectBox, ProjectCard } from './styled';
// import { ProjectCover } from './styled';
import { VeryLargeText } from '../../styleds/text';

interface IProps {
    project_data: projectType[],
    groupName: String,
    loading: boolean
}

function getColorClass(isComplete: Boolean) {
    return isComplete ? 'bg-green-400' : 'bg-red-400';
};

const Project = (project: projectType): React.ReactElement => { 
    return (
        <a href={`${project.path}`} target='_blank' rel="noopener noreferrer">
            <ProjectCard
                title={`${project.name}`} 
                hoverable
                // cover={<ProjectCover alt='cover' src={`${project.img}`} />}
                cover={<div className='project-test-cover h-56 w-full bg-blue-200'></div>}
            >
                <div className='project-status-box flex items-center'>
                    <div className={`project-status h-3 w-3 rounded-full p-0 my-3 ${getColorClass(project.complete)}`}></div>
                    <p className='p-0 ml-3 flex-baseline'>{`${project.complete ? 'Completed' : 'In Progress'}`}</p>
                </div>
                <p className='break-all font-light'>{project.content}</p>
            </ProjectCard>
        </a>
    );
}

const ProjectSkeleton = (): React.ReactElement => { 

    function createMockupData (minDataNumber: number, maxDataNumber: number) {
        let project: projectType[] = [];

        let number = Math.floor(Math.random() * (maxDataNumber - minDataNumber)) + minDataNumber;

        for (let i = 0; i < number; i++) {
            project.push({
                id: i,
                name: 'test',
                img: '',
                content: '',
                path: '',
                complete: Math.random() >= 0.5
            });
        }

        return project;
    }

    return (
        <>
            {
                createMockupData(4, 8).map(project => ( 
                    <ProjectCard
                        key={project.id}
                        title={<div className='h-5 w-24 bg-gray-200 animate-pulse'></div>}
                        hoverable
                        // cover={<ProjectCover alt='cover' src={`${project.img}`} />}
                        cover={<div className='h-56 w-full bg-gray-200 animate-pulse'></div>}
                    > 
                        <Skeleton paragraph={{ rows: 4 }} className='animate-pulse'></Skeleton>
                    </ProjectCard> 
                ))
            }
        </>
    );
}

const ProjectGroup = (props: IProps): React.ReactElement => {

    // console.log(project_data);
    // console.log(loading);
 
    return (  
        <ProjectBox className='project-box'>
            <VeryLargeText className='group-name text-center'><b>{props.groupName}</b></VeryLargeText>
            <div className='project-list justify-center mt-0 mb-4 mx-auto'>
                {
                    props.loading ?  
                        <ProjectSkeleton />
                    :
                    props.project_data?.map(project => (
                        <Project key={project.id} { ...project } />
                    ))   
                }
            </div>
        </ProjectBox> 
    );
}

export default ProjectGroup;
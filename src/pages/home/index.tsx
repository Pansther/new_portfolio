import React from 'react';
import axios from 'axios';  

import { projectType } from '../../types/project';

import { HomeContainer, ProjectBox, ProjectCard } from './styled';
// import { ProjectCover } from './styled';
import { VeryLargeText } from '../../styleds/text';
 
interface IProps {
    project_data: projectType[],
    groupName: String,
    loading: boolean
}
 
const ProjectGroup = (props: IProps): React.ReactElement => {

    // console.log(project_data);
    // console.log(loading);

    /// get project status and return tailwindcss color class.
    const getColorClass = (isComplete: Boolean) => {
        return isComplete ? 'bg-green-400' : 'bg-red-400';
    };
  
    return (
        <ProjectBox className='project-box'> 
            <VeryLargeText className='group-name'><b>{props.groupName}</b></VeryLargeText>
            <div className='project-list'>
                {
                    props.project_data?.map(project => (
                        <a key={project.id} href={`${project.path}`} target='_blank' rel="noopener noreferrer">
                            <ProjectCard
                                title={`${project.name}`} 
                                loading={props.loading}
                                hoverable
                                // cover={<ProjectCover alt='cover' src={`${project.img}`} />}
                                cover={<div className='project-test-cover h-56 w-full bg-blue-200'></div>}
                            > 
                                <div className='project-status-box overflow-auto flex items-center'>
                                    <div className={`project-status h-3 w-3 rounded-full p-0 my-3 ${getColorClass(project.complete)}`}></div>
                                    <p className='p-0 ml-3 flex-baseline'>{`${project.complete ? 'Completed' : 'In Progress'}`}</p>
                                    </div>
                                <p className='break-all font-light'>{project.content}</p>
                            </ProjectCard>
                        </a>
                    ))
                } 
            </div>  
        </ProjectBox>
    );
}

const Home = (): React.ReactElement => {  

    const [projectData, setProject] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => { 
        axios.get(`${process.env.REACT_APP_LOCAL}/project/`)
        .then(data => {
            // console.log(data);
            setProject(data.data);
            setLoading(false);
        });
    }, []);

    // console.log(projectData);

    return (
        <HomeContainer>
            <ProjectGroup groupName='My Projects' project_data={projectData} loading={loading} />  
        </HomeContainer>
    );
}

export default Home;
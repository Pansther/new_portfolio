import React from 'react';
import axios from 'axios';  

import { projectType } from '../../types/project';

import { HomeContainer, ProjectBox, ProjectCard } from './styled';
// import { HomeContainer, ProjectCover } from './styled';
import { VeryLargeText } from '../../styleds/text';

interface IProps {
    project_data: projectType[],
    groupName: String,
    loading: boolean
}
 
const ProjectGroup = (props: IProps): React.ReactElement => {

    // console.log(project_data);
    // console.log(loading);

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
                            >
                                <p>{project.content}</p>
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
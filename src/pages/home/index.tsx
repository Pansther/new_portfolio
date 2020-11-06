import React from 'react';
import axios from 'axios';  

import { HomeContainer } from './styled';

import ProjectGroup from '../../components/project';

const Home = (): React.ReactElement => {  

    const [projectData, setProject] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => { 
        axios.get(`${process.env.REACT_APP_LOCAL}/project/`)
        .then(data => {
            // console.log(data);
            /// set delay for show project skeleton.
            setTimeout(() => {
                setProject(data.data);
                setLoading(false);
            }, 600);
        })
        .catch(err => {
            console.log(err);
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
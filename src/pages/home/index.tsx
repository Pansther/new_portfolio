import React from 'react';
import axios from 'axios';  
import { Tabs } from 'antd';

import { HomeContainer } from './styled';

import HomeCover from './cover';
import ProjectGroup from '../../components/project';
import ContactGroup from '../../components/contact';
import SkillGroup from '../../components/skill_group';

const { TabPane } = Tabs;

const Home = (): React.ReactElement => {  

    const [projectData, setProject] = React.useState([]);
    const [skillData, setSkill] =  React.useState([]);
    const [loading, setLoading] = React.useState(true); 

    React.useEffect(() => {  

        Promise.all([
            axios.get(`${process.env.REACT_APP_LOCAL}/project/`),
            axios.get(`${process.env.REACT_APP_LOCAL}/skill/`)
        ])
        .then(data => {

            setTimeout(() => {
                setProject(data[0].data);
                setSkill(data[1].data);
                setLoading(false);
            }, 600); 

        })
        .catch(err => {
            console.log(err);
        });

    }, []);

    // console.log(projectData);
    // console.log(skillData);

    function useTabPane (tabName: string, tabKey: number, Component: React.ReactElement) {
        return (
            <TabPane tab={tabName} key={tabKey}>
                { Component }
            </TabPane>
        );
    }

    const ProjectTab = useTabPane('My Projects', 1, <ProjectGroup groupName='My Projects' project_data={projectData} loading={loading} />);
    const AboutTab = useTabPane('About Me', 2, <SkillGroup skillData={skillData} />);
    
    return (
        <HomeContainer>
            <HomeCover />
            <ContactGroup />

            <Tabs defaultActiveKey="2" type="card" centered>
                { ProjectTab }
                { AboutTab }
            </Tabs>

        </HomeContainer>
    ); 
}

export default Home;
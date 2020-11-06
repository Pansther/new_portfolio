import styled from 'styled-components';
import { Card } from 'antd';  

export const ProjectCover = styled.img`
    width: 300px;
    height: 250px;
`;

export const ProjectBox = styled.div`
    /* background: pink; */
    width: 100%; 

    display: flex;
    flex-flow: column wrap;    
    margin-top: 15px; 

    .project-list {
        /* background: lightblue; */
        width: 90%;

        display: flex;
        flex-flow: row wrap;  
        padding-bottom: 15px; 

        p {
            font-family: 'Mitr', sans-serif; 
        }
    }
`;

export const ProjectCard = styled(Card)`
    width: 300px; 
    height: 500px;

    margin: 15px 7.5px 0 7.5px;

    .ant-card-body {
        padding: 20px;
        padding-top: 5px;
    }
`;
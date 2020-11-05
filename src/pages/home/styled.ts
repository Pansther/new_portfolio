import styled from 'styled-components';
import { Card } from 'antd';  

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;

    .project-box {
        margin-top: 15px; 
    }
`;

export const ProjectCover = styled.img`
    width: 300px;
    height: 250px;
`;

export const ProjectBox = styled.div`
    /* background: pink; */
    width: 90%;
    height: 500px;

    display: flex;
    flex-flow: row wrap; 
    justify-content: center; 

    .project-list {
        /* background: lightblue; */
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
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
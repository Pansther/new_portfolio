import styled from 'styled-components';
import { Card } from 'antd';  
 
export const ProjectBox = styled.div`
    /* background: pink; */
    width: 100%; 

    display: flex;
    flex-flow: column wrap;    
    /* margin-top: 15px;  */

    .project-list {
        /* background: lightblue; */
        width: 90%;

        display: flex;
        flex-flow: row wrap;  
        /* padding-bottom: 15px;  */

        p {
            font-family: 'Mitr', sans-serif; 
        }
    }
`;

export const ProjectCard = styled(Card)`
    width: 300px; 
    height: 500px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    margin: 20px 15px 0 15px;
  
    .ant-card-body {
        padding: 20px;
        padding-top: 5px;
    } 
`;

export const ProjectCover = styled.img`
    width: 300px;
    height: 230px;
`;
import styled from 'styled-components';
 
export const HomeContainer = styled.div`
    display: flex;
    flex-flow: column wrap; 
    justify-content: center;
`; 

export const HomeCoverBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center; 

    .cover-box {
        height: 18rem;
        
        @media (min-width: 640px) {
            height: 28rem;
        }
    }
`;
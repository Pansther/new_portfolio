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
        
        @media (min-width: 768px) {
            height: 28rem;
        }  

        .text-box {
            p {
                text-shadow: 2px 2px 4px #666666;
            }
        }
        
        .profile-img {
            @media (min-width: 768px) {
                min-height: 22rem;
            } 
        }    
    }
`;
import styled from 'styled-components';
 
export const HomeContainer = styled.div`
    display: flex;
    flex-flow: column nowrap; 
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

        .cover-border {  
            @media (min-width: 768px) {
                border: 15px white solid; 
                position: absolute;

                width: 95%;
                height: 22rem;
            }
        }

        .text-box { 
            p {
                text-shadow: 2px 2px 4px #666666; 

                border-top: 15px white solid;  
                border-bottom: 15px white solid;  

                @media (min-width: 768px) { 
                    border: none;
                }
            }
        }
        
        .profile-img {
            @media (min-width: 768px) {
                min-height: 22rem;
            } 
        }    
    }
`;
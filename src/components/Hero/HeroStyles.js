import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
   width: 30%;
   display: flex;
   flex-direction: column;
   margin: 110px 50px 150px 100px;
   @media ${(props) => props.theme.breakpoints.sm} {
    width: 20%;
    display: none;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: none;
    flex-direction: column;

    margin: 0 auto;
  }
`;

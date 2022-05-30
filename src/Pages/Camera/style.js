import styled from "styled-components";
import img from "../../assets/note4.png";


const myRed1 = "#9C0024"

export const Button1 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 10px;
  right: 10px;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #9C0024;
  }
`;
export const Button2 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* top: 10px; */
  right: 10px;

  div {
    width: 20px;
    height: 20px;
    background: #006B79;
  }
`;
export const Button3 = styled.button`
  background-color: #393A32;
  width: 100px;
  height:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* top: 10px; */
  right: 10px;

  div {

    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid #2E2E2E;

  }
`;

export const Bar = styled.div`
  position: absolute;
  background-color: #484848;
  width: 150px;
  height:100vh;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 800px) {
    width: 100vw;
    height:150px;
    flex-direction: row;
  }
`
export const Bar2 = styled.div`
  position: absolute;
  background-color: #484848;
  width: 50px;
  height:100vh;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 800px) {
    width: 100vw;
    height:50px;
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: cen100r;
  /* justify-content: 100vw; */

  background-color: #484848;

 

  video{
    height: 100vh;
    
  }
  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
    video {
      /* width: 100vh; */
      z-index: -1;
      /* height: 400px; */
      width: 100%;

      
      /* transform: rotate(-0.25turn); */
    }
  }
  z-index: -2;
`;



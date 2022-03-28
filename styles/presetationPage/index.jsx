import styled from "styled-components";



export const Main = styled.main`


    
  // X-Small devices (portrait phones, less than 400px)
    font-family: 'Rock Salt', cursive;
    background-color: #F4F4F4;
    width: 100vw;
    height: 100vh;




   header{
       display: flex;
       justify-content: space-around;
       padding-top: 20px;
       .mainText{

          width: 40%;
          font-size: 20px;
          
            h5.orangeTitle{
              color: orange;
            }
          }}

          .notesDrawing{
            
            display: flex;
            align-items:center ;
            justify-content: space-around;


            .Drawin1{
              width: 200px;
              height: 250px;
              background-color: #A7E6FC;
              border-radius: 20px;
              transform: rotate(-10deg);
              left: 25px;
              position: absolute;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              bottom: 90px;

            }

            .Drawin2{
              background-color: #CFCCFD;
              width: 210px;
              height: 260px;
              border-radius: 20px;
              position: absolute;
              bottom: 95px;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              display: flex;
              justify-content: center;
              align-items: center;
                a{
                    display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                position: absolute;
                font-weight: bold;
                color: black;

              }
            }
            .Drawin3{
              width: 200px;
              height: 250px;
              background-color: #FAE688;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              position: absolute;
              right: 25px;
              border-radius: 28px;
              transform: rotate(10deg);
              bottom: 90px;
             

            }
          }
   
  

  // Small devices (landscape phones, less than 768px)
  @media (min-width: 401px) and (max-width: 767.98px) {
   
  }

  // Medium devices (tablets, less than 992px)
  @media (min-width: 768.98px) {
   
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (min-width: 1399.98px) {
   
  }










`


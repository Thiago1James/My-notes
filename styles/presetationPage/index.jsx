import styled from "styled-components";



export const Main = styled.main`


    
  // X-Small devices (portrait phones, less than 600px)
    font-family: 'Rock Salt', cursive;
    background-color: #F4F4F4;
    width: 100vw;
    height: 100vh;




   header{
       display: flex;
       padding-top: 20px;
       .mainText{

          width: 40%;
          font-size: 20px;
          position: absolute;
          left: 50px;
          
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
              position: fixed;
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
              position: fixed;
              right: 25px;
              border-radius: 28px;
              transform: rotate(10deg);
              bottom: 90px;
             

            }
          }
   
    // Medium devices (tablets, less than 901px)
    @media (min-width: 600.98px) and (max-width: 901.98px) {
   
      header{
     
     .mainText{

        width: 40%;
        font-size: 30px;
        position: absolute;
        left: 70px;
        
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
            left: 35px;
            position: absolute;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            bottom: 90px;

          }
          .Drawin5{
            background-color: pink;
            width: 210px;

            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            right: 230px;

             
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
            right: 35px;
            border-radius: 28px;
            transform: rotate(10deg);
            bottom: 90px;
           

          }
         

          .Drawin4{
            background-color: #d35ad3;
            width: 210px;
            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
                         left: 230px;

          }
        }
  }


    // X-Large devices (large desktops, less than 1000)

  @media (min-width: 902px) and (max-width:1000px) {
    
    header{
     
     .mainText{

        width: 40%;
        font-size: 30px;
        position: absolute;
        left: 70px;
        
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
            left: 150px;
            position: fixed;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            bottom: 90px;

          }
          .Drawin5{
            background-color: pink;
            width: 210px;
            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            right: 250px;
            transform: rotate(2deg);

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
            right:150px;
            border-radius: 28px;
            transform: rotate(10deg);
            bottom: 90px;
           

          }
         

          .Drawin4{
            background-color: #d35ad3;
            width: 210px;
            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            left:250px;
            transform: rotate(-2deg);

          }
        }
  }
    // X-Large devices (large desktops, less than 1400)
    @media (min-width: 1001px) and (max-width:1400px) {

  
      header{
     
     .mainText{

        width: 40%;
        font-size: 30px;
        position: absolute;
        left: 70px;
        
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
            left: 190px;
            position: fixed;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            bottom: 90px;

          }
          .Drawin5{
            background-color: pink;
            width: 210px;
            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            right: 360px;
            transform: rotate(2deg);

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
            right:190px;
            border-radius: 28px;
            transform: rotate(10deg);
            bottom: 90px;
           

          }
         

          .Drawin4{
            background-color: #d35ad3;
            width: 210px;
            height: 260px;
            border-radius: 20px;
            position: absolute;
            bottom: 95px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            left:360px;
            transform: rotate(-2deg);

          }
        }

    }


`


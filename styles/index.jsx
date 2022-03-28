import styled from "styled-components";

export const Body = styled.div`
  // X-Small devices (portrait phones, less than 400px)

  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  main {
    background-color: #fae688;

    .background {
      padding-top: 10px;
      .circle {
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 100%;
        margin-left: 20px;
      }

      .line {
        width: 100vw;
        background-color: white;
        height: 2px;
        margin-top: 10px;
      }
    }
    .container {
      width: 100vw;
      position: absolute;
      text-align: center;
      top: 20%;
      .title {
        font-family: "Tourney", cursive;
        font-size: 95px;
        font-weight: normal;
      }
    }

    .containerBtn {
      position: absolute;
      top: 70%;
      display: flex;
      flex-direction: column;

      text-align: center;
      align-items: center;
      width: 100vw;

      button {
        width: 250px;
        height: 50px;
        border-radius: 50px;
        cursor: pointer;
        
        color: ${({ theme }) => theme.CustomButton.blackBtn.color};
        background-color: ${({ theme }) =>
          theme.CustomButton.blackBtn.background};
        font-family: ${({ theme }) => theme.CustomButton.blackBtn.fontFamily};
        font-size: 20px;
      }
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (min-width: 401px) and (max-width: 767.98px) {
    main {
      .background {
        padding-top: 10px;
        .circle {
          width: 15px;
          height: 15px;
          background-color: white;
          border-radius: 100%;
          margin-left: 20px;
        }

        .line {
          width: 100vw;
          background-color: white;
          height: 3px;
          margin-top: 10px;
        }
      }
      .container {
        .title {
          font-size: 120px;
        }
      }

      .containerBtn {
        button {
          width: 300px;
          height: 60px;
          border-radius: 50px;
          font-size: 25px;
        }
      }
    }
  }

  // Medium devices (tablets, less than 992px)
  @media (min-width: 768.98px) {
    main {
      .background {
        padding-top: 10px;
        .circle {
          width: 15px;
          height: 15px;
          background-color: white;
          border-radius: 100%;
          margin-left: 20px;
        }

        .line {
          width: 100vw;
          background-color: white;
          height: 3px;
          margin-top: 10px;
        }
      }
      .container {
        .title {
          font-size: 120px;
        }
      }

      .containerBtn {
        button {
          width: 300px;
          height: 60px;
          border-radius: 50px;
          font-size: 25px;
        }
      }
    }
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (min-width: 1399.98px) {
    main {
      .background {
        padding-top: 10px;
        .circle {
          width: 15px;
          height: 15px;
          background-color: white;
          border-radius: 100%;
          margin-left: 20px;
        }

        .line {
          width: 100vw;
          background-color: white;
          height: 3px;
          margin-top: 10px;
        }
      }
      .container {
        .title {
          font-size: 120px;
        }
      }

      .containerBtn {
        button {
          width: 300px;
          height: 60px;
          border-radius: 50px;
          font-size: 25px;
        }
      }
    }
  }
`;

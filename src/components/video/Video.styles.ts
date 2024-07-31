import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 70px;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 0 64px;

  .decore_cel {
    position: absolute;
    top: 10%;
    left: auto;
    right: 25px;
  }

  .decore_botton_container {
    position: absolute;
    bottom: 2%;
    left: 15%;

    @media (max-width: 560px) {
      display: none;
    }
  }

  p {
    color: var(--slate-blue);
    text-align: center;
    font-size: 22px;
    font-weight: 400;

    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Video = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 276.106px;
  height: 514.236px;
  background: #eaf2f4;
  border-radius: 60px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: #dfd7f9;

  .top_cel {
    position: absolute;
    top: 10px;
    z-index: 5;
  }

  .bg_black {
    position: absolute;
    z-index: 0;
    height: 500px;
  }

  .bg_white {
    position: absolute;
    z-index: 1;
    height: 481px;
  }

  video {
    width: 246.933px;
    border-radius: 25px;
    overflow: hidden;
    z-index: 2;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 0;
    width: 100%;
  }

  .config {
    position: absolute;
    top: calc(3% + 4px);
    right: 12%;
    z-index: 4;
  }

  .hour {
    position: absolute;
    top: calc(3% + 4px);
    left: 17%;
    z-index: 5;
  }

  span button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
  }

  span button:active {
    transform: scale(0.9);
  }

  span button:hover {
    opacity: 0.9;
  }

  span .pause {
    opacity: 0;
  }

  span video:hover {
    .pauseButton {
      opacity: 1;
    }
  }
`;

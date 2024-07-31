import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  overflow-x: hidden;

  .container_bg {
    position: absolute;
    top: 0;
    left: -83px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .container_bg2 {
    position: absolute;
    right: 0px;
    bottom: 65%;

    @media (max-width: 1101px) {
      display: none;
    }

    img {
      position: absolute;
      right: -100px;
      top: 0;
    }
  }

  .container_bg3 {
    position: absolute;
    left: -194px;
    bottom: 50%;

    @media (max-width: 1101px) {
      display: none;
    }
  }
`;

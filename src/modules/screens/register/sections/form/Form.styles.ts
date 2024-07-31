import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 1000px;

  .first_child_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 100%;
    height: 100%;
  }

  .bar {
    background-color: white;
    height: 95px;
    width: 100%;
    position: absolute;
    bottom: -20px;
  }

  .page_content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 80px;

    @media (max-width: 1101px) {
      flex-direction: column;
    }

    @media (max-width: 560px) {
      flex-direction: column;
    }
  }
  .container_bg {
    position: absolute;
    width: 100%;
    height: auto;

    .bg_form {
      position: absolute;
      width: 100%;
      right: 0;
    }
    @media (max-width: 1789px) {
      width: 1789px;
    }

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .container_detail {
    position: absolute;
    right: -70px;
    top: -70px;
    @media (max-width: 1101px) {
      display: none;
    }
  }

  .inner_typography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 484px;
    height: 100%;

    @media (max-width: 560px) {
      padding: 0 20px;
      align-items: center;
    }
  }

  .inner_typography .paragraph {
    display: flex;
    flex-direction: column;
    gap: 10x;
    height: 100%;
  }

  .inner_typography h2 {
    color: var(--dark-sapphire);
    font-size: 42px;
    font-weight: 700;

    @media (max-width: 1101px) {
      font-size: 38px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 34px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
      margin-bottom: 40px;
    }
  }

  .spacer40 {
    height: 40px;
  }

  .inner_typography h2 span {
    background-color: #9974ff;
    color: #fff;
    display: inline;
  }

  .inner_typography .paragraph p {
    color: var(--dark-sapphire);
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;

    @media (max-width: 1101px) {
      font-size: 16;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      width: 100%;
      font-weight: 400;
      line-height: 140%;
    }
  }

  .container_earth {
    position: absolute;
    max-width: 680px;
    height: 666px;
    bottom: -200px;
    left: 0;
    .earth {
      width: 680px;
    }

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .container_build {
    width: 700px;
    height: 290px;
    position: absolute;
    bottom: 25px;
    right: 0px;

    img {
      width: 700px;
    }
    @media (max-width: 1101px) {
      display: none;
    }
  }

  .container_earth_mobile {
    display: none;

    @media (max-width: 560px) {
      display: block;
      margin-top: 100px;
      height: 350px;
    }

    .earth_mobile {
      position: absolute;
      left: -150px;
      width: 500px;
    }
  }
`;

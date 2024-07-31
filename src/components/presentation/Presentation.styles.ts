import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 0;

  .bg_Presentation {
    position: absolute;
    top: -70px;
    left: 0;
    outline: none !important;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .span_video {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 100px 0;
  animation: ${openAnimation} 0.5s ease;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 0;
  }

  .titile_visible {
    color: var(--dark-charcoal);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 30px;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      color: var(--dark-sapphire);
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
    }
  }
`;

export const Last = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 60px;
  z-index: 1;

  @media (max-width: 560px) {
    gap: 32px;
  }

  .carrousel_container {
    display: flex;
    flex-direction: column;
    gap: 34px;

    @media (max-width: 1101px) {
      align-items: center;
    }
  }

  .carrousel_container h2 {
    @media (max-width: 560px) {
      text-align: center;
    }
  }

  .carrousel {
    display: flex;
    align-items: center;
    position: relative;
  }

  .btn_left {
    left: -50px;
  }

  .carrousel_inner {
    display: flex;
    gap: 22px;
    max-width: 510px;
    overflow: hidden;
    padding: 1rem;

    @media (max-width: 560px) {
      max-width: 310px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    max-width: 148px;
    border-radius: 12px;
  }

  .selected {
    /* box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2); */
  }

  .card .inner {
    display: flex;
    align-items: center;
    width: 148px;
    height: 120px;
    border-radius: 12px 12px 0px 0px;
    background: linear-gradient(61deg, #724dc2 7.83%, #8358f4 95.41%);

    @media (max-width: 560px) {
      width: 112px;
      height: 72px;
    }
  }

  .card .inner img {
    max-width: 70px;

    @media (max-width: 560px) {
      max-width: 40px;
    }
  }

  .outer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148px;
    height: 90px;
    border-radius: 0px 0px 12px 12px;
    background: #f9f9f9;

    @media (max-width: 560px) {
      width: 112px;
      height: 62px;
    }
  }

  .outer p {
    text-align: center;
    color: #3f3d56;
    max-width: 122px;

    @media (max-width: 560px) {
      font-weight: 500;
      font-size: 12px;
      max-width: 60px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 437px;
  padding: 40px 57px 45px;
  border-radius: 40px 0px 0px 40px;
  background: #f9f9f9;

  @media (max-width: 1101px) {
    border-radius: 40px;
  }

  @media (max-width: 560px) {
    align-items: center;
    gap: 50px;
    height: auto;
    background: #fff;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  height: 100%;

  h2 {
    color: var(--purple);
    font-size: 42px;
    font-weight: 700;

    @media (max-width: 1101px) {
      font-size: 36px;
    }

    @media (max-width: 991px) {
      font-size: 28px;
    }

    @media (max-width: 560px) {
      color: var(--dark-sapphire);
      font-size: 18px;
      text-align: center;
    }
  }

  .first_child p {
    color: var(--purple);
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    text-align: start;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      display: none;
    }
  }

  .paragraph {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;
    max-width: 564px;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      text-align: center;
    }
  }
`;

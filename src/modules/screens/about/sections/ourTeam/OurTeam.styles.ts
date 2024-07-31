// Assets
import rectangle from 'assets/images/about/ourTeam/rectangle.svg';

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 68px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 10px calc(5vw);

  @media (max-width: 1101px) {
    gap: 46px;
    padding: 10px 24px;
    margin-top: 60px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h2 {
    color: var(--dark-sapphire);
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
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
      max-width: 236px;
    }
  }

  p {
    color: var(--slate-blue);
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
      letter-spacing: normal;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 80px 50px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1040px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .border_radius {
    border-radius: 100%;
    overflow: hidden;
    max-width: 244.19px;
    max-height: 244.19px;
  }

  img {
    @media (max-width: 991px) {
      width: 160px;
      height: 160px;
    }

    @media (max-width: 560px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Item_Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 208.421px;
  height: 55.029px;
  top: auto;
  bottom: -22px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${rectangle.src});

  @media (max-width: 560px) {
    width: 80px;
    height: 21.067px;
    top: auto;
    bottom: 0px;
  }

  p,
  strong {
    color: var(--slate-blue);
    font-size: 14px;
    line-height: normal;
    text-align: center;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 12px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 10px;
    }

    @media (max-width: 560px) {
      font-size: 6px;
      letter-spacing: normal;
    }
  }
`;

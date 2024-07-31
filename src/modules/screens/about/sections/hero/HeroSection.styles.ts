import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 165px;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  padding: 10px calc(5vw);

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    padding: 60px 24px;
    margin-top: 0;
  }

  .bg_hero {
    position: absolute;
    top: -200px;
    left: 0;
    outline: none !important;

    @media (max-width: 1101px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  z-index: 1;
  width: 100%;
  max-width: 519px;

  @media (max-width: 560px) {
    max-width: 280px;
  }

  p {
    display: flex;
    flex-direction: column;
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
      letter-spacing: normal;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Figure = styled.div`
  position: relative;
  .ilustra {
    width: 484.496px;

    @media (max-width: 560px) {
      width: 166.284px;
    }
  }

  .technology,
  .community,
  .love {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    position: absolute;
    max-width: 181px;
    max-height: 53px;
    padding: 12px 18px;
    z-index: 1;

    background: var(--white);
    border-radius: 12px;

    img {
      max-width: 24px;
    }

    @media (max-width: 560px) {
      img {
        max-width: 9px;
        height: auto;
      }
    }
  }

  .technology,
  .community,
  .love p {
    color: var(--purple);
    font-size: 16px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 14px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 12px;
      letter-spacing: normal;
    }

    @media (max-width: 560px) {
      font-size: 6px;
    }
  }

  .technology {
    width: 175px;
    top: 121px;
    left: -84px;
    right: auto;

    @media (max-width: 560px) {
      width: fit-content;
      height: auto;

      top: 50px;
      left: -22px;

      gap: 2px;
      padding: 2px 6px;
      border-radius: 3px;
    }
  }

  .community {
    width: 181px;
    top: 175px;
    right: -110px;
    left: auto;

    @media (max-width: 560px) {
      width: fit-content;
      height: auto;

      top: 60px;
      right: -40px;

      gap: 2px;
      padding: 4px 6px;
      border-radius: 5px;
    }
  }

  .love {
    width: 130px;
    right: auto;
    top: 370px;
    left: -32px;

    @media (max-width: 560px) {
      width: fit-content;
      height: auto;

      top: 130px;
      left: -5px;

      img {
        max-width: 9px;
        height: auto;
      }

      gap: 2px;
      padding: 2px 6px;
      border-radius: 3px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;

  p {
    color: var(--purple);
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    text-transform: uppercase;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
      letter-spacing: normal;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;

    @media (max-width: 1101px) {
      font-size: 40px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 32px;
    }

    @media (max-width: 560px) {
      font-size: 24px;
    }
  }
`;

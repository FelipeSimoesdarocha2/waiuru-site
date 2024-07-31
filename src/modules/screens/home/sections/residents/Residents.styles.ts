import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 100%;
  padding: 60px 24px;
  overflow: hidden;

  @media (max-width: 1101px) {
    gap: 50px;
  }

  @media (max-width: 560px) {
    gap: 28px;
    padding: 60px 0px;
  }

  @media (max-width: 560px) {
  }

  .last_child {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: 1101px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 560px) {
      gap: 50px;
    }
  }

  .last_child .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    @media (max-width: 1101px) {
      align-items: center;
    }

    @media (max-width: 560px) {
      gap: 50px;
    }
  }

  .last_child .content .content_hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    max-width: 565px;
    padding-top: 60px;

    @media (max-width: 1101px) {
      padding-top: 0;
      align-items: center;
      gap: 50px;
    }

    @media (max-width: 560px) {
      flex-direction: column-reverse;
    }
  }

  .last_child .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;

    @media (max-width: 1101px) {
      gap: 14px;
    }
  }

  .last_child .content .inner .item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .last_child .content .inner .item p {
    color: var(--slate-blue);
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;

    @media (max-width: 560px) {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .last_child .content .inner .item img {
    @media (max-width: 560px) {
      width: 20px;
    }
  }

  .download {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 1101px) {
      align-items: center;
      gap: 22px;
    }

    @media (max-width: 560px) {
      flex-direction: column-reverse;
      gap: 16px;
    }
  }

  .download p {
    color: var(--dark-sapphire);
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    text-align: start;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 160%;
    }
  }

  .download .link {
    display: flex;
    gap: 11px;
  }

  .download .link a img {
    width: 48px;

    @media (max-width: 560px) {
      width: 32px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  max-width: 913px;

  @media (max-width: 991px) {
    max-width: 571px;
    gap: 40px;
  }

  @media (max-width: 560px) {
    gap: 28px;
    max-width: 236px;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
    }
  }

  p {
    color: var(--blue-gray);
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Lottie = styled.div`
  width: 100%;
  max-width: 600px;

  .lottie_mobile {
    display: none;
  }

  @media (max-width: 560px) {
    max-width: 400px;

    .lottie_mobile {
      display: block;
    }

    .lottie {
      display: none;
    }
  }
`;

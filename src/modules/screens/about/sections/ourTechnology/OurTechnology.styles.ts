import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  width: 100%;
  height: 100%;
  margin-top: 150px;
  overflow: hidden;

  @media (max-width: 1101px) {
    gap: 50px;
    margin-top: 100px;
  }

  @media (max-width: 560px) {
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fbfbfc;
  padding: 90px 0;

  @media (max-width: 1101px) {
    padding: 0;
  }

  @media (max-width: 560px) {
    background-color: var(--white);
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 1101px) {
    padding: 10px 24px;
  }

  @media (max-width: 560px) {
    gap: 50px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1020px;
  gap: 100px;
  border-left: 5px solid var(--purple);

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
    border-left: inherit;
  }

  img {
    max-width: 225px;
    max-height: 110px;
    object-fit: contain;
    border-radius: 10px;
  }

  .typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 360px;
    height: 220px;
    padding: 10px;

    @media (max-width: 991px) {
      height: auto;
    }
  }

  h3 {
    color: var(--dark-sapphire);
    font-size: 28px;
    font-weight: 600;
    line-height: 140%;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 28px;
    }

    @media (max-width: 991px) {
      font-size: 20px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 18px;
    color: var(--grayish-charcoal);
    line-height: 140%;
    max-width: 514px;

    @media (max-width: 1101px) {
      text-align: center;
      font-size: 16px;
    }

    @media (max-width: 560px) {
      color: var(--black);
      font-size: 14px;
      line-height: 140%;
    }
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
    }
  }

  p {
    color: var(--slate-blue);
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;
    max-width: 910px;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }
  }
`;

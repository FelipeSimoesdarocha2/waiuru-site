import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 140px;
  min-height: 600px;
  max-width: 1440px;
  gap: 50px;
  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
  }
  @media (max-width: 991px) {
    padding: 0 24px;
  }

  @media (max-width: 560px) {
    padding: 0 24px;
  }

  .bg_news {
    height: auto;
    width: 100%;
  }

  .first_child {
    width: 100%;
  }

  .first_child .typography h2 {
    color: var(--dark-sapphire);
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
    text-align: start;

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
  .first_child .typography p {
    p {
      color: var(--black-primary);
      font-family: Quicksand;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 33px;
    }
  }

  .first_child .ilustra {
    @media (max-width: 560px) {
      display: none;
    }
  }

  .body_content {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h3 {
      line-height: 34px;
    }
  }

  .other {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .other_innner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 20px;
  }

  .other_innner li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .other_innner span {
    display: list-item;
    list-style: disc;
    margin-left: 20px;
  }
`;

export const Spacer20 = styled.div`
  width: 20px;
  height: 20px;
`;

export const Spacer40 = styled.div`
  width: 40px;
  height: 40px;
`;

export const Spacer60 = styled.div`
  width: 60px;
  height: 60px;
`;

export const ContainerShare = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
  p {
    color: var(--slate-blue);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

export const ContainerShareItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
`;

export const ContainerSeeMore = styled.div`
  width: 350px;

  @media (max-width: 1101px) {
    width: 100%;
  }
`;

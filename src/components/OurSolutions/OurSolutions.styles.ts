import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 67px;

  width: 100%;
  height: 100%;
  max-width: 1160px;
  padding: 60px 0;

  @media (max-width: 1101px) {
    gap: 50px;
  }

  @media (max-width: 560px) {
    padding: 60px 0px 60px 0px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;

  @media (max-width: 560px) {
    max-width: 236px;
  }

  h2 {
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

  p {
    color: var(--slate-blue);
    font-size: 18px;
    font-weight: 500;
    line-height: 170%;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 1101px) {
    gap: 50px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  @media (max-width: 560px) {
    min-height: 50px;
  }
  img {
    @media (max-width: 560px) {
      max-height: 158px;
    }
  }

  @media (max-width: 560px) {
    gap: 30px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 350px;
  min-height: 200px;
  @media (max-width: 560px) {
    min-height: 50px;
    max-height: 158px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;

  button {
    margin-top: auto;
  }

  @media (max-width: 560px) {
    gap: 18px;
  }

  .typography button {
    @media (max-width: 560px) {
      max-width: 150px;
    }
  }
`;

export const Paragraph = styled.div`
  color: var(--slate-blue);
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 210px;
  height: 54px;

  @media (max-width: 1101px) {
    /* font-size: 14px; */
    text-align: center;
  }

  @media (max-width: 991px) {
    /* font-size: 12px; */
  }

  @media (max-width: 560px) {
    /* font-size: 12px; */
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 64px 24px 10px;

  @media (max-width: 560px) {
    padding: 20px 20px 10px;
    gap: 50px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (max-width: 560px) {
    gap: 0;
    max-width: 236px;
  }

  h2 {
    color: var(--dark-charcoal);
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
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;
    text-align: center;

    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1160px;
  padding: 90px 100px 60px;
  box-sizing: border-box;
  border-radius: var(--radius-midle);
  background-color: var(--purple);

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 34px;
  }

  @media (max-width: 1101px) {
    padding: 50px 40px;
  }

  @media (max-width: 560px) {
    padding: 28px 22px;
  }
`;

export const Content_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 560px) {
    gap: 34px;
  }
`;

export const Content_Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 29px;

  @media (max-width: 1101px) {
    align-items: center;
  }

  @media (max-width: 560px) {
    align-items: center;
    max-width: 300px;
  }

  h2 {
    color: var(--white);
    font-size: 40px;
    font-weight: 600;
    max-width: 444px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .divider {
    @media (max-width: 560px) {
      width: 20px;
    }
  }

  p {
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export const Content_Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;

  @media (max-width: 1101px) {
    justify-content: center;
  }

  img {
    @media (max-width: 560px) {
      max-width: 32px;
    }
  }
`;

export const Form_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 443px;
  padding: 10px 50px;
  border-radius: var(--radius-midle);
  background: var(--gray-lilac);

  @media (max-width: 1101px) {
    padding: 10px;
  }

  @media (max-width: 560px) {
    padding: 40px 24px;
    border-radius: 8px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  padding: 77px 0;

  @media (max-width: 1101px) {
    gap: 0;
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 560px) {
    gap: 24px;
    margin-bottom: 0;
  }

  .fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;
    width: 100%;
    height: 100%;

    @media (max-width: 1101px) {
      padding-top: 0;
      padding: 40px 24px;
    }

    @media (max-width: 991px) {
      padding: 20px 24px;
    }

    @media (max-width: 560px) {
      gap: 28px;
      padding: 0;
    }
  }

  .actions {
    width: 100%;

    @media (max-width: 1101px) {
      padding: 0 24px;
    }

    @media (max-width: 560px) {
      padding: 0;
    }
  }

  .actions button {
    width: 100%;
  }
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 100%;
  height: 100%;
  padding: 32px 0;

  @media (max-width: 560px) {
    gap: 24px;
    padding: 0 24px;
  }

  .submit_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 59px;
    height: 100%;

    @media (max-width: 560px) {
      gap: 24px;
    }
  }

  .submit_typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    height: 100%;

    @media (max-width: 560px) {
      gap: 14px;
    }
  }

  .submit_typography h2 {
    color: var(--black-primary);
    font-size: 26px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 16px;
      letter-spacing: normal;
    }
  }

  .submit_typography p {
    color: var(--black-primary);
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 12px;
      line-height: 140%;
    }
  }
`;

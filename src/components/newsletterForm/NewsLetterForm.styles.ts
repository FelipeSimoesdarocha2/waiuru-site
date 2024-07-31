import styled from 'styled-components';

export const Component = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  padding: 100px 24px 60px 24px;
  z-index: 1;

  @media (max-width: 1101px) {
    gap: 40px;
    max-width: 714px;
    padding: 50px 40px;
    border-radius: 20px;
    margin-top: 60px;
    background: #f1eff6;
    border-radius: 0;
  }

  @media (max-width: 560px) {
    background: var(--white);
    margin-top: 0;
  }

  .typography_mobile {
    display: none;
    flex-direction: column;

    @media (max-width: 1101px) {
      display: flex;
      gap: 40px;
    }

    @media (max-width: 560px) {
      gap: 28px;
      max-width: 272px;
    }
  }

  .typography_mobile h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 560px) {
      font-weight: 700;
      font-size: 24px;
    }
  }

  .typography_mobile p {
    color: var(--slate-blue);
    font-size: 26px;
    font-weight: 600;
    line-height: 45px;
    text-align: center;
    max-width: 634px;

    @media (max-width: 560px) {
      font-weight: 400;
      font-size: 14px;
      line-height: normal;
      max-width: 242px;
    }
  }
`;

export const Content = styled.div`
  .decore {
    position: absolute;
    top: -20px;
    right: -20px;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .decore_mobile {
    display: none;
    position: absolute;
    top: -10px;
    right: -10px;

    @media (max-width: 991px) {
      display: flex;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 31px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1162px;
  max-height: 407px;
  padding: 102px 0 28px;

  background: var(--delicate-lilac);
  border-radius: 129px 20px 20px 20px;

  @media (max-width: 1101px) {
    padding: 0;
    background: none;
    gap: 0;
    border-radius: 0;
  }

  .container_detail {
    position: absolute;
    top: -150px;
    left: -150px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .message {
    color: var(--grayish-charcoal);
    font-size: 16px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: -0.3px;
    text-align: center;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .newsletter_inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
    width: 100%;

    @media (max-width: 560px) {
      width: 80%;
    }
  }

  .newsletter_inner h2 {
    color: var(--slate-blue);
    font-size: 26px;
    font-weight: 600;
    line-height: 45px;
    text-align: center;
    max-width: 888px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .newsletter_form {
    display: flex;
    justify-content: center;
    gap: 27px;
    position: relative;
    width: 100%;

    .container_input {
      max-width: 421px;
      width: 100%;
    }

    @media (max-width: 1101px) {
      align-items: center;
      flex-direction: column;
      gap: 40px;
      width: 100%;
      max-width: 421px;
      border-radius: 8px;

      button {
        width: 100%;

        @media (max-width: 1101px) {
          max-width: 147px;
        }
      }
    }

    @media (max-width: 560px) {
      background: var(--gray-lilac);

      width: 230px;
      padding: 40px 24px;
      gap: 24px;
    }
  }
`;

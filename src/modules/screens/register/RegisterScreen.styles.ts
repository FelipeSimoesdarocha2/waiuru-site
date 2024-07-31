import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  overflow-x: hidden;
  .bg_hero {
    position: absolute;
    top: -40px;
    left: 0;
    width: 42em;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .form {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 559px;
    padding: 10px 50px;

    border-radius: 20px;
    background: var(--gray-lilac);
    z-index: 1;

    @media (max-width: 1101px) {
      margin-top: 64px;
      width: auto;
    }

    @media (max-width: 560px) {
      width: 100%;
      margin: 32px 24px;
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    width: 100%;
    height: 100%;

    padding: 32px 0;

    @media (max-width: 560px) {
      gap: 24px;
    }
  }

  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    width: 100%;

    @media (max-width: 560px) {
      gap: 28px;
    }
  }

  .inner {
    width: 100%;
    height: 100%;

    > div {
      min-width: 100%;
    }
  }

  .more_values {
    display: flex;
    gap: 32px;

    > div {
      width: 100%;
      min-width: inherit;
    }
  }

  .actions {
    width: 100%;
    height: 100%;
  }

  .actions button {
    width: 100%;
  }

  .submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 350px;

    width: 100%;
    height: 100%;

    padding: 32px 0;

    @media (max-width: 560px) {
      gap: 24px;
      padding: 0;
    }
  }

  .submit_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 59px;

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

    @media (max-width: 1101px) {
      font-size: 22px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

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

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
      line-height: 140%;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      letter-spacing: normal;
    }
  }

  .last_child_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 83px;

    position: relative;
    width: 100%;
    height: 100%;
  }

  .figure_rg {
    position: relative;
    width: 100%;
  }
`;

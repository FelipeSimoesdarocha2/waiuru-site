import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  width: 100%;
  height: auto;
  background-color: var(--purple);

  .content {
    display: flex;
    align-items: start;
    justify-content: normal;
    gap: 78px;
    position: relative;
    width: 100%;
    height: auto;
    padding: 62px calc(6vw) 47px;
    max-width: 1440px;

    background-color: var(--purple);

    & > div:nth-child(1) {
      display: flex;
      align-items: start;
      justify-content: normal;
      gap: 30px;
    }

    .about_section {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: normal;
      gap: 25px;

      width: 100%;
      height: 100%;
    }

    .solutions_section {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: normal;
      gap: 20px;

      width: 100%;
      height: 100%;
    }

    a,
    h3 {
      color: var(--white);
      line-height: 150%;
      text-align: start;
      white-space: nowrap;
      width: 100%;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
    }

    a {
      font-size: 16px;
      font-weight: 500;
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: start;
      justify-content: normal;
      gap: 80px;
    }

    .social_media_section {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: normal;
      gap: 28px;
    }

    .download a,
    .social_media_section a {
      display: contents;
    }

    .social_media_section > div {
      display: flex;
      align-items: start;
      justify-content: normal;
      gap: 22px;
      flex-wrap: wrap;

      width: 233px;
    }

    .download {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: normal;
      gap: 26px;

      width: 100%;
    }

    .download > div {
      display: flex;
      align-items: start;
      justify-content: normal;
      gap: 20px;
      width: 100%;
    }

    .download img {
      width: 40px;
    }

    @media (max-width: 1100px) {
      flex-direction: column;
      align-items: center;
      gap: 50px;
      padding: 60px 24px;

      a {
        line-height: normal;
        text-align: center;
      }

      h3 {
        font-weight: 700;
        line-height: normal;
        text-align: center;
      }

      & > div:nth-child(1) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }

      .about_section,
      .solutions_section {
        align-items: center;
      }

      & > div:nth-child(2) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }

      .social_media_section > div {
        justify-content: center;
      }

      .download > div {
        justify-content: center;
      }
    }
  }

  .bg_footer {
    position: absolute;
    bottom: 0;
    right: 20%;
    outline: none !important;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .copyright_section {
    display: flex;
    align-items: start;
    justify-content: normal;
    gap: 1rem;
    width: 100%;
    padding: 30px 55px;
    background-color: var(--white);

    @media (max-width: 1100px) {
      padding: 20px 4vw;
    }
  }

  .copyright_section a,
  p {
    color: var(--blue-gray);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 991px) {
      font-size: 12px;
    }
  }
`;

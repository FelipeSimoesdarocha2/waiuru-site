import styled from 'styled-components';

export const Component = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;
  background: rgba(232, 75, 35, 0.05);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 560px) {
    gap: 13px;
    padding: 8px 0px;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    padding: 10px;
  }

  button img {
    @media (max-width: 560px) {
      width: 16px;
      height: 16px;
    }
  }

  &.error {
    display: flex;
    color: #e84b23;
  }

  &.warn {
    display: flex;
    color: yellow;
  }

  &.success {
    display: flex;
    color: green;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 560px) {
    gap: 13px;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 10px 0 10px 10px;
  }

  figure img {
    @media (max-width: 560px) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Title = styled.p`
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: normal;
  text-align: start;
  max-width: 209px;

  @media (max-width: 560px) {
    font-size: 10px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

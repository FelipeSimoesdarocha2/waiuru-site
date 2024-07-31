import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: var(--black);
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }

  .stop {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    .stop {
      visibility: visible;
      opacity: 1;
    }
  }

  span :active {
    transform: scale(0.96);
  }
`;

export const Video = styled.video`
  max-width: 532px;

  @media (max-width: 991px) {
    max-width: 272px;
  }
`;

export const BG = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: #000;
`;

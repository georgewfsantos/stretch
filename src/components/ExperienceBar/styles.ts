import styled from "styled-components";

export const Container = styled.div`
  .bar-content {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      font-size: 1rem;
    }

    .gray-line {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: var(--gray-line);
      margin: 0 1.5rem;
      position: relative;
      border-radius: 4px;

      .progress {
        width: 50%;
        background: var(--green);
        height: 4px;
        border-radius: 4px;
      }

      .experience-level {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
      }
    }
  }
`;

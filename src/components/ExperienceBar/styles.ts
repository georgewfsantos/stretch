import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .bar-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2.5rem 2rem;

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
        left: 50%;
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
      }
    }
  }
`;

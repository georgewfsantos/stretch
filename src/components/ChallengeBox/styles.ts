import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  border: 1px solid var(--title);
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  .instruction {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    > p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;

      img {
        margin-bottom: 1rem;
      }
    }
  }

  .active-challenge {
    height: 100%;

    display: flex;
    flex-direction: column;

    header {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid var(--gray-line);

      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > strong {
        font-weight: 600;
        font-size: 2rem;
        color: var(--title);
        margin: 1.5rem 0 1rem;
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      button {
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;
        transition: background-color 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      .fail-button {
        background: var(--red);
      }

      .success-button {
        background: var(--green);
        color: black;
      }
    }
  }
`;

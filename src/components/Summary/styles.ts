import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -10rem;
  gap: 2rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 2rem;
      font-size: 2rem;
      line-height: 2rem;
      justify-content: space-around;
      display: block;
    }

    svg {
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;
    }

    &.highlight-background {
      background: orange;
      color: #fff;
    }
  }
  

`
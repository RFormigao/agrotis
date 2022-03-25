import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 1rem;
  background: var(--green);
  color: #ffffff;

  h1 {
    font-size: 1.25rem;
  }

  button {
    background: var(--green);
    color: #ffffff;

    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    border: none;
    outline: none;
    padding: 0.6875rem 1rem;

    transition: opacity 0.2s;

    &:hover {
      opacity: .6;
    }
  }
`

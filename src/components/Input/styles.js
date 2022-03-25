import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  > div {
    width: 100%;
  }

  > small {
    display: block;
    position: absolute;
    margin-top: 0.2rem;
    right: 0;
    font-size: 0.75rem;
    color: #828D8C;
  }

  .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before,
  .css-5xn5lu-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before{
    border-bottom: 2px solid var(--green);
  }
`

export const Error = styled.small`
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  > span {
    margin-left: 5px;
  }
`
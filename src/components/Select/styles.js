import styled from 'styled-components'
import  FormControlMaterial from '@mui/material/FormControl';

export const FormControl = styled(FormControlMaterial) `
  .MuiInputBase-input small {
    display: none;
  }

  .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--green);
  }
`

export const Subtitle = styled.small`
  display: block;
  color: var(--grey-medium-light);
  font-size: 0.75rem;
`

export const Error = styled.small`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #d32f2f;
  margin-top: 0.2rem;

  > span {
    margin-left: 5px;
  }
`
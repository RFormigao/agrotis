import styled from 'styled-components'
import TextFieldMaterial from '@mui/material/TextField';


export const TextField = styled(TextFieldMaterial) `
  .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
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
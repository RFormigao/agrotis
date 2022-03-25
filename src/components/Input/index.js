import { useState } from 'react'
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import ErrorIcon from '@mui/icons-material/Error';
import { Controller } from "react-hook-form";

import { Container, Error } from './styles'

export function Input ({
  required,
  id,
  label,
  helperText,
  multiline,
  rows,
  error,
  maxLength,
  control,
  name,
  value,
  ...rest
}) {

  const [qtCharacters, setQtCharacters ] = useState(0)

  const handleChange = (e, onChangeFunc ) => {
    const {value }= e.target
    onChangeFunc(value)
    if(maxLength) setQtCharacters(value.length)
  }

  const renderHelperText = () => (
    <Error>
      <ErrorIcon fontSize="small"/>
      <span>{helperText}</span>
    </Error>
  )

  return (
    <Container>
       <Controller
          {...rest}
          rules={{ required}}
          render={({field}) =>  (
            <TextField 
              id={id}
              label={`${label} ${required ? '*' : ''}`}
              helperText={error ? renderHelperText() : null}
              multiline={multiline}
              rows={rows}
              error={error}
              inputProps={{ maxLength: maxLength}}
              variant="standard"
              {...field}
              onChange={(e) => handleChange(e, field.onChange)}
            />
          )}
          name={name}
          control={control}
        />
      {maxLength ? <small>{qtCharacters}/{maxLength}</small> : null}
    </Container>
  )
}

Input.propTypes = {
  maxLength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.number,
  multiline:PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  control: PropTypes.object,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  required: true,
  error: false,
  helperText: '',
  control: {},
  id: '',
  maxLength: null,
  name: '',
  value: '',
  rows: null,
  multiline: false,
  onChange: () => {},
};
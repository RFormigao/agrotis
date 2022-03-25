import { useState } from 'react'
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";

import MaterialSelect from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ErrorIcon from '@mui/icons-material/Error';

import { Subtitle, FormControl, Error } from './styles'
export function Select ({
  required,
  id,
  label,
  name,
  helperText,
  options,
  error,
  value,
  control
}) {

  const [internalValue, setInternalValue] = useState(value || '');

  const renderHelperText = () => (
    <Error>
      <ErrorIcon fontSize="small"/>
      <span>{helperText}</span>
    </Error>
  )

  return (
    <>
      <FormControl 
        variant="standard"
        error={error}
      >
        <InputLabel id={label}>{`${label} ${required ? '*' : ''}`}</InputLabel>
        <Controller
          rules={{ required }}
          render={({ field }) => (
            <MaterialSelect
              labelId={label}
              id={id}
              value={internalValue}
              name={name}
              onChange={(e) => setInternalValue(e.target.value)}
              label={label}
              {...field}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
    
              {options.length && options.map(option => (
                <MenuItem 
                  key={option?.id} 
                  className="select-option-container"
                  value={option?.id}
                >
                  {option?.name}
                  {option.subtitle ? (<Subtitle>{option.subtitle}</Subtitle>) : null}
                </MenuItem>
              ))}
            </MaterialSelect>
            )}
            name={name}
            control={control}
          />
          {error ? renderHelperText() : null}
      </FormControl>
    </>
  )
}

Select.propTypes = {
  helperText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOf(['string', 'number']),
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  control: PropTypes.object,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  helperText: '',
  options: [{}],
  handleChange: () => {},
  value: '',
  id: null,
  name: '',
  label: '',
  required: false,
  control: {},
  error: false,
  onChange: () => {},
};

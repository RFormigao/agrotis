import { useState } from 'react'
import { Controller } from "react-hook-form";
import ptLocale from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ErrorIcon from '@mui/icons-material/Error';

import { TextField, Error } from './styles'

export function Datepicker({
  id,
  name,
  label,
  minDate,
  required,
  control,
  error,
  helperText,
  onChange
}) {

  const [internalValue, setInternalValue] = useState(null);

  const handleChange = (newValue, onChangeFunc) => {
    setInternalValue(newValue)
    onChange(newValue);
    onChangeFunc(newValue)
  }

  const renderHelperText = () => (
    <Error>
      <ErrorIcon fontSize="small"/>
      <span>{helperText}</span>
    </Error>
  )
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
         <Controller
            name={name}
            control={control}
            rules={{ required }}
            render={({ field: { ref,  ...rest } }) =>(
              <DatePicker
                id={id}
                label={`${label} ${required ? '*' : ''}`}
                minDate={ minDate || new Date()}
                value={internalValue}
                onChange={(newValue) => handleChange(newValue, rest.onChange )}
                renderInput={
                  (params) => (
                  <TextField 
                    variant="standard" 
                    helperText={error ? renderHelperText() : null}
                    {...params}
                    error={error}
                  />
                )}
              />
            )}
          />

     
    </LocalizationProvider>
  );
}

Datepicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.bool,
  helperText: PropTypes.string,
  control: PropTypes.object,
  onChange: PropTypes.func,
};

Datepicker.defaultProps = {
  label: '',
  required: true,
  minDate: null,
  error: false,
  helperText: '',
  control: {},
  onChange: () => {},
};


import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { formatRFC3339 } from 'date-fns'
import Alert from '@mui/material/Alert'

import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Datepicker } from '../../components/Datepicker'

import { api } from '../../services/api'

import { Container, Content } from './styles'

export function Main () {

  const defaultValues = {
    nome: '',
    dataInicial: null,
    dataFinal: null,
    infosPropriedade: '',
    laboratorio: '',
    observacoes: '',
   };

  const { handleSubmit, formState: { errors }, control } = useForm({ defaultValues });

  const [minDateFinal, setMinDateFinal] = useState(null)
  const [properties, setProperties] = useState([])
  const [laboratories, setLaboratories] = useState([])

  const [ui, setUi] = useState({
    isErrorAlertVisible: false,
    isSuccessAlertVisible: false
  })

  const onError = () => {
    setUi({ isSuccessAlertVisible: false, isErrorAlertVisible: true })
  }

  const onSubmit = (data) => {
    const [property] = properties.filter(prop => Number(prop.id) === Number(data.infosPropriedade))
    const [lab] = laboratories.filter(prop => Number(prop.id) === Number(data.laboratorio))

    const payload = {
      ...data,
      dataInicial: formatRFC3339(data.dataInicial),
      dataFinal: formatRFC3339(data.dataFinal),
      infosPropriedade: {
        id: property.id,
        nome: property.name
      },
      cnpj: property.cnpj,
      laboratorio: {
        id: lab.id, 
        nome: lab.name
      }
    }

    setUi({ isSuccessAlertVisible: true, isSuccessAlertError: false })
    console.log(payload)
  }

  useEffect(() => {
    api.get('properties')
      .then( response => {
        const formatted =  response.data.properties.map( property => ({
          ...property,
          subtitle: `CNPJ ${property.cnpj}`
        }))
        setProperties(formatted)
      })

      api.get('laboratories')
      .then(response => setLaboratories(response.data.laboratories))
  }, [])

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <PageHeader/>
        <Content >
          <div>
            <Input
              id="nome"
              name="nome"
              label="Nome"
              maxLength={40}
              control={control}
              error={!!errors?.nome}
              helperText={errors?.nome? 'Error' : ''}
              required
            />
            <Datepicker 
              name={"dataInicial"}
              label={"Data inicial"}
              value={''}
              control={control}
              error={!!errors?.dataInicial}
              helperText={errors?.dataInicial? 'Error' : ''}
              onChange={(value) => setMinDateFinal(value)}
              required
            />
            <Datepicker 
              name={"dataFinal"}
              label={"Data Final"}
              value={''}
              control={control}
              minDate={minDateFinal}
              error={!!errors?.dataFinal}
              helperText={errors?.dataFinal? 'Error' : ''}
              required
            />
          </div>
          <div>
            <Select  
              label={"Propriedade"} 
              name={"infosPropriedade"}
              error={!!errors?.infosPropriedade}
              helperText={errors?.infosPropriedade? 'Error' : ''}
              control={control}
              options={properties}
              required
            />
            <Select  
              label="Laboratório" 
              name={"laboratorio"}
              error={!!errors?.laboratorio}
              helperText={errors?.laboratorio? 'Error' : ''}
              control={control}
              options={laboratories}
              required
            />
          </div>
          <div>
            <Input 
              id="observacoes"
              name="observacoes"
              label="Observações"
              rows={4}
              maxLength={1000}
              control={control}
              multiline
              required={false}
            />
          </div>
          {ui.isErrorAlertVisible ? (
            <Alert 
              style={{maxWidth: 325, margin: '0 auto'}}
              severity="error" 
              variant="filled"
              onClose={() => setUi({...ui, isErrorAlertVisible: false})}
            >
              Preencha os campos obrigatórios
            </Alert>
          ) : null}

            {ui.isSuccessAlertVisible ? (
              <Alert 
                style={{maxWidth: 325, margin: '0 auto'}}
                severity="success" 
                variant="filled"
                onClose={() => setUi({...ui, isSuccessAlertVisible: false})}
              >
                Cadastro realizado com sucesso!
              </Alert>
            ) : null}
        </Content>
      </form>
     
    </Container>
  )
}
import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import App from '../../App'
import Providers from '../../providers'
import api from '../../services'
import MockAdapter from 'axios-mock-adapter'

const apiMock = new MockAdapter(api)

describe('Search Page', () => {
  it('should be able to search for a address', async () => {
    render(
      <Providers>
        <App />
      </Providers>
    )

    apiMock.onGet('57035180').replyOnce(200, {
      complemento: 'até 3308/3309',
      bairro: 'Ponta Verde',
      cidade: 'Maceió',
      logradouro: 'Avenida Álvaro Otacílio',
      estado_info: {
        area_km2: '27.848,158',
        codigo_ibge: '27',
        nome: 'Alagoas',
      },
      cep: '57035180',
      cidade_info: {
        area_km2: '509,552',
        codigo_ibge: '2704302',
      },
      estado: 'AL',
    })

    const cepField = screen.getByPlaceholderText('Insira o CEP')
    const buttonElement = screen.getByText('Buscar pelo CEP')

    fireEvent.change(cepField, { target: { value: '57035180' } })

    fireEvent.click(buttonElement)

    await waitFor(() => {
      expect(
        screen.getByDisplayValue('Avenida Álvaro Otacílio')
      ).toBeInTheDocument()
    })
  })
})

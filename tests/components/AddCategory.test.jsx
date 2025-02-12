/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => { 
  test('debe de cambiar el valor en la caja de texto', () => { 
    
    render( <AddCategory onNewCategory={ () => {} } />)
    const input = screen.getByRole('textbox')

    fireEvent.input( input, { target: { value: 'Sharpei negro'} })

    expect( input.value ).toBe('Sharpei negro')

   })


   test('debe de llamar onNewCategory si el input tiene un valor', () => { 
      const inputValue = 'sharpei'
      const onNewCategory = jest.fn()

      render( <AddCategory onNewCategory={ onNewCategory } /> )
      
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')

      fireEvent.input(input, { target: { value: inputValue} })
      fireEvent.submit( form )

      expect( input.value ).toBe('')

      expect( onNewCategory ).toHaveBeenCalled()
      expect( onNewCategory ).toHaveBeenCalledTimes(1)
      expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

    })

    test('no should debe de llamar al onNewCategory si el input esta vacio', () => { 
      const onNewCategory = jest.fn()
      render( <AddCategory onNewCategory={ onNewCategory } />)
      
      const form = screen.getByRole('form')
      fireEvent.submit( form )

      expect( onNewCategory ).toHaveBeenCalledTimes(0)
      expect( onNewCategory ).not.toHaveBeenCalled()
    })

 })
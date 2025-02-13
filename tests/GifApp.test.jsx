/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifApp } from '../src/GifApp'

describe('Pruebas en <GifApp />', () => { 
  test('should', () => { 
    render( <GifApp />)
    screen.debug()
   })
 })
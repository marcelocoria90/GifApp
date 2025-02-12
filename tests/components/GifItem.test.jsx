/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Prueba en componente <GifItem />', () => { 

  const title = 'bart'
  const url = 'https://media3.giphy.com/media/XuDlhFtiWXZEk/giphy.gif?cid=9775a22f2gpmiv31hmp8wx8bfx18y3tl28ddu5whlo9iuqsh&ep=v1_gifs_search&rid=giphy.gif&ct=g'

  test('debe de hacer match con el snapshop', () => { 
    const { container } = render(<GifItem title={ title } url={ url } />)

    expect( container ).toMatchSnapshot()
   })
   
  test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    render( <GifItem title={ title } url={ url } />)
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( alt )
   })

  test('debe mostrar el titulo en el componente', ()=> {
    render( <GifItem title={ title } url={ url } />)
    expect( screen.getByText( title ) ).toBeTruthy()
  })
 })
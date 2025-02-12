 
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && (<p>Cargando...</p>) }

      <div className='card-grid'>
        {
          images.map( (img) => (
            <GifItem 
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

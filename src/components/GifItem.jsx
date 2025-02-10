/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const GifItem = ({ title, url, id}) => {
  return (
  
    <div className='card'>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  
  )
}

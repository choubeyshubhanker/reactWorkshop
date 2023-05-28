import React from 'react';
import poster6 from '../../assets/poster6.jpg'

const Thumbnail = () => {
  return (
    <figure className='text-left h-fit lg:m-auto' >
      <div className='test'>
        <img className='cover mb-6' src={poster6} alt="poster"  /></div>
      <figcaption className='text-white text-12' >Poster 6 </figcaption>
    </figure>
  )
}

export default Thumbnail
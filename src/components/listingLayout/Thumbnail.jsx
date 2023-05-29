import React from 'react';
import placeHolderImg from '../../assets/placeholder_for_missing_posters.png'

const Thumbnail = ({name,image}) => {
  // console.log("name", image)
  const URL = `./Slices/${image}`? `./Slices/${image}` : placeHolderImg;

  

  return (
    <figure className='text-left h-fit lg:m-auto' >
      <div className='test'>
        <img className='cover mb-6' src={URL} alt="poster" loading="lazy" /></div>
      <figcaption className='text-white text-12' > {name} </figcaption>
    </figure>
  )
}

export default Thumbnail
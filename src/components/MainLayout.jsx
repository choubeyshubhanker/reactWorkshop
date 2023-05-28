import React from 'react'
import Header from './header/Header'
import Thumbnail from './listingLayout/thumbnail'

const MainLayout = () => {
  return (
    <main className='relative w-full overflow-x-hidden-hidden h-screen'>
    <Header/>
    <section className='listing h-full w-full absolute top-48 grid grid-cols-3 gap-y-24 gap-x-7.5 mx-auto px-7.5'>
    <Thumbnail/>
    <Thumbnail/>
    <Thumbnail/>
    <Thumbnail/>
    <Thumbnail/>
    <Thumbnail/>
    <Thumbnail/>
    </section>
    </main>
  )
}

export default MainLayout
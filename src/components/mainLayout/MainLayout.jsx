import React, { useEffect, useState, useRef } from 'react'
import { getMoviesList,getNextMovieList } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header'
import Thumbnail from '../listingLayout/thumbnail'
import { pageNames } from './constant';

const MainLayout = () => {
  const {listOfMovies} = useSelector((store)=> store.movieList)
  const {nextListOfMovies} = useSelector((store)=> store.movieList)
  const [pageData, setPageData] = useState([])
  const state = useSelector((store)=> store)
  const [page, setPage] = useState(0);
  const [searchResult, setSearchResult] = useState(true);
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  // const list = listOfMovies?.page?.["content-items"]?.content

  // console.log("state ===", state)
  console.log("keyword ===", pageData)

  const handleSearchKeyword = (keyword)=>{
    console.log("word ", keyword)
    if(keyword?.length >0){
      var expression = `.*${keyword}.*`;
      let re = new RegExp(expression,"gi");
      const searchedData = nextListOfMovies.filter((item)=> item.name.match(re))
      setPageData(searchedData)
      setSearchResult(searchedData.length > 0 ? true : false)

    } else {setSearchResult(true)}
  }

  useEffect(() => {
    dispatch(getMoviesList())
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    dispatch(getNextMovieList({pageName:pageNames[page]}))
  }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [document.documentElement.scrollTop]);


  // console.log("page === ",page)
  // console.log("result ",  nextListOfMovies, listOfMovies?.page?.title );

 const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    // console.log("scrollTop" + document.documentElement.scrollTop);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 500 >=
        document.documentElement.scrollHeight
      ) {
        console.log("scroll if")
         setPage((prev) => prev<=1 ? prev + 1 : prev);
      }
    } catch (error) {
      console.log("scroll catch",error);
    }
  };
 

  return (
    <main className='relative w-full overflow-x-hidden-hidden h-screen'>
    <Header handleSearchKeyword={handleSearchKeyword} pageTitle={listOfMovies?.page?.title} pageData={pageData} />
    <section className='listing h-full w-full absolute top-48 grid grid-cols-3 gap-y-24 gap-x-7.5 mx-auto px-7.5'>
      { pageData.length>0 ? pageData.map((item, i)=>(
        <Thumbnail key={i} name={item.name} image={item["poster-image"]} />

      )) :  !searchResult ? <h1 className=' text-white text-3xl w-full col-span-3'> No Result Found</h1>: nextListOfMovies.map((item, i)=>(
        <Thumbnail key={i} name={item.name} image={item["poster-image"]} />

      ))

      }
    </section>
    </main>
  )
}

export default MainLayout
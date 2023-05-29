import {takeEvery,takeLatest, put} from 'redux-saga/effects';
import { getMoviesListSuccess, getMoviesListsError,getNextMovieListSuccess} from './action'
import { MOVIE_LIST } from "./actionTypes";


function* getMovieListSaga(){
    try {
        const response = yield fetch(`https://vorcus.github.io/api/CONTENTLISTINGPAGE-PAGE1.json`)

        
        const {
            statusText, status,
        } = response;
            // console.log("response", response)
       
            const data = yield response.json();
            // console.log("Saga data", data)
            yield put(getMoviesListSuccess(data))
       
    } catch (error){
        console.log("error ===> ", error)
        const { data } = error.response;
        yield put(getMoviesListsError(data));
    }
    
}
function* getMoreMovieListSaga({payload:{pageName}}){
    console.log("payload", pageName)
    try {
        const response = yield fetch(`https://vorcus.github.io/api/${pageName}`)
        
        const {
            statusText, status,
        } = response;
       
            const data = yield response.json();
            // console.log("ssss",data.page["content-items"].content)
            // yield put(getMoviesListSuccess(data))
            yield put(getNextMovieListSuccess(data.page["content-items"].content))
        
    } catch (error){
        console.log("error ===> ", error)
        const { data } = error.response;
        yield put(getMoviesListsError(data));
    }
    
}

 function* MovieListSaga (){
    yield takeEvery(MOVIE_LIST.getMovieList, getMovieListSaga )
    yield takeEvery(MOVIE_LIST.getNextMovieList, getMoreMovieListSaga )

}
export default MovieListSaga;
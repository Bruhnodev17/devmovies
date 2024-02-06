import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaulLayout from '../layout/DefaultLayout'
import Details from '../containers/Details'

function Router() {

    return (
        <Routes>
            <Route element={<DefaulLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhes/:id' element={<Details />} />
            </Route>
        </Routes>
    )
}

export default Router
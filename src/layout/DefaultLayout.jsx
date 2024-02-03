import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function DefaulLayout(){

    return(
       <>
           <Outlet />
       </>
    )
}

export default DefaulLayout
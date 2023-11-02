import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

export const Layout = ({children}) =>{

    return(
        <>  
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            {children}

        </>
    )
}
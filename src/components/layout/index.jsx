import Navbar from "../reUseable/navbar";
import {Outlet} from "react-router-dom"
import Footer from "../reUseable/Footer";
import Body from "../../features/Body";


export const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Body/>
            <Footer/>
        </>
    )
}
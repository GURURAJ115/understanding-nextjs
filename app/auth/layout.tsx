import { Navbar } from "./Navbar"
export default function AuthLayout({children}){
    return <div>
        <Navbar></Navbar>
        {children}
    </div>
}
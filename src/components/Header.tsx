import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

export function Header(){
    return(
        <><section  className="lg:hidden">
            <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
                <Logo />
                <Sidebar />
            </header>
        </section>
        
                <div className="hidden lg:flex ">
                    <header className="w-full py-5 flex items-center justify-around bg-gray-700 border-b border-gray-600">
                            <Logo />
                    </header>
                </div>
       </>

    )
}
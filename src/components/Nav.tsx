import Image from "next/image";
import Icon from '@/assets/icons/hamburger.svg';

export default function Nav() {
    return (
        <div id="nav-wrap" className="flex justify-between px-4 lg:justify-start lg:px-7">
            <div id="logo-wrap" className="h-16 flex justify-center items-center lg:mr-8">
                <Image src="/images/logo.png" alt="Logo" width={100} height={100}/>
            </div>
            <div id="menu-wrap" className="flex items-center">
                <Image src={Icon} alt="Hamburger Icon" width={30} height={30} className="lg:hidden"/>
                <div id="list-wrap" className="hidden lg:block">
                    <ul id="menu-list" className="flex items-center ml-1 gap-4">
                        <li className="font-samsung font-bold">About</li>
                        <li className="font-samsung font-bold">Projects</li>
                        <li className="font-samsung font-bold">Experience</li>
                        <li className="font-samsung font-bold">Contact</li>
                        <li className="font-samsung font-bold">Extras</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

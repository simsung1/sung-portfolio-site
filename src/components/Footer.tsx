import { FaGithub, FaLinkedin, FaPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="p-4 ">
            <h4 className="text-sm my-3">&copy;Copyright 2025 Sung Min Sim. <br/>Select visuals are externally sourced and used for non-commercial portfolio display.</h4>
            <div className="md:flex md:justify-between md:items-center">
                <h4 className="font-bold text-sm">
                    Spoken Languages: <span className="block md:hidden"></span>
                    Canada/English(EN), Korean(KR)
                </h4>
                <div className="flex flex-col my-5 justify-center items-center gap-7 md:gap-3 md:flex-row">
                    <p>Stay in the Loop?</p>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/simsung1"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Check out my Github"
                        >
                            <FaGithub size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sungminsim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit my LinkedIn profile"
                        >
                            <FaLinkedin size={25} />
                        </a>
                        <a
                            href="https://paypal.me/SungMinS?country.x=CA&locale.x=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Support me on Paypal"
                        >
                            <FaPaypal size={25} />
                        </a>
                        <a
                            href="mailto:sim.sungmin@outlook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Send me an email"
                        >
                            <MdEmail size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

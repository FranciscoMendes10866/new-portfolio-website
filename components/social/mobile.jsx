import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { ImXing2 } from 'react-icons/im'
import { FaDev } from 'react-icons/fa'

const SocialMobile = () => {
    return (
        <>
            <div className="left-0 bottom-0 z-50 fixed text-center bg-gray-900 p-3 visible md:invisible" style={{ marginTop: '35vh' }}>
                <ul className="flex">
                    <li className="px-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <AiFillInstagram className="text-xl" />
                        </a>
                    </li>
                    <li className="px-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <AiFillGithub className="text-xl" />
                        </a>
                    </li>
                    <li className="px-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <RiLinkedinFill className="text-xl" />
                        </a>
                    </li>
                    <li className="px-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <ImXing2 className="text-xl" />
                        </a>
                    </li>
                    <li className="px-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <FaDev className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SocialMobile

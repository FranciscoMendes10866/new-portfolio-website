import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { ImXing2 } from 'react-icons/im'
import { FaDev } from 'react-icons/fa'

const Social = () => {
    return (
        <>
            <div className="left-0 top-0 z-50 fixed text-center bg-gray-900 p-3 invisible md:visible" style={{ marginTop: '35vh' }}>
                <ul className="flex flex-col">
                    <li className="py-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <AiOutlineInstagram className="text-xl" />
                        </a>
                    </li>
                    <li className="py-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <AiFillGithub className="text-xl" />
                        </a>
                    </li>
                    <li className="py-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <RiLinkedinFill className="text-xl" />
                        </a>
                    </li>
                    <li className="py-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <ImXing2 className="text-xl" />
                        </a>
                    </li>
                    <li className="py-2 cursor-pointer font-medium text-gray-100 transform hover:scale-125 transition duration-500 ease-in-out">
                        <a href>
                            <FaDev className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Social

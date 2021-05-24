import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaDev } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Social = () => {
    return (
        <>
            <div className="left-0 top-0 z-50 fixed text-center bg-gray-900 p-3 invisible md:visible" style={{ marginTop: '35vh' }}>
                <ul className="flex flex-col">
                    <motion.li
                        className="py-2 font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href="https://www.instagram.com/__.fmendes.__/">
                            <AiFillInstagram className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="py-2 font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href="https://github.com/FranciscoMendes10866">
                            <AiFillGithub className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="py-2 font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <RiLinkedinFill className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="py-2 font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href="https://dev.to/franciscomendes10866">
                            <FaDev className="text-xl" />
                        </a>
                    </motion.li>
                </ul>
            </div>
        </>
    )
}

export default Social

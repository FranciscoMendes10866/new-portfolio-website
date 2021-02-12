import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { ImXing2 } from 'react-icons/im'
import { FaDev } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const SocialMobile = () => {
    const [show, setShow] = useState(false)
    const [lastYPos, setLastYPos] = useState('')
    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY
            const isScrolling = yPos < lastYPos
            setShow(isScrolling)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', () => handleScroll(), { passive: true })
        return () => window.removeEventListener('scroll', () => handleScroll())
    }, [lastYPos])
    return (
        <>
            <motion.div
                className="left-0 bottom-0 ml-4 mb-4 z-50 fixed text-center bg-gray-900 p-3 visible md:invisible"
                style={{ marginTop: '35vh' }}
                animate={{ opacity: show ? 1 : 0 }}
                initial={{ opacity: 1}}
                transition={{ opacity: { duration: 0.07 } }}
            >
                <ul className="flex">
                    <motion.li
                        className="px-2 cursor-pointer font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <AiFillInstagram className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="px-2 cursor-pointer font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <AiFillGithub className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="px-2 cursor-pointer font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <RiLinkedinFill className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="px-2 cursor-pointer font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <ImXing2 className="text-xl" />
                        </a>
                    </motion.li>
                    <motion.li
                        className="px-2 cursor-pointer font-medium text-gray-100"
                        whileHover={{ scale: 1.2 }}
                    >
                        <a href>
                            <FaDev className="text-xl" />
                        </a>
                    </motion.li>
                </ul>
            </motion.div>
        </>
    )
}

export default SocialMobile

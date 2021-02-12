import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BackToTop = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.onscroll = () => { anchorFunction() }
        const anchorFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
    }, [])
    return (
        <>
            <span id="top"></span>
            <motion.div
                class="back-top right-0 bottom-0 fixed mr-4 md:mr-12 mb-4 md:mb-12 bg-gray-900 text-white p-2"
                animate={{ scale: show ? 1 : 0 }}
                initial={{ scale: 1 }}
                whileHover={{ originX: 0, y: '-20px' }}
                transition={{ scale: { duration: 0.1 }, hover: { duration: 0.05 } }}
            >
                <a href="#top">
                    <AiOutlineArrowUp class="text-2xl" />
                </a>
            </motion.div>
        </>
    )
}

export default BackToTop

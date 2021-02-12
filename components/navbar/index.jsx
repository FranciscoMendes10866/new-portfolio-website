import { motion } from 'framer-motion'

const Nav = ({ NavData }) => {
    return (
        <>
            <div className="right-0 top-0 z-50 fixed mr-10 text-right invisible md:visible" style={{ marginTop: '20vh' }}>
                <ul className="flex flex-col">
                    {NavData.map((data, index) => {
                        return <motion.li
                            className="p-1 font-medium text-gray-400 hover:text-gray-700"
                            key={index}
                            whileHover={{ originX: 0, x: '-20px' }}
                            transition={{ delay: 0.05 }}
                            >
                                <a href={data.anchor}>{data.title} -</a>
                            </motion.li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Nav

import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20" id="contactme">
            <h1 className="bold text-4xl">Contact me.</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12">
                <div className="col-span-9 lg:col-span-9 xl:col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        Feel free to reach out if you're looking for a
                        developer, have a question, or just want to connect.
                    </p>
                </div>
            </div>
            <motion.div>
                <motion.button
                    className="px-8 py-4 bg-gray-900 text-white mt-14"
                    drag="x"
                    dragConstraints={{ left: 0, right: 100 }}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.05 }}
                >
                    hello@fmendes.email
            </motion.button>
            </motion.div>
        </div>
    )
}

export default Contact

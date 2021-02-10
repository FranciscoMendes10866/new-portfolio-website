const Intro = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-5xl tracking-wider">
                <h1 className="text-5xl lg:text-7xl leading-tight md:leading-none">Hello there! I’m <span className="bold">Francisco</span> -</h1>
                <h1 className="text-5xl lg:text-7xl medium mt-2 md:mt-4 leading-tight md:leading-none">Full Stack Web Developer.</h1>
                <p className="text-xl lg:text-3xl text-gray-500 light leading-loose mt-6 md:mt-8">
                    Born and raised in the beautiful Portuguese coast.
                </p>
                <p className="text-xl lg:text-3xl text-gray-500 light leading-loose mt-0 md:mt-1">
                    My core value is to embrace my limitations and always
                    stay hungry for new challenges.
                </p>
            </div>
        </div>
    )
}

export default Intro

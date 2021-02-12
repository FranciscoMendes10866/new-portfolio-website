import Projects from './projects'

const Works = () => {
    return (
        <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20" id="myworks">
            <h1 className="bold text-4xl">My works.</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12">
                <div className="col-span-9 lg:col-span-9 xl:col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        I like to stay busy and always have a project in progress.
                        Take a look at some of the apps I dedicate my time to.
                    </p>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Works

const Picture = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 md:col-start-4 col-end-13">
                <img
                    src="/pic.jpg"
                    alt="Picture of the author"
                    className="object-cover w-full bg-no-repeat bg-center"
                />
            </div>
        </div>
    )
}

export default Picture

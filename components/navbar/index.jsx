const Nav = ({ NavData }) => {
    return (
        <>
            <div className="right-0 top-0 z-50 fixed mr-10 text-right invisible md:visible" style={{ marginTop: '20vh' }}>
                <ul className="flex flex-col">
                    {NavData.map((data, index) => {
                        return <li
                            className="p-1 cursor-pointer font-medium text-gray-400 hover:text-gray-700"
                            key={index}
                            >
                                <a href={data.anchor}>{data.title} -</a>
                            </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Nav

import React from 'react'

const Connector = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col md:flex-row justify-around w-11/12 md:w-6/12  items-center absolute mx-auto bg-c-purple rounded-3xl text-white p-5">
                <div className="text-center md:block hidden">
                    <p className="text-lg font-semibold">Únete al proceso de admisión <br />
                        2023-II
                    </p>
                </div>
                <div className="flex items-center justify-center text-left">
                    <span className="text-6xl font-extrabold mx-5">26</span>
                    <div>
                        <p className="uppercase">Examen <br />
                            de admisión <br />
                            <span className="text-3xl font-extrabold">Agosto</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connector
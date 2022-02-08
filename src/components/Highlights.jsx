import React from 'react';
// import { data } from "../data"
import "../styles/Highlights.css"
import { useSelector, useDispatch } from 'react-redux';
export const Highlights = () => {
    const cycles = useSelector((state) => {
        return state.totalCycle;
    })

    return (
        <>

            <h1 id="heading">Highlights</h1>

            <div className="highlight">

                {
                    cycles.map((item) => {
                        return <div >


                            <img style={{ width: "250px", height: "200px" }} src={item.image} alt="" />

                            <p>
                                Day {item.id} of {item.type}
                            </p>



                        </div>
                    })
                }
            </div>


        </>
    )
};



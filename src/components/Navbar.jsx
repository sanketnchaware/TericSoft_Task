import React from 'react';
import "../styles/Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { filter_BMX, filter_Mountains, filter_Road, filter_Track } from '../redux';

export const Navbar = () => {

    const dispatch = useDispatch();

    return <div className="navbar">

        <div className="navbar_btn">
            <button
                onClick={() => {

                    dispatch(filter_BMX())
                }}
            >BMX</button>
            <button
                onClick={() => {
                    dispatch(filter_Mountains())
                }}
            >Mountain</button>

            <button
                onClick={() => {
                    dispatch(filter_Road())
                }}
            >Road</button>

            <button
                onClick={() => {
                    dispatch(filter_Track())
                }}
            >Track</button>
        </div>

    </div>;
};

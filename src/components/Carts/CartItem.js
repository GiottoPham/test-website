import React, { useEffect, useState } from "react";
import Navbar from "components/Navbars/IndexNavbar";
import { selectCart, addCart, removeCart } from "features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function CartItem(props) {
    const dispatch = useDispatch();
    const { item, number } = props;
    const addMoreItem = () => {
        dispatch(addCart(item));
    }
    const subMoreItem = () => {
        if (number === 1) confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-2 py-5 flex-auto">
                                        <div className="px-3 py-3">
                                            <h1 className="text-xl font-semibold mx-10">Are you sure?</h1>
                                            <p className="mx-10">Do you want to remove this item from your cart?</p>
                                            <div className="flex flex-row justify-between px-10 py-2">
                                                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" onClick={onClose}>No</button>
                                                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                                    onClick={() => {
                                                        dispatch(removeCart(item));
                                                        onClose();
                                                    }}
                                                >
                                                    Yes, Remove it!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
        else {
            dispatch(removeCart(item));
        }
    }
    return (
        <div className="relative relative flex flex-row justify-between min-w-0 break-words w-full border-b-2 py-2">
            <div className="px-2 py-2 flex">
                <img className="md:h-60 h-50 rounded px-12 md:w-64"
                    alt="..."
                    src={item.imageUrl}
                />
                <div>
                    <h6 className="text-xl font-semibold">{item.title}</h6>
                    <h1 className="text-blueGray-500">
                        {item.author}
                    </h1>
                    <h1 className="text-blueGray-500">
                        Price: {(item.price * 1000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </h1>
                </div>

            </div>
            <div className="px-2 py-2">
                <div className="flex flex-row items-center">
                    <button onClick={addMoreItem}
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <span className="m-auto text-2xl font-thin">+</span></button>
                    <input type="number" className="w-11 h-10 rounded outline-none focus:outline-none mr-1 mb-1 border-none text-base text-center" name="custom-input-number" value={number} disabled={true} />
                    <button onClick={subMoreItem}
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <span className="m-auto text-2xl font-thin">-</span></button>
                </div>
                <h6 className="text-xl font-semibold">SubTotal</h6>
                <h1 className="text-blueGray-500">
                    {(number * item.price * 1000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </h1>
            </div>
        </div>
    )
}
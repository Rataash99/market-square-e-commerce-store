import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../App'

const AddAddress = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);

    return (
        <div>
            <div>
                <h1>Add new address</h1>
                <img src=''></img>
            </div>
            <form>
                <div>
                    <label><input type='text' /></label>
                    <label><input type='number' /></label>
                </div>
                <div>
                    <label><input type='text' /></label>
                    <label><input type='text' /></label>
                    <label><input type='text' /></label>
                </div>
                <div>
                    <label><input type='text' /></label>
                    <label><input type='text' /></label>
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default AddAddress
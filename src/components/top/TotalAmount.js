import React from 'react'
import TotalAmountCSS from './TotalAmount.module.css'


export default function TotalAmount(props) {
    return (
        <div>
            <div className={TotalAmountCSS.container}>
                {props.amount}
            </div>
        </div>
    )
}


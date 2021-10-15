import React from 'react'
import ItemConCSS from './ItemContainer.module.css'

export default function ItemContainer({children}) {
    return (
        <div className={ItemConCSS.ItemContainer}>
            {children}
        </div>
    )
}



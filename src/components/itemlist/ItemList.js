import React from 'react'
import ItemListCSS from './ItemList.module.css'
import ListItem from '../listItem/ListItem.js'

export default function ItemList(props) {
    const tmp = ["apple", "Milk", "bread", "hotdogs", "water","apple", "Milk", "bread", "hotdogs", "water","apple", "Milk", "bread", "hotdogs", "water","apple", "Milk", "bread", "hotdogs", "water","apple", "Milk", "bread", "hotdogs", "water","apple", "Milk", "bread", "hotdogs", "water"]
    const items = props.items

    return (
        <div className={ItemListCSS.container}>

            {items.map((storeItem) => (
                    <ListItem {...storeItem} selected={props.selected} setSelected={props.setSelected} />
            ))}

        </div>
    )
}

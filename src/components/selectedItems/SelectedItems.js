import React from 'react'

export default function SelectedItems(props) {
    const tmp = [{name: 'Apple', price: 10, count: 0}, {name: 'Bread', price: 30, count: 0}]
    return (
        <div>
            <h1>Selected Items</h1>
            <ul>
                {props.selected.map((i) => (
                    <li>{i.name + "  Price: " + i.price + " Count: " + i.count}</li>
                ))}
            </ul>
        </div>
    )
}

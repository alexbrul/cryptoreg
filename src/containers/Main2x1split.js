import React from 'react'
import Main2x1CSS from './Main2x1split.module.css'

export default function Main2x1split({ children }) {
    return (
        <div className={Main2x1CSS.container}>
            
                {React.Children.map(children, (child) => (<div className={Main2x1CSS.itemDiv}>{child}</div>))}
            
        </div >
    )
}


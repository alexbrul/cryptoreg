import React from 'react'
import SelectedItems from '../selectedItems/SelectedItems'
import ItemCSS from './ListItem.module.css'
export default function ListItem(props) {

    function addSelected() {
        let finished=false;
        //grabbing copy
        let tmpSel = props.selected

        //if item already selected, increase count
        let out = tmpSel.map((selI) => {
            if(selI.name == props.name){
                console.log("inni sel")
                finished=true
                return {...selI, count: selI.count+1}
            }else{
                console.log("inni sel else")
                return selI
            }
        })
        //if not in selected list
        if(!finished){
            out = [...out, {name: props.name, price: props.price, count: 1} ]
        }
        //push update
        props.setSelected(out)
        console.log(props.selected)
}

return (
    <div className={ItemCSS.card} onClick={() =>addSelected()}>
        <h1>{props.name}</h1>
        <h4>Price: {props.price}</h4>
    </div>
)
}

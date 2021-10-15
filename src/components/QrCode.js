import React from 'react'
import { useState, useEffect } from 'react';

//Need to fix this, BUT IT'S WORKING 
//I have KORS disabled with a plugin. Need to whitelist their domain or something.
//Having kors disabled is very dangerous and makes you vulnerable to cross site scripting

export default function QrCode(props) {

    const [img, setImg] = useState(null);
    const url = 'https://www.bitcoinqrcodemaker.com/api/?'
    let address = '&0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B'
    let [outUrl, setOutUrl] = useState(null)

    function makeurl(style = 'ethereum') {
        let newurl = url
        if (props.style) {
            newurl = newurl + 'style=' + style
        }
        newurl = newurl + address + '&amount=' + props.amount

        return newurl
    }
    function onclick(furl) {
        try {
            fetch(tmp)
                .then(response => {
                    console.log("test", response)
                    if (!response.ok) {
                        throw Error("Can't fetch")
                    }
                    return response.blob()
                        .then(alldata => {
                            setImg(URL.createObjectURL(alldata))
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        } catch (err) {
            console.log(err)
        }
    }
    const tmp = 'https://www.bitcoinqrcodemaker.com/api/?style=ethereum&address=0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B&amount=10'
    return (
        <div>
            <button onClick={() => onclick()}>Generate QR Code to pay</button>
            {img ? <img src={img}/> : null}
        </div>
    )
}

// https://www.bitcoinqrcodemaker.com/bitcoin-qr-code-maker-api-and-widgets/
// https://www.bitcoinqrcodemaker.com/api/?style=ethereum&address=0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B&amount=10

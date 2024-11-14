import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from "./qrCodeScaner.module.css";
import { SCAN_DATA } from './constants';


    const QrCodeScaner = () => {
    const[scanned, setScanned] =useState(null);
    
    const scanHandler = (result) => {
          setScanned(result[0].rawValue );

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA)  || "[]");      
    
            localStorage.setItem(
            SCAN_DATA, 
             JSON.stringify([... prevData, result[0].rawValue] ))
    }
    const settings = {
        audio: false,
        finder: false,

    }

    return(
        <div className={s.container}>
            <p className={s.result}>{scanned}</p>
            <Scanner
                onScan={scanHandler}
                components={settings} 
                styles={{
                    container: {width: 200}
                }}
            />
        </div>
    )
    }





export default QrCodeScaner
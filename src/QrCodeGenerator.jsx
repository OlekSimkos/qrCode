import QRCodeSVG from 'qrcode.react';
import { useState } from 'react';
import s from "./qrCodeGenerator.module.css"
import { GENERATE_DATA } from './constants';

    const QrCodeGenerator = () => {
        const [value, setValue] = useState("");
        const [result, setResult] = useState("");


        const onClickHandler = () =>  {
        
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)  || "[]");      
    
            localStorage.setItem(
            GENERATE_DATA, 
             JSON.stringify([... prevData,value])
            )

            setResult(value) ;
            setValue("");
          
        };

        const onChangeHandler = (event) => {

            setValue(event.target.value);
            setResult("") 

        };


        return(
            <div className={s.container}> 
               
                <input
                    type="text" 
                    value={value} 
                    placeholder='введите текст...'
                    onChange={onChangeHandler}
                    className={s.input}
                    />
                <button type='button' className={s.button} onClick={onClickHandler} >
                    Generate QR
                </button>
                {result !== "" ? <div><QRCodeSVG value={result} size={200} /></div>  : null}
       
            </div>
    ); 
};
export default QrCodeGenerator
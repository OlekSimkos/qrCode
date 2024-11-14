import QrCodeGenerator from "./QrCodeGenerator";
import QrCodeScaner from "./QrCodeScaner";
import Navigation from "./Navigation";
import {Routes, Route, } from "react-router-dom"
import { GenerateHistory } from "./GenerateHistory";
import {ScanHistory} from "./ScanHistory";


    const Layout = () => {
        return (
            <div>
               <Navigation/>


               <Routes>
        <Route path="/generate" element={<QrCodeGenerator />}/>
        <Route path="/scan" element={<QrCodeScaner />}/>
        <Route path="/scanHistory" element={<ScanHistory />}/>
        <Route path="/generateHistory" element={<GenerateHistory />}/>
      </Routes>
            </div> );
    };
    
    export default Layout;

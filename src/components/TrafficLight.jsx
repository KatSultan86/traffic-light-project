
import { useState } from 'react';
import '/src/index.css'




export default function TrafficLight() {

    const [isOn, setisOn] = useState(null);

    const toggleLight = (buttonId) => {

        setisOn(buttonId);
    };





    return (

        <div className="container d-flex justify-content-center align-items-center" style={{ width: "100dvw", height: "100dvh" }}>



            <div className="cord "></div>
            <div className="traffic-light">


                <div className="container flex justify-content-center mt-2">

                    <div className={`light bg-danger ${isOn === 1 ? 'white-shadow' : ''}`} onClick={() => toggleLight(1)} ></div>
                    <div className={`light bg-warning ${isOn === 2 ? 'white-shadow' : ''}`} onClick={() => toggleLight(2)} ></div>
                    <div className={`light bg-success ${isOn === 3 ? 'white-shadow' : ''}`} onClick={() => toggleLight(3)} ></div>


                </div>



            </div>
        </div >

    )
}

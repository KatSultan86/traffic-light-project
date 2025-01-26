export default function TrafficLight() {
    return (

        <div className="container d-flex justify-content-center align-items-center" style={{ width: "100dvw", height: "100dvh" }}>



            <div className="cord "></div>
            <div className="traffic-light">


                <div className="container flex justify-content-center mt-2">
                    <div className="light bg-danger"></div>

                    <div className="light bg-warning"></div>

                    <div className="light bg-success"></div>

                </div>



            </div>
        </div>

    )
}
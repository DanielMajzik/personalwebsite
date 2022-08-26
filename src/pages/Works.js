import {Outlet} from "react-router-dom";

export default function Works() {
    return (
        <div>
            <h1>My works</h1>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

import Home from "../features/home/Home";
import Navbar from "../features/navbar/Navbar";

function HomePage() {
    return ( 
        <div>
            <Navbar>
                <Home />
            </Navbar>
        </div>
     );
}

export default HomePage;
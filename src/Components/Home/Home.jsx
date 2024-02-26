import About from "../../ExtraSection/About/About";
import Banner from "./Banner";

import Products from "./Products";

const Home = () => {

    return (
        <div>
            <div><Banner></Banner> </div>
            <div><Products></Products></div>
            <div><About></About></div>
     
        </div>
    );
};

export default Home;
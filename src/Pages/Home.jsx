import Banner from "../Component/Banner";
import Chat from "../Component/Chat";
import FaqSection from "../Component/FaqSection";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <div>
            <Chat></Chat>
         </div>
           <FaqSection></FaqSection>
        </div>
    );
};

export default Home;
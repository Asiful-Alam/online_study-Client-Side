import AllAssignmentFeature from "../Component/AllAssignmentFeature";
import Banner from "../Component/Banner";

import FaqSection from "../Component/FaqSection";




const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <div>
      <AllAssignmentFeature></AllAssignmentFeature>
         </div>
           <FaqSection></FaqSection>
        </div>
    );
};

export default Home;
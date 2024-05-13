import AllAssignmentFeature from "../Component/AllAssignmentFeature";
import Banner from "../Component/Banner";

import FaqSection from "../Component/FaqSection";
import OnlineCourses from "../Component/OnlineCourses";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
        <div>
          <AllAssignmentFeature></AllAssignmentFeature>
          <OnlineCourses></OnlineCourses>
        </div>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;

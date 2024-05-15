import AllAssignmentFeature from "../Component/AllAssignmentFeature";
import Banner from "../Component/Banner";

import FaqSection from "../Component/FaqSection";
import OnlineCourses from "../Component/OnlineCourses";
import AllAssignment from "./AllAssignment";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
        <div >
          <AllAssignment></AllAssignment>
          <AllAssignmentFeature></AllAssignmentFeature>
          <OnlineCourses></OnlineCourses>
        </div>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;

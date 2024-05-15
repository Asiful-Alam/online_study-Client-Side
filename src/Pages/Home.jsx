import AllAssignmentFeature from "../Component/AllAssignmentFeature";
import Banner from "../Component/Banner";
import ChatCard from "../Component/ChatCard";
import DiscussionForum from "../Component/DiscussionForum ";

import FaqSection from "../Component/FaqSection";
import OnlineCourses from "../Component/OnlineCourses";
import ShareButtons from "../Component/ShareButtons ";
// import AllAssignment from "./AllAssignment";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
        <div >
          {/* <AllAssignment></AllAssignment> */}
          <AllAssignmentFeature></AllAssignmentFeature>
          <OnlineCourses></OnlineCourses>
          <ChatCard></ChatCard>
        </div>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;

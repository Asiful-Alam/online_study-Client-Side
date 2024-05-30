import  { useState } from 'react';
import AllAssignmentFeature from "../Component/AllAssignmentFeature";
import Banner from "../Component/Banner";
import ChatCard from "../Component/ChatCard";

import FaqSection from "../Component/FaqSection";
import OnlineCourses from "../Component/OnlineCourses";

import StudyMaterial from "../Component/StudyMaterial";
import Notebook from "../Component/Notebook"; // Assuming you have this component
import Forum from "../Component/Forum"; // Assuming you have this component

const Home = () => {
  const [view, setView] = useState('notebook');

  return (
    <div className="container mx-auto">
      <Banner />
      <div>
        <AllAssignmentFeature />
        <OnlineCourses />
        <ChatCard />
      </div>
      <div>
        <p className="text-red-600 font-bold text-2xl text-center">Here You can Test Yourself</p>
        <div className="h-[300px] bg-gray-200 flex items-center justify-center my-10 mt-10">
          <StudyMaterial />
        </div>
        <div className="container mx-auto p-4">
          <div className="flex justify-between mb-4">
            <button onClick={() => setView('notebook')} className="px-4 py-2 bg-blue-500 text-white rounded">Notebook</button>
            <button onClick={() => setView('forum')} className="px-4 py-2 bg-green-500 text-white rounded">Forum</button>
          </div>
          {view === 'notebook' ? <Notebook /> : <Forum />}
        </div>
      </div>
      <FaqSection />
    </div>
  );
};

export default Home;

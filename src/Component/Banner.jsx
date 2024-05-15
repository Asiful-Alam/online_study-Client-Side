import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation'; // Import Swiper Navigation module styles
import 'swiper/css/pagination'; // Import Swiper Pagination module styles
import 'swiper/css/scrollbar'; // Import Swiper Scrollbar module styles
import bannerImage from '../assets/study banner.webp'; 
import { Link } from 'react-router-dom';

const Banner = () => {
  const handleSlideChange = () => {
    // Add your animation logic here
    console.log('Slide changed');
  };

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    on: {
      slideChange: handleSlideChange
    }
  };

  return (
    <div className="relative">
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Ignite Your Academic Journey</h2>
              <p className="text-lg text-center">Discover resources tailored to boost your assignment skills and elevate your academic performance.</p>
              <Link to="/properties" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Details</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Unlock Your Potential with Assignments</h2>
              <p className="text-lg text-center">Explore a vast array of assignment materials designed to help you tackle any academic challenge.</p>
              <Link to="/properties" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Details</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Excel in Every Assignment Task</h2>
              <p className="text-lg text-center">Navigate through expert advice, tips, and tools to ace every assignment and succeed in your studies.</p>
              <Link to="/properties" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Details</Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Add other slides similarly */}
      </Swiper>
    </div>
  );
};

export default Banner;

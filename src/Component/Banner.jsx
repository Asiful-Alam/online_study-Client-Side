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
              <h2 className="text-4xl font-semibold mb-4 text-center">Discover Your Dream Tour</h2>
              <p className="text-lg text-center">Explore our curated selection of Tourist spots</p>
              <Link to="/properties" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Details</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Discover Your Dream Tour</h2>
              <p className="text-lg text-center">Explore our curated selection of Tourist spots</p>
              <Link to="/properties" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Details</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Discover Your Dream Tour</h2>
              <p className="text-lg text-center">Explore our curated selection of Tourist spots</p>
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

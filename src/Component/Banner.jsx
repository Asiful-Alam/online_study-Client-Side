import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation'; // Import Swiper Navigation module styles
import 'swiper/css/pagination'; // Import Swiper Pagination module styles
import 'swiper/css/scrollbar'; // Import Swiper Scrollbar module styles
import { Link } from 'react-router-dom';

// New image URL for the e-commerce site
const bannerImage = "https://i.ibb.co/3WrNrtG/banner-for-e-com.jpg"; 

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
              <h2 className="text-4xl font-semibold mb-4 text-center">Shop the Latest Trends</h2>
              <p className="text-lg text-center">Explore our collection of the latest products and find your perfect match.</p>
              <Link to="/shop" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">Shop Now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Exclusive Offers Just for You</h2>
              <p className="text-lg text-center">Don’t miss out on our special discounts and deals. Shop now and save big!</p>
              <Link to="/offers" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">View Offers</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Find Your Perfect Gadget</h2>
              <p className="text-lg text-center">Browse our extensive range of gadgets and electronics to find what you need.</p>
              <Link to="/gadgets" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">Explore Gadgets</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">New Arrivals Are Here</h2>
              <p className="text-lg text-center">Check out the latest arrivals and stay ahead of the trends with our new collections.</p>
              <Link to="/new-arrivals" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">Shop New Arrivals</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-cover bg-center flex items-center justify-center z-0" style={{ backgroundImage: `url(${bannerImage})`, borderRadius: '20px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
              <h2 className="text-4xl font-semibold mb-4 text-center">Seasonal Sale Now On!</h2>
              <p className="text-lg text-center">Save up to 50% on selected items. Hurry, the sale won’t last long!</p>
              <Link to="/sale" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">Shop Sale</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

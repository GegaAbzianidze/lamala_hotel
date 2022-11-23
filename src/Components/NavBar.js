import { Icon } from '@iconify/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate()

    const [isShowNav, setIsShowNav] = React.useState(true);

    const handleClick = () => {
        setIsShowNav(!isShowNav);
      };

  return (
    <div>
    <div className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white">
        <div className="container mx-auto md:px-24 px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <button  onClick={()=> navigate("/")}  className='text-2xl font-[Ubuntu] text-[#192252]'>Lamala</button>
            </div>
    
            <div className="hidden sm:flex sm:items-center">
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4">Rooms</a>
              <button onClick={()=> navigate("/map")} className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4">What's nearby</button>
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-blue-600">Pricing</a>
            </div>
    
            <div className="hidden sm:flex sm:items-center">
              <a href="https://www.booking.com/hotel/ge/lamala-becho.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFKIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ApGB2psGwAIB0gIkNjQ4ODJlNWItNzM0MS00NTE2LTlmNGEtYWRhOWIwZDQ4ZTM22AIG4AIB&sid=8f8c99e3ef145dad63fb09499e7f2c2f&dest_id=-2326250&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1668710556&srpvid=e82c838dfe3a027f&type=total&ucfs=1&activeTab=main" className="bg-[#192252] text-white text-sm font-semibold border px-4 py-2 rounded-lg ">Book Hotel</a>
            </div>
    
            <div className="sm:hidden cursor-pointer">
            {isShowNav === true ?
            <button onClick={handleClick}>
              <Icon icon="fluent-mdl2:secondary-nav" className='text-2xl '/>
            </button>
            :
            <button onClick={handleClick}>
              <Icon icon="radix-icons:cross-1" className='text-2xl '/>
            </button>
          }
            </div>
          </div>
          
          <div className="block sm:hidden bg-white py-2 justify-center items-center text-center">
            <div className={isShowNav ? 'hidden' : 'flex flex-col'}>
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Rooms</a>
              <button onClick={()=> navigate("/map")} className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">What's nearby</button>
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Pricing</a>
              <div className="flex justify-center items-center border-t-2 pt-2">
              <a href="https://www.booking.com/hotel/ge/lamala-becho.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFKIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ApGB2psGwAIB0gIkNjQ4ODJlNWItNzM0MS00NTE2LTlmNGEtYWRhOWIwZDQ4ZTM22AIG4AIB&sid=8f8c99e3ef145dad63fb09499e7f2c2f&dest_id=-2326250&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1668710556&srpvid=e82c838dfe3a027f&type=total&ucfs=1&activeTab=main" className="bg-black text-white text-sm font-semibold border px-4 py-2 rounded-lg ">Book Hotel</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
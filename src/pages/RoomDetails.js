import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
//components
import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';
import ImageSlider from '../components/ImageSlider';
// context 

import ScrollToTop from '../components/ScrollToTop';

import { RoomContext } from '../context/RoomContext';
//icons
import { FaCheck } from 'react-icons/fa';
//scroll to top component

//styles 
const containerStyles={
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

//slides

const slides = [
{url:"https://www.fourseasons.com/alt/img-opt/~80.1860.8,4444-0,0000-2983,1111-1678,0000/publish/content/dam/fourseasons/images/web/NLN/NLN_782_original.jpg",
title:"Lounge Area"},
{url:"https://www.fourseasons.com/alt/img-opt/~80.1860.8,4444-0,0000-2983,1111-1678,0000/publish/content/dam/fourseasons/images/web/NLN/NLN_785_original.jpg",
title:"Closet"},
{url:"https://www.fourseasons.com/alt/img-opt/~80.1860.8,4444-0,0000-2983,1111-1678,0000/publish/content/dam/fourseasons/images/web/NLN/NLN_786_original.jpg",
title:"Bathroom"},
{url:"https://www.fourseasons.com/alt/img-opt/~80.1860.12,8889-0,0000-2974,2222-1673,0000/publish/content/dam/fourseasons/images/web/NLN/NLN_787_original.jpg",
title:"WorkSpace"},
{url:"https://www.fourseasons.com/alt/img-opt/~80.1860.0,0000-0,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NLN/NLN_788_original.jpg",
title:"Gym Area"},

];


const RoomDetails = () => {
  const { rooms } = useContext(RoomContext)
  const { id } = useParams();

  // get room

  const room = rooms.find(room => {
    return room.id === Number(id);

  });

  //destructure room
  const { name, description, facilities, imageLg, price } = room;

  console.log(room)
  return (<section >
    <ScrollToTop/>
    {/* banner */}
    <div className='bg-room bg-cover bg-center  items-center h-[560px] relative flex justify-center'>
      {/* overlay */}
      <div className='absolute w-full h-full bg-black/70'>
      </div>
      {/* title */}
      <h1 className='text-6xl text-white z-20 font-primary text-center' >
        {name} Details
      </h1>
    </div>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row h-full py-24 ">
        {/* left */}
        <div className="w-full h-full lg:w-[60%] px-6 ">
          <h2 className='h2 '>{name}</h2>
          <p className='mb-8'>{description}</p>
          {/* <img className='mb-8' src={imageLg} alt='' /> */}
          <div style={containerStyles}>
             <ImageSlider slides={slides}/>
          </div>

          {/* facilities */}
          <div className='mt-12'>
            <h3 className='h3 mb-3 '>
              Room Facilities
            </h3>
            <p className='mb-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non necessitatibus animi
              recusandae impedit. Commodi, fugiat.
              Amet delectus modi veniam harum repellendus. Consectetur minus sit, quaerat sunt iusto ab obcaecati!
            </p>
            {/* grid */}
            <div className='grid grid-cols-3 gap-6 mb-12'  >
              {facilities.map((item, index) => {
                // destructive item
                const { name, icon } = item;
                return <div className='flex items-center gap-x-3 flex-1' key={index}>
                  <div className='text-3xl text-accent'>{icon}
                  </div>
                  <div className='text-base text-accent'> {name}
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full h-full lg:w-[40%]">
          {/* reservation */}
          <div className='py-8 px-6 bg-accent/20 mb-12'>
            <div className='flex flex-col space-y-4 mb-4'>
              <h3>Your Reservation</h3>
              <div className='h-[60px]'>
                <CheckIn/>
              </div>
              <div className='h-[60px]'>
                <CheckOut/>
              </div>
              <div className='h-[60px]'>
                <AdultsDropdown/>
              </div>
              <div className='h-[60px]'>
                <KidsDropdown/>
              </div>
              <button className='btn btn-lg btn-primary p-5 w-full'>
                Book now for ${price}
              </button>
            </div>
          </div>
          {/* rules */}
          <div>
            <h3 className='h3'> Hotel Rules</h3>
            <p className='mb-6'> Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Rerum fugit recusandae cupiditate, aperiam eaque sint! </p>
            <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-in: 3:00 PM - 9:00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-out: 10:30 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
               No Pets
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                No Smoking
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    {/* <div style={containerStyles}>
      <ImageSlider slides={slides}/>
    </div> */}
   
  </section>
  );
};

export default RoomDetails;

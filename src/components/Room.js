import React from 'react';
//Link
import { Link } from 'react-router-dom';
// icons
import { BsArrowFullscreen, BsPeople } from 'react-icons';

const Room = ({ room }) => {

  //destructrure room
  const { id, name, image, size, maxPerson, description, price } = room;

  return <div className='bg-white shadow-lg min-h-[500px] group'>
    <div className='overflow-hidden'>
      <img className='group-hover:scale-110 transition-all duration-300 w-full'
        src={image}
        alt='' />
    </div>
    {/* {details} */}
    <div className='bg-white shadow-lg max-w-[300px] 
    mx-auto h-[60px]-translate-y-1/2 
    flex justify-center items-center uppercase
    font-tertiary tracking-tighter[1px] font-semibold text-base '>
      <div className='flex justify-between w-[80%]'>
        {/* {size} */}
        <div className='flex items-center gap-x-2'>
          {/* <div className='text-accent' >
            <BsArrowFullscreen className='text-[15px]' />
          </div> */}
          <div className='flex gap-x-1'>
            <div>Price </div>
            <div>${size}+ per night</div>
          </div>
        </div>

        {/* {people} */}
        <div className='flex items-center gap-x-2'>
          {/* <div className='text-accent' >
            <BsArrowFullscreen className='text-[15px]' />
          </div> */}
          <div className='flex gap-x-1'>
            <div>Max People </div>
            <div>{maxPerson}</div>
          </div>
        </div>
      </div>
    </div>
      {/* name */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className='h3 py-4'>
            {name}
          </h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>
          {description.slice(0, 56)}
        </p>

      </div>
      {/* button */}
      <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto' >
        Book now from ${price}
      </Link>
  </div>
    ;
};

export default Room;

import React, { useContext } from 'react';
// room content
import { RoomContext } from '../context/RoomContext';
///headless ui menu
import { Menu } from '@headlessui/react';
// icons
// import { BsChevronDown } from 'reaact-icons';

const lis = [
  { name: '1 Adults' },
  { name: '2 Adults' },
  { name: '3 Adults' },
  { name: '4 Adults' },
]
const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext)
  return (
  <Menu as='div'className='w-full h-full bg-white relative' >
    <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
     {adults}
      {/* chevrondown */}
    </Menu.Button>
    {/* items */}
    <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
      {lis.map((li, index) => {
        return (
        
        <Menu.Item
        onClick={ ()=> setAdults(li.name)}
        as='li' key={index}
        className='border-b last-of-type:border-b-0 h-12
        hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer
        '
        
        >
          {li.name}
        </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
  );
};

export default AdultsDropdown;

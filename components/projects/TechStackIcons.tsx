import React from 'react';
import nextIcon from '@/public/next.svg'
import Image from 'next/image'

interface TechStackIconProps {
  name: string;
  icon: string;
  color: string;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ name, color }) => {
  return (
      <span className={`bg-${color} min-w-16 text-gray-800 text-sm font-medium inline-flex items-center px-1 rounded border border-gray-500 `}>
        {name}
      </span>

  );
};

export default TechStackIcon;

{/* <TechStackIcons name="React" color="purple-500" icon="/img/avatar.svg"/> */}
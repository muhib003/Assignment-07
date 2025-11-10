import { Check } from 'lucide-react';
import React from 'react';

const ResolvedCard = ({resoTask}) => {
    const {title} = resoTask;
    return (
        <div className="p-4 shadow bg-white rounded space-y-5">
      <h3 className="text-[18px] font-medium">{title}</h3>
      <p className='text-[#02A53B] flex font-medium'><Check /> Completed</p>
    </div>
    );
};

export default ResolvedCard;
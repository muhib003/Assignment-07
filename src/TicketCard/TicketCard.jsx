import { CalendarMinus2, Circle } from "lucide-react";
import React from "react";

const TicketCard = ({ customer, handleCustomerTask }) => {
  const { title, status, description, id, priority, customer_name, createdAt } =
    customer;
  return (
    <div onClick={()=>handleCustomerTask(customer)} className="shadow p-4 bg-white rounded space-y-3 cursor-pointer">
      <div className="flex justify-between">
        <h4 className="font-medium text-lg">{title}</h4>
        <div
          className={`${
            status === "Open"
              ? "bg-[#B9F8CF] text-[#02A53B]"
              : "bg-[#F8F3B9] text-[#9C7700]"
          } font-medium px-5 space-x-2 flex items-center rounded-2xl`}
        >
          <Circle
            className={`${
              status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C] text-[#FEBB0C]"
            }  rounded-full size-3.5`}
          />
          <span>{status}</span>
        </div>
      </div>
      <p className="text-[#627382]">{description}</p>
      <div className="flex justify-between">
        <div className="space-x-2 text-[14px]">
          <span className="text-[#627382]">#{id}</span>
          <span className={`font-medium ${priority === "Critical" ? "text-[#F83044]" : priority === "High" ? "text-[#900808]" : "text-[#FEBB0C]"}`}>{priority} Priority</span>
        </div>
        <div className="flex space-x-2 text-[14px]">
          <span className="text-[#627382]">{customer_name}</span>
          <span className="flex gap-1 text-[#627382]">
            <CalendarMinus2 />
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

import React, { use, useState } from "react";
import Banner from "../components/Banner/Banner";
import TicketCard from "../TicketCard/TicketCard";
import TaskCard from "../TaskCard/TaskCard";
import ResolvedCard from "../ResolvedCard/ResolvedCard";
import { Bounce, toast } from "react-toastify";

const TicketsContainer = ({ promiseCustomers }) => {
  const customers = use(promiseCustomers);

  const [allCustomers, setAllCustomers] = useState(customers);
  const [customerTask, setCustomerTask] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleCustomerTask = (customer) => {
    toast.success("Your Ticket is Add to Task Status", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setCustomerTask([...customerTask, customer]);
  };

  const handleResolve = (task) => {
    toast.success("Your Task is Complete", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setResolvedTask([...resolvedTask, task]);
    const restTask = customerTask.filter((custTask) => custTask.id !== task.id);
    setCustomerTask(restTask);
    const restAllCustomers = allCustomers.filter(
      (custo) => custo.id !== task.id
    );
    setAllCustomers(restAllCustomers);
  };

  return (
    <div>
      {/* Banner Section */}
      <section>
        <Banner
          TotalTask={customerTask.length}
          totalResolved={resolvedTask.length}
        ></Banner>
      </section>

      <section className="w-11/12 mx-auto grid md:grid-cols-12 grid-cols-1 gap-9">
        {/* Customer Tickets Section */}
        <div className="md:col-span-8">
          <h2 className="text-2xl font-semibold mb-4">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allCustomers.map((customer) => (
              <TicketCard
                key={customer.id}
                customer={customer}
                handleCustomerTask={handleCustomerTask}
              ></TicketCard>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          {/* Task Card */}
          <div>
            <h4 className="font-semibold text-2xl mb-4">Task Status</h4>
            {customerTask.length === 0 ? (
              <p className="text-base text-[#627382] mt-4">
                Select a ticket to add to Task Status
              </p>
            ) : (
              <div className="space-y-2">
                {customerTask.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    handleResolve={handleResolve}
                  ></TaskCard>
                ))}
              </div>
            )}
          </div>

          {/* Resoled Task */}
          <div>
            <h4 className="font-semibold text-2xl mt-10">Resolved Task</h4>
            {resolvedTask.length === 0 ? (
              <p className="text-base text-[#627382] mt-4">
                No resolved tasks yet.
              </p>
            ) : (
              <div className="space-y-3">
                {resolvedTask.map((resoTask) => (
                  <ResolvedCard
                    key={resoTask.id}
                    resoTask={resoTask}
                  ></ResolvedCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketsContainer;

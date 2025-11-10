import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TicketsContainer from "./TicketsContainer/TicketsContainer";

const fetchCustomers = async () => {
  const res = await fetch("/customersData.json");
  return res.json();
};
const promiseCustomers = fetchCustomers();

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main className="bg-[#E5E7EB]">
        <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
          <TicketsContainer promiseCustomers={promiseCustomers}></TicketsContainer>
        </Suspense>
      </main>
    </>
  );
}

export default App;

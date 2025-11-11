import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TicketsContainer from "./TicketsContainer/TicketsContainer";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";

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

      <main className="bg-[#E5E7EB] pb-20">
        <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
          <TicketsContainer
            promiseCustomers={promiseCustomers}
          ></TicketsContainer>
        </Suspense>
      </main>

      <footer className="bg-black">
        <Footer></Footer>
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;

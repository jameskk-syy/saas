"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { addOns } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const data = addOns;

async function getPaymentModes() {
  const res = await axios('http://209.145.51.184/api/method/frappesaas.services.rest.get_modes_of_payment');
  return res.data;
}

async function getModulePrice() {
  const res = await axios('http://209.145.51.184/api/method/frappesaas.services.rest.get_price_per_module');
  return res.data;
}

async function getPaybill() {
  const res = await axios('http://209.145.51.184/api/method/frappesaas.services.rest.get_pesaswap_setting');

  return res.data;
}

const AddOns = () => {
  const { selected, setSelected, planPeriod,moduleimagePath } = useContext(SomeContext);
  const router = useRouter();
  const [amount,setAmount] = useState<any>(0);
  const [paymentMode, setPaymentMode] = useState(() => {
    // Attempt to load paymentmode from localStorage first
    const savedMode = localStorage.getItem("paymentMode");
    return savedMode ? JSON.parse(savedMode) : [];
  });
  const [moduleprice, setPrice] = useState<any>(()=>{
    const savedprice = localStorage.getItem("paymentMode");
     
    return savedprice? JSON.parse(savedprice) : 0;
  });
  const [phonenumber, setPhoneNumbers] = useState<any>(localStorage.getItem('phone'));
  const [apicall, setApiCall] = useState<any>("Mpesa");
  const customer = localStorage.getItem('company');
  const currency = localStorage.getItem('currency');
  const password = localStorage.getItem('passwordc');
  const email = localStorage.getItem('email');
  const country = localStorage.getItem('country');
  const [paybill, setPaybill] = useState<any>();
  const [loading, setLoading] = useState<any>(false)




  const [selectedModules, setSelectedModules] = useState(() => {
    const savedModules = localStorage.getItem("selectedModules");
    return savedModules ? JSON.parse(savedModules) : [];
  });
  function generateBillReference() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const length = 10;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }


  const billReference = generateBillReference();
  useEffect(() => {
    console.log("Selected Modules:", selectedModules);
  }, [selectedModules]);

  useEffect(() => {
    const pay = localStorage.getItem('paybill');
    const modepay = localStorage.getItem('paymentmode');
    const pricemodu = localStorage.getItem('moduleprice');

    async function getPaymentMode() {

      try {
        const datas = await getPaymentModes();
        const payBill = await getPaybill();
        const moduleprice = await getModulePrice();
        setPaymentMode(datas.message.modes_of_payment);
        setPrice(moduleprice.message);
        setAmount(selectedModules.length * moduleprice.message);
        setPaybill(payBill.message.paybill);
        localStorage.setItem('paybill', payBill.message.paybill);
        localStorage.setItem("paymentMode", JSON.stringify(datas.message.modes_of_payment)); 
        localStorage.setItem('moduleprice', JSON.stringify(moduleprice.message));
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }


    

      getPaymentMode();
    

  }, []);


  const handleChangePaymentMode = (paymentMode: any) => {

    setApiCall(paymentMode);


  };

  function validateKenyaPhoneNumber(number: any) {
    const { PhoneNumberUtil, PhoneNumberFormat } = require('google-libphonenumber');
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      const phoneNumber = phoneUtil.parse(number, 'KE');
      return phoneUtil.isValidNumber(phoneNumber);
    } catch (e) {
      return false;
    }
  }
  const billref = billReference;
  const mobile = phonenumber;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apicall === "") {
      toast.error("Choose Payment Mode");
    } else if (apicall === "Mpesa") {
      const data = { customer, currency, amount, billref, mobile, country, password, email };
      if (validateKenyaPhoneNumber(mobile)) {
        try {
          const res = await axios.post(`http://127.0.0.1:8004/api/method/frappesaas.services.rest.send_c2b_collection_payment`, data);
          if (res.status >= 200 && res.status < 300) {
            toast.success("Please proceed with payment");


          } else {
            toast.error("Something wrong occurred");
          }
        } catch (error) {
          console.error("Error in Axios request:", error);
          toast.error("Network or server error occurred");
        }
      } else {
        toast.error("Enter valid phone number")
      }
    } else if (apicall == "Airtel Money") {
      const data = { customer, currency, amount, billref, mobile };


    }
    else if (apicall == "Paybill") {

    }
    else {
      toast.error("Invalid payment method")
    }
  }

  //images for payment mode path

  const paymentimagePath = {
    "Mpesa": '/mpesa1.png',
    "Airtel Money": '/airtelmoney.png',
    "Paybill": '/Mpesa4.jpeg'
  }

  return (
    <>
    {loading ? (<div>Loading.......</div>):(<>
      <h3 className="title mb-1">Make Payment</h3>
      <ToastContainer position="top-right" />
      {selectedModules.length !== 0 ? (
        <div>
          <center><h3 className="text-warning mb-2">Selected Modules</h3></center>
          <div className="flex flex-wrap p-1">
            {selectedModules.map((module, index) => (
              <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/8 xl:w-1/5 h-15 m-1 bg-white shadow-sm">
                <div className={`align-center border-2 cursor-pointer ${selectedModules.includes(module) ? "border-Purplish-blue shadow-lg bg-opacity-100" : "border-Cool-gray"} flex rounded-lg p-2 border-none`}>
                  <img className="w-5 h-5 block image-mod" src={moduleimagePath[module]} alt="" />
                  <p className="text-primary plantext">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <form className="bg-white sm:w-[90%] lg:w-[50%] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <center className="mb-2"><h4>Pay Here</h4></center>
          <div className="flex justify-between mb-5">
            {paymentMode.map((paymode, index) => (
              <div key={index} className={`flex flex-col items-center p-2 ${paymode.mode_of_payment === paymentimagePath[paymode.mode_of_payment] ? 'bg-gray-200' : ''}`}
                onClick={() => handleChangePaymentMode(paymode.mode_of_payment)}>
                <img src={paymentimagePath[paymode.mode_of_payment]} alt={paymode.mode_of_payment} className="w-14 h-12" />
              </div>
            ))}
          </div>

          {apicall !== "Paybill" ? (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                {apicall === "Mpesa" ? "Enter Mpesa Number" : "Enter Airtel Number"}
              </label>
              <input
                id="phonenumber"
                type="text"
                value={phonenumber}
                onChange={(e) => setPhoneNumbers(e.target.value)}
                placeholder="Enter phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-3" htmlFor="paybill">
                Paybill Number:
              </label>
              {paybill}
              {/* <input
                id="paybill"
                type="text"
                value={paybill || "Paybill"} 
                placeholder="Paybill"
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /> */}
            </div>
          )}

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input id="amount"

              type="text" value={amount}
              disabled
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="200" />
          </div>
          <div className="flex items-center justify-center">
            <button className="btnsend" type="submit" disabled={amount == 0}>
              SEND
            </button>
          </div>
        </form>
      </div>
    </>)}
    </>
  );
};

export default AddOns;

"use client";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";
import { UseGlobalHook } from "../hooks/globalHook";
import { ToastContainer, toast } from "react-toastify";
import Link from 'next/link';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const data = personalInfo;

async function getCountries() {
  const res = await axios.get('https://endpoint.mtmm.sa///api/method/datacollection.service.rest.get_country_name');

  return res.data
}
async function getCurrency() {
  const res = await axios.get('https://endpoint.mtmm.sa///api/method/datacollection.service.rest.get_currency_type');

  return res.data
}
async function getLanguages() {
  const res = await axios.get('https://endpoint.mtmm.sa///api/method/datacollection.service.rest.get_language_name');

  return res.data
}

export default function PersonalInfo({ patternState }: any) {


  //declaring variables to  store responses
  const [countries, setCountries] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [currencies, setCurrencies] = useState<any[]>([]);
  const [country, setCountry] = useState<any>(localStorage.getItem('country') || '');
  const [language, setLanguage] = useState<any>(localStorage.getItem('language') || '');
  const [currency, setCurrency] = useState<any>(localStorage.getItem('currency') || '');
  const [company, setCompany] = useState<any>(localStorage.getItem('company') || '');
  const [phone, setPhone] = useState<any>(localStorage.getItem('phone') || '');
  const [email, setEmail] = useState<any>(localStorage.getItem('email') || '');
  const [passwordc, setPasswordc] = useState<any>(localStorage.getItem('passwordc') || '');
  const [passwordss, setPasswordss] = useState<any>(localStorage.getItem('passwordss') || '');
  const [savingstatus, setSavingStatus] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>();
  const [error, setError] = useState<any>();

  //storing users data to local storage


  useEffect(() => {
    localStorage.setItem('country', country || '');
    localStorage.setItem('language', language || '');
    localStorage.setItem('currency', currency || '');
    localStorage.setItem('company', company || '');
    localStorage.setItem('phone', phone || '');
    localStorage.setItem('email', email || '');
    localStorage.setItem('passwordc', passwordc || '');
    localStorage.setItem('password', passwordss || '');
  }, [country, language, currency, company, phone, email, passwordc, passwordss]);

  // console.log(languages);
  // console.log(currencies);
  //   const [countries, setCountries] = useState([]);
  //  console.log(countries);
  //   useEffect(() => {
  //     // Fetch data from your endpoint
  //     fetch('https://endpoint.mtmm.sa///api/method/datacollection.service.rest.get_country_name')
  //       .then(response => response.json())
  //       .then(data => {
  //         // Assuming data is an object with a 'message' property
  //         setCountries(data.message); // Accessing the 'message' property
  //       })
  //       .catch(error => console.error('Error fetching data:', error));
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCountries = await getCountries();
        const fetchedLanguages = await getLanguages();
        const fetchedCurrencies = await getCurrency();

        setCountries(fetchedCountries.message);
        setLanguages(fetchedLanguages.message);
        setCurrencies(fetchedCurrencies.message);
        //   languages.map((language,index)=>{
        //     if(index == 0){
        //       setLanguage(languages.findIndex(index))
        //     }
        //  });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  const { isPattern, name } = useContext<UseGlobalHook>(SomeContext);
  const [nameStatus, setName] = useState<string | undefined>(name);

  // console.log(name);
  const checkName = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[a-z ,.'-]+$/i;
    // upDateName(e.target.value);
    setName(e.target.value);
    setCompany(e.target.value)
    // console.log(nameStatus);
    isPattern == undefined
      ? null
      : (isPattern.name = pattern.test(e.target.value));
  };

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    //setting email state

    setEmail(e.target.value)
    isPattern == undefined
      ? null
      : (isPattern.email = pattern.test(e.target.value));
    console.log("Email:", e.target.value);
    console.log("Pattern match:", isPattern);
  };
  const checkPhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    //setting phone state

    setPhone(e.target.value)
    isPattern == undefined
      ? null
      : (isPattern.phoneNum = pattern.test(e.target.value));
  };

  const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    if (password == passwordss) {
      setErrors("");
      if (isPattern !== undefined) {
        // Check if passwords are the same
        // If passwords are the same, then apply pattern validation
        const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.{8,})/;
        isPattern == undefined
          ? null
          : (isPattern.password = pattern.test(e.target.value));
        if (isPattern.password = pattern.test(e.target.value)) {
          setPasswordc(password);
          setError("");
        }
        else {
          //password does not mtch pattern
          setError("Password must contain atleast 8 characters,special characters");
        }
      }
    } else {
      //password don't match
      setErrors("Password didn't match");
    }

  };



  // const checkSavingStatus = (status :boolean)=>{
  //   const pattern = status
  //   isPattern == undefined
  //   ? null 
  //   : (isPattern.status = pattern)
  // }
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Prepare data to send
  //   if (company && language && currency && password && phone && email && country && passwordc) {
  //     const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.{8,})/;

  //     //checking if password matches the expression

  //     if(password.match(pattern) && passwordc.match(pattern)){
  //       if(password == passwordc){
  //         const data = { company, language, currency, password, phone, email, country };

  //         try {
  //           // Send data to server
  //           const res = await axios.post('http://127.0.0.1:8002/api/method/frappesaas.frappesaas.doctype.registration.registration.register', {
  //             data: data
  //           });

  //           // Check if response is okay (status code 200)
  //           if (res.status === 200) {
  //             toast.success("Registration successful.\nClick Next Step",{
  //               className: "toast-message"
  //             });
  //             setSavingStatus(true)
  //           } else {
  //             // Handle other status codes if needed
  //             toast.error('Failed to submit form. Please try again.');
  //           }
  //         } catch (error) {

  //         }
  //       }
  //       else{
  //         toast.error("password didn't match")
  //       }
  //     }
  //     else{
  //       toast.error("password must contain uppercase, 8 characters and special characters",{
  //         className: "toast-message"
  //       })
  //     }
  //   }
  //   else {
  //     toast.error("Required fields");
  //   }
  // };

  const handleSubmit = (e: HTMLFormElement) => {
    alert("hello ")
  }
  return (
    <div className="shadow-lg lg:p-10 p-2" >

      <form >
        <ToastContainer position="top-right" />
        <div className="flex justify-center mb-2">
          <img src="/reg.png" alt="" className="reg" />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="Name" className="block ">
              Company Name :
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={company}
              onChange={(e) => checkName(e)}
              name="Name"
              required
              id="Name"
              placeholder="Upeo Soft Ltd"
            />
            {!patternState.name && (
              <p className="text-Strawberry-red ">name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="EmailAddress" className="block">
              Email Address :
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => checkEmail(e)}
              // value={email}
              id="EmailAddress"
              placeholder="upeosoft@g.ltd"
            />
            {!patternState.email && (
              <p className="text-Strawberry-red ">email is required</p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="PhoneNumber" className="block">
              Phone Number
            </label>
            <input
              type="text"
              required
              value={phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => checkPhoneNum(e)}
              name="PhoneNumber"
              placeholder={data.phoneInput}
              // value={phoneNum}
              id="PhoneNumber"
            />
            {!patternState.phoneNum && (
              <p className="text-Strawberry-red ">Phone number is required</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="PhoneNumber" className="block">
              Country :
            </label>
            <select id="countries"
              required
              onChange={(e) => setCountry(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {/* {!patternState.phoneNum && (
            <p className="text-Strawberry-red "></p>
          )} */}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="language" className="block">
              Language
            </label>
            <select
              id="language"
              required
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            >
              {languages.map((language, index) => (
                <option key={index} value={language.language_name}>
                  {language.language_name}
                </option>
              ))}
            </select>

            {/* {!patternState.phoneNum && (
            <p className="text-Strawberry-red ">language is required</p>
          )} */}
          </div>
          <div className="mb-4">
            <label htmlFor="currency" className="block">
              Currency
            </label>
            <select id="currency"
              required
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {currencies.map((currency, index) => (
                <option key={index} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
            {/* {!patternState.phoneNum && (
            <p className="text-Strawberry-red ">currency  is required</p>
          )} */}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="PhoneNumber" className="block">
              Password
            </label>
            <input
              type="password"
              required
              value={passwordss}
              onChange={(e) => setPasswordss(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              // value={phoneNum}
              id="PhoneNumber"

            />
            {!patternState.password && (
              <p className="text-Strawberry-red ">password is required</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="PhoneNumber" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e) => checkPassword(e)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:b
          order-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              // value={phoneNum}
              id="PhoneNumber"

            />
            {!patternState.password && (
              <p className="text-Strawberry-red ">password is required</p>
            )}
            {error ? (<p className="text-Strawberry-red">{error}</p>) : null}
            {errors ? (<p className="text-Strawberry-red">{errors}</p>) : null}

          </div>
          <div>
            <p>Aleardy have an account? <Link className="loginlink" href="/login">Login</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

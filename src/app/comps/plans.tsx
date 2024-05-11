import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { plans } from '../compsData/compsData';
import { SomeContext } from "../hooks/context";
import { UseGlobalHook } from "../hooks/globalHook";

const data = plans;

async function getModules() {
  const res = await axios.get('https://endpoint.mtmm.sa/api/method/datacollection.service.rest.get_modules');
  return res.data;
}

export default function Plans() {
  const { isPattern,clickedModules,setClickedModules,moduleimagePath} = useContext(SomeContext);
  const [modulename, setModule] = useState(() => {
    // Attempt to load modules from localStorage first
    const savedModules = localStorage.getItem("modulesData");
    return savedModules ? JSON.parse(savedModules) : [];
  });

 

  useEffect(() => {
    const fetchModules = async () => {
      try {
        // Check if the modules data already exists in localStorage
        const localData = localStorage.getItem("modulesData");
        
        // if (!localData) {
          const fetchedData = await getModules();
          setModule(fetchedData.message);
          localStorage.setItem("modulesData", JSON.stringify(fetchedData.message)); // Save to localStorage
        //}
      } catch (error) {
        console.error("Failed to fetch modules data:", error);
      }
    };

    fetchModules();
  }, []); // Empty dependency array to ensure this runs only once on component mount

  const handleOnClick = (e:any, moduleName:any) => {
    e.preventDefault();
    setClickedModules(prevState=> {
      const moduleExists = prevState.includes(moduleName);
      const updatedModules = moduleExists
        ? prevState.filter(module => module !== moduleName) // Remove if exists
        : [...prevState, moduleName]; // Add if not exists
      localStorage.setItem("selectedModules", JSON.stringify(updatedModules));
      return updatedModules;
    });
  };
 

  return (
    <>
      <div>
        <h1 className="title">{data.title}</h1>
        <div className="flex justify-center flex-wrap p-1 w-300px">
          {modulename.map((module, index) => (
            <div key={module.id} className="relative w-auto h-15 m-3 bg-white shadow-sm"> {/* Ensure each key is unique */}
              <div
                className={`align-center border-2 cursor-pointer ${clickedModules.includes(module.name) ? "border-Purplish-blue bg-Light-blue bg-opacity-100" : "border-Cool-gray"
                  } flex rounded-lg md:flex-col md:w-32 md:h-[100%] gap-2 p-2 justify-center items-center border-none`}
                onClick={(e) => handleOnClick(e, module.name)}
              >
                <img
                  className="md:w-[40%] block"
                  src= {moduleimagePath[module.name]}
                  alt=""
                />
                <p className="text-primary plantext">
                  {module.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

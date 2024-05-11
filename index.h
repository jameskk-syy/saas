  <div className="col-span-2">
          <div className="flex justify-center flex-wrap p-1">
            {modulename.map((modu, index) => (
              <div key={crypto.randomUUID()} className="relative w-auto h-13 m-2 bg-white shadow-sm">
                <div
                  className={`border-2 cursor-pointer ${selectedModules === modu.name ? "border-Purplish-blue bg-Light-blue bg-opacity-30" : "border-Cool-gray"
                    } flex rounded-lg md:flex-col md:w-32 md:h-[100%] gap-1 p-1 align-top border-none `}
                  onClick={(e) => handelClickOns(e, modu.name)}
                >
                  <img
                    className={`md:w-[40%] block  ? "self-start" : null}`}
                    src='./icon-pro.svg'
                    alt=""
                  />
                  <p className="text-primary">
                    {modu.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          {clickedModules.map((mod, index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{mod}</div>
                <p className="text-gray-700 text-base">
                  Some text describing the content of the card.
                </p>
              </div>
            </div>


          ))}
        </div>
      </div>
import React from "react";

function trending() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="grid grid-cols-6 gap-x-4 gap-y-1 max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-800"> Todays popular searches </p>
          </div>

          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/1/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              thick soup{" "}
            </p>
          </div>

          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/2/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              egg{" "}
            </p>
          </div>

          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/3/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              french toast{" "}
            </p>
          </div>

          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/4/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              bread{" "}
            </p>
          </div>

          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/5/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              pasta{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default trending;

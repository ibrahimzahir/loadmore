import React from "react";

function blog() {
  return (
    <div>
      <div className="h-screen flex flex-col gap-5 items-center justify-center bg-white">
        <card className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://events.duolingo.com/images/why_global.svg" />
            </div>

            <div className="col-span-4">
              <p className="text-gray-700 font-bold">
                {" "}
                Make Global Connections{" "}
              </p>
              <p className="text-gray-500 mt-4">
                {" "}
                Meet learners from around the world, build your reputation, and
                expand your network{" "}
              </p>
            </div>
          </div>
        </card>

        <card className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-4">
              <p className="text-gray-700 font-bold"> Create an impact </p>
              <p className="text-gray-500 mt-4">
                {" "}
                Share your language expertise and help learners have fun, relax,
                and speak confidently{" "}
              </p>
            </div>

            <div className="col-span-2">
              <img src="https://events.duolingo.com/images/why_impact.svg" />
            </div>
          </div>
        </card>

        <card className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://events.duolingo.com/images/why_access.svg" />
            </div>

            <div className="col-span-4">
              <p className="text-gray-700 font-bold"> Gain insider access </p>
              <p className="text-gray-500 mt-4">
                {" "}
                Enjoy access to Duolingo staff and learning materials,
                unreleased features, and a special profile badge{" "}
              </p>
            </div>
          </div>
        </card>
      </div>
    </div>
  );
}

export default blog;

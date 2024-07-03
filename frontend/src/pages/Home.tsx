import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid h-screen place-items-center bg-slate-200">
      <div className="flex flex-col jusytify-center">
        <div>
          <div className="text-xxl pb-[26px] ">
          <p className="text-gray-900 text-9xl font-serif text-center">MEDIUM</p>
            <div className="text-center pt-[26px]">
                <p>"Where thoughts become words, and words weave worlds. Welcome to the canvas of expression."</p>
            </div>
            </div>
          <div className="flex justify-center">
            <div>
            <Link to="/signup">
              <button
                type="button"
                className="w-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Sign Up
              </button>
              </Link>
            </div>
            <div>
              <Link to="/signin">
              <button
                type="button"
                className="w-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                Sign In
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

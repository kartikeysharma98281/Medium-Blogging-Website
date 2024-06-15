import { SignupInput } from "@kartik_17/medium-project-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
        });
    const Navigate = useNavigate()

async function SendRequest(){
    try{
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup" ?"signup": "signin"}`,postInputs)
        const {jwt} = response.data;
        localStorage.setItem("token" , jwt)
        Navigate("/blogs")
    }catch(e){  
        alert("error while signup"+ e) 
      } 
}

  return (
    
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl  font-extrabold">Create an account</div>
            <div className="text-slate-500">
                {type==="signin"? "Don't have an account? ":"Already have an account?"}
              
              <Link className="pt-2 pl-1 underline" to={type=="signin" ? "/signup" : "/signin"}>
                {type==="signin"?"Sign Up":"Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type==="signup" ?
            <LabbledInput
              label="Name"
              placeholder="abc"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                  });
                  }}
                  /> : null}
            <LabbledInput
              label="Username"
              placeholder="xyz@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                  });
                  }}
                  />
            <LabbledInput
              type={"password"}
              label="Password"
              placeholder=""
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                  });
                  }}
                  />
            <button
            onClick={SendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type==="signup"?"Sign Up":"Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabbledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabbledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabbledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

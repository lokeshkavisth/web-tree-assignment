import axios from "axios";
import { useEffect, useState } from "react";
import { User, Phone } from "lucide-react";

const App = () => {
  const [data, setData] = useState({
    name: {
      last: "",
      first: "",
    },
    phone: "",
    picture: {
      large: "",
    },
  });

  useEffect(() => {
    async function getData() {
      const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";

      const { data } = await axios.get(url);
      setData(data.results[0]);
      console.log(data.results[0]);
    }

    getData();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center w-screen gap-10">
      {/* Original Enhanced Design */}
      <div className="flex flex-col items-center">
        <div className="flex border-2 border-indigo-200 rounded-2xl shadow-lg bg-white p-8 max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <div className="w-28 h-28 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-indigo-200">
            {data.picture && (
              <img
                src={data.picture.large}
                alt={`${data.name?.first} ${data.name?.last}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="ml-8 flex flex-col justify-between">
            <div className="text-2xl font-extrabold text-indigo-800 mb-4 ">
              {data.name &&
                `${data.name.title} ${data.name.first} ${data.name.last}`}
            </div>
            <div className="text-sm text-gray-600 space-y-3 ">
              <p className="flex items-center bg-indigo-50 p-2 rounded-lg">
                <User className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-semibold text-indigo-700">
                  Gender:
                </span>{" "}
                <span className="ml-2 text-purple-600 font-medium">
                  {data.gender}
                </span>
              </p>
              <p className="flex items-center bg-indigo-50 p-2 rounded-lg">
                <Phone className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-semibold text-indigo-700">
                  Phone:
                </span>{" "}
                <span className="ml-2 text-purple-600 font-medium">
                  {data.phone}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Design */}
      <div className="flex flex-col items-center">
        <div className="flex border border-gray-200 rounded-lg shadow-sm bg-white p-6 max-w-md transition-all duration-300 hover:shadow-md">
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
            {data.picture && (
              <img
                src={data.picture.large}
                alt={`${data.name?.first} ${data.name?.last}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="ml-6 flex flex-col justify-between">
            <div className="text-xl font-medium text-gray-800 mb-3 ">
              {data.name &&
                `${data.name.title} ${data.name.first} ${data.name.last}`}
            </div>
            <div className="text-sm text-gray-600 space-y-2 ">
              <p className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gray-400" />
                <span className="font-medium text-gray-700">Gender:</span>{" "}
                <span className="ml-1 text-gray-600">{data.gender}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <span className="font-medium text-gray-700">Phone:</span>{" "}
                <span className="ml-1">{data.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Design */}
      <div className="flex flex-col items-center">
        <div className="flex border border-gray-700 rounded-xl shadow-lg bg-gray-800 p-7 max-w-md transition-all duration-300 hover:shadow-xl hover:bg-gray-750">
          <div className="w-26 h-26 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
            {data.picture && (
              <img
                src={data.picture.large}
                alt={`${data.name?.first} ${data.name?.last}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="ml-7 flex flex-col justify-between">
            <div className="text-2xl font-bold text-white mb-4 ">
              {data.name &&
                `${data.name.title} ${data.name.first} ${data.name.last}`}
            </div>
            <div className="text-sm text-gray-300 space-y-3 ">
              <p className="flex items-center bg-gray-700 p-2 rounded-md">
                <User className="w-5 h-5 mr-3 text-blue-400" />
                <span className="font-semibold text-gray-200">
                  Gender:
                </span>{" "}
                <span className="ml-2 text-purple-400 font-medium">
                  {data.gender}
                </span>
              </p>
              <p className="flex items-center bg-gray-700 p-2 rounded-md">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="font-semibold text-gray-200">Phone:</span>{" "}
                <span className="ml-2 text-purple-400 font-medium">
                  {data.phone}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

import { useRouter } from "next/router";

export default function Land() {
  const router = useRouter();

  const handleClick = async () => {
    router.push(`/auth`);
  };

  return (
    <div>
      <div className="relative h-screen">
        <img
          src="/images/meet.jpg"
          alt="login"
          className="px-8 bg-center h-screen mx-auto inset-0"
        />

        <div className="absolute top-0 left-0 w-full h-screen text-white bg-[#586c94] flex flex-col justify-center items-center align-center opacity-80">
          <h1 className="text-5xl p-4 m-4 font-bold">
            Work seamlessly with the perfect meeting app
          </h1>
          <h3 className="text-2xl">
            Communicate whenever, wherever, however you want
          </h3>
          <div className="flex flex-row">
            <button className="border border-white border-solid rounded-md py-2 px-4 mt-10 m-2.5 font-bold bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-blue-900 transition-colors duration-300" onClick={handleClick}>
              Get Started
            </button>
            {/* <button className="border border-white border-solid rounded-md py-2 px-4 mt-10 m-2.5 w-[100px] font-bold bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-blue-900 transition-colors duration-300">
              Login
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

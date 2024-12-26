export default function ReLoading({ desc }: { desc?: string }) {
  return (
    <>
      <div className="h-screen flex justify-center items-center  z-50  flex-col ">
        {desc ? (
          <p className=" px-5 py-2 text-lg  leading-none text-center text-blue-500 rounded-lg animate-pulse ">
            {desc}
          </p>
        ) : (
          <text className="fi fi-rr-rotate-right w-max h-max text-5xl text-blue-500 animate-spin">
            x
          </text>
        )}
      </div>
    </>
  );
}

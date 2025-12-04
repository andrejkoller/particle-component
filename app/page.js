export default function Home() {
  return (
    <div className="h-screen w-screen bg-white flex justify-center">
      <div className="w-115 h-110  p-5">
        <h1 className="text-4xl text-black font-playfair italic">Hey,</h1>

        <div className="w-full h-50 mt-3 rounded-md grid grid-cols-25 grid-rows-10">
          {Array.from({ length: 250 }).map((_, index) => (
            <div key={index} className="flex -inset-4">
              <p className="text-2xl font-bold text-neutral-400 transition-all duration-0 hover:text-black cursor-default hover:delay-0 delay-500 ease-in-out hover:scale-120 ">
                +
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 mb-2 tracking-tight text-[23px] font-ios text-neutral-800">
          We help <span className="italic"> founders </span> launch their site
          in 2 weeks from <span className="text-blue-500 ">copy,&nbsp;</span>{" "}
          <span className="text-red-500 ">brand,&nbsp;</span>{" "}
          <span className="text-green-500 ">tagline,&nbsp;</span>{" "}
          <span className="text-yellow-400 ">research,&nbsp;</span>{" "}
          <span className="text-purple-500 ">visual,&nbsp;</span>all done by us.
        </p>
        <p className="tracking-tighter text-neutral-400 font-playfair italic text-md">
          speed and building premium site is our superpower
        </p>

        <div className="flex gap-2">
          <button className="text-black font-playfair rounded-xl mt-3  border-2 border-neutral-200 py-1 px-3.5 italic text-[15px] font-semibold tracking-tight hover:border-neutral-400 transition-all duration-200 ">
            Book a call
          </button>

          <button className="text-white bg-black font-playfair rounded-xl mt-3 px-5 italic text-[15px] hover:bg-neutral-700 transition-all duration-200 tracking-tight">
            $9k/mo →
          </button>
        </div>
      </div>
    </div>
  );
}

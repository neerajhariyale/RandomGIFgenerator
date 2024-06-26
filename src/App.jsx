import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full h-full min-h-screen  flex flex-col background  items-center">
      <h1 className=" bg-white rounded-lg font-bold w-11/12 text-center mt-[40px]  px-10 py-2  text-4xl ">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

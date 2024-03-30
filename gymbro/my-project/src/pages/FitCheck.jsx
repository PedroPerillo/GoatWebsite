import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

export default function FitCheck() {
  return (
    <PageLayout>
      <div className="">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-32 shadow-2xl">
          <div className="text-4xl font-bold text-white font-serif">
            <h1>FitCheck</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <div class="p-10 basis-1/4 py-5 bg-violet-200 border-2 rounded-md m-5 text-left">
          <div class="text-2xl font-bold text-black font-serif">
          Instruction:
          </div>
          <ul>
            <br></br>
            <br></br>
            <li>Step 1: Turn on your device</li>
            <br></br>
            <br></br>
            <li>Step 2: Open the app</li>
            <br></br>
            <br></br>
            <li>Step 3: calibrate the divice</li>
            <br></br>
            <br></br>
            <li>Step 4: Start your workout</li>
            <br></br>
            <br></br>
            <li>Step 5: Position your gyro</li>
            <br></br>
            <br></br>
            <li>Step 6: Start your workout</li>


          </ul>
        </div>
        <div class="flex justify-center items-center basis-2/4 py-5 bg-violet-200 border-2 rounded-md m-5">
          <img className="size-auto ml-12" src="/1.jpg" alt="GymBro" />
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <div class="p-10 basis-1/4 py-5 bg-violet-200 border-2 rounded-md m-5 text-left">
        <div class="text-2xl font-bold text-black font-serif">
          Instruction:
          </div>
            <ul className=''>
                <br></br>
                <br></br>
                <li>Grade: Scale of A-F base on your performance</li>
                <br></br>
                <br></br>
                <li>Rep: It counts how many repititions you do</li>
                <br></br>
                <br></br>
                <li>Round: It shows how many sets you have left</li>
                <br></br>
                <br></br>
                <li>The tracking lines show you how your body moves</li>
                <br></br>
                <br></br>
                <li>Arrow: You can go back to the previous page</li>
                <br></br>
                <br></br>
                <li>Bottom right: It the setting where you can change your layout.</li>
            </ul>
        </div>
        <div class="basis-1/2 py-5 bg-violet-200 border-2 rounded-md m-5">
          <Link
            to="/Contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <img
                src="/FitCheckMockup.png"
                className="dark:hidden w-[272px] h-[572px]"
                alt=""
              />
              <img
                src="/FitCheckMockup.png"
                className="hidden dark:block w-[272px] h-[572px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

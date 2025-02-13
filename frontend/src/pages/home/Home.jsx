import { useEffect, useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";

const Home = () => {
    const [isActive, setIsActive] = useState(true);
	
    return (
        <div className="max-sm:w-[95%] h-[82%] ">
            <button
                className="ml-4 transition-all p-1 w-24 text-white font-bold rounded-xl cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg
				hidden max-sm:flex items-center justify-center"
                onClick={() => setIsActive(!isActive)}
            > <IoMdArrowRoundBack className="mr-2"/> Back
            </button>

            <div className="flex sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden max-sm:hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <Sidebar />
                <MessageContainer />
			</div>
                
			{/* Mobile View Logic */}
			<div className="max-sm:block sm:hidden max-sm:h-[100%]"> {/* Only visible on small screens */}
				{isActive ? <Sidebar setIsActive={setIsActive} isActive={isActive} className="h-[95%]"/> : 
				(<div className="flex h-[95%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-y-scroll">
					<MessageContainer />
				</div>)
				}
			</div>
			
        </div>
    );
};

export default Home;
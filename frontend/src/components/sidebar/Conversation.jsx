import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { useEffect, useState } from "react";

const Conversation = ({ conversation, lastIdx, emoji,isActive, setIsActive }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	// console.log(selectedConversation)
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640); // Adjust breakpoint if needed

	useEffect(() => {
		const handleResize = () => {
		setIsSmallScreen(window.innerWidth <= 640);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize); // Clean up
	}, []);

	const handleClick = () => {
		if (isSmallScreen) {  // Only update state if on a small screen
			setIsActive(!isActive);
		}
	  };

	return (
		<div >
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={async () => {
					await setSelectedConversation(conversation);
					handleClick(); 
				}}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</div>
	);
};
export default Conversation;

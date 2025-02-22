import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-green-500 flex justify-end ml-12 text-white" : "bg-white text-black mr-12";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className={`chat-image avatar ${fromMe&&"flex justify-end "}`}>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble w-[80%] flex items-center rounded-xl ${bubbleBgColor} ${shakeClass} p-1 pl-2 pr-2 mt-1 `}>{message.message}</div>
			<div className={`chat-footer opacity-50 text-gray-300 text-xs flex gap-1 items-center
				 ${fromMe&&"flex justify-end"}`}>{formattedTime}</div>
		</div>
	);
};
export default Message;

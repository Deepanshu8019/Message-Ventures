import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({isActive, setIsActive}) => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations setIsActive={setIsActive} isActive={isActive} />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

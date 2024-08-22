import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

type PropTypes = {
    lists: Array<{
        title: string;
        url: string;
        icons: string;
    }>;
}

const Sidebar = (props: PropTypes) => {
    const {lists} = props;
    const {pathname} = useRouter();
    return (
        <div className="bg-black text-white p-5 w-[19vw] h-screen flex justify-between flex-col">
            <div className="">
                <h1 className="mb-10 text-[4vh] font-semibold text-center">Admin Panel</h1>
                <div className="flex flex-col gap-2 font-semibold">
                    {lists.map((list, index) => (
                        <Link href={list.url} key={list.title} className={`${pathname === list.url ? 'bg-white text-black' : ''} flex items-center rounded-[8px] gap-3 text-[2.4vh] py-2.5 px-4 hover:bg-white hover:text-black transition-all duration-500 ease-in-out`}>
                            <i className={`bx ${list.icons} text-[4vh]`} />
                            <h4 className="text-[1.9vh]">{list.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="">
                <Button type="button" onClick={() => signOut()} className="text-black bg-white font-semibold rounded-[8px]">Logout</Button>
            </div>
        </div>
    )
}

export default Sidebar;
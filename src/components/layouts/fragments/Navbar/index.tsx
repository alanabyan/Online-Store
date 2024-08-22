import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const {data} = useSession();

    return (
       <div className="fixed flex items-center justify-end w-full h-20 bg-black text-white p-5">
            <button className="bg-white border-none py-3 px-4 text-black" onClick={() => data ? signOut() : signIn()}>
                {data ? 'Logout' : 'Login'}
            </button>
       </div>
    )
}
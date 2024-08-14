
import { signIn } from "next-auth/react";
import Link from "next/link"
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    const { push, query } = useRouter();

    const callbackUrl : any= query?.callbackUrl || '/';
    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        const form = event.target as HTMLFormElement;
         try {
            const res = await signIn('credentials', {
                redirect: false,
                email : form.email.value,
                password : form.password.value,
                callbackUrl
            });

            if (!res?.error) {
                setIsLoading(false);
                form.reset();
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
         } catch (error) {
            setIsLoading(false);
            setError("Email or password is incorrect");
         }
    }

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center w-[100vw]">
            <h1 className="text-[32px] mt-2.5">Login</h1>
            {error && <p className="text-[#fd3131] mb-2.5">{error}</p>}
            <div className="w-[30%] p-5 mb-5 shadow-[0_0_3px_rgba(0,0,0,0.5)]">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col my-5 mx-0">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" className="p-2.5 bg-[#eee] mt-[5px] border-none outline-none" />
                    </div>
                    <div className="flex flex-col my-5 mx-0">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" className="p-2.5 bg-[#eee] mt-[5px] border-none outline-none" />
                    </div>
                    <button type="submit" className="bg-black text-white w-full p-2.5 border-none">{isLoading ? 'Loading...' : 'Login'}</button>
                </form>
            </div>
            <p className="">Don{"'"}t have an account? Sign up <Link href={'/auth/register'} className="text-[#23bebe]">here</Link></p>
        </div>
    )
}

export default LoginView;
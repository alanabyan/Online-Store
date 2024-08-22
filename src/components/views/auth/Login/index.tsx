
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
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
    };

    return (
        <AuthLayout title="Login" link="/auth/register" linkText="Don't have an account? Sign up ">
            <form onSubmit={handleSubmit}>
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                <Button className="text-white" type="submit">{isLoading ? 'Loading...' : 'Login'}</Button>
            </form>
            <hr className="my-5" />
            <div className="w-full">
                <Button type="button" onClick={() => signIn('google', {callbackUrl, redirect: true})} className="gap-2 text-white">
                    <i className='bx bxl-google text-[24px]' />Login With Google
                    </Button>
            </div>
        </AuthLayout>
    )
}

export default LoginView;
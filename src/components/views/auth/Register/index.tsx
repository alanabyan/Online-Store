import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link"
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { push } = useRouter()
    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        const form = event.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value,
        };

        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (result.status === 200) {
            form.reset();
            setIsLoading(false);
            push('/auth/login')
        } else {
            setIsLoading(false);
            setError('Email is already registered');
            console.log('error');
        }
    }

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center w-[100vw]">
            <h1 className="text-[32px] mt-2.5">Register</h1>
            {error && <p className="text-[#fd3131] mb-2.5">{error}</p>}
            <div className="w-[30%] p-5 mb-5 shadow-[0_0_3px_rgba(0,0,0,0.5)]">
                <form onSubmit={handleSubmit}>
                    <Input label="Email" name="email" type="email"  />
                    <Input label="Fullname" name="fullname" type="text"  />
                    <Input label="Phone" name="phone" type="number"  />
                    <Input label="Password" name="password" type="password"  />
                    <Button type="submit">{isLoading ? 'Loading...' : 'Register'}</Button>
                </form>
            </div>
            <p className="">Have an account? Sign in <Link href={'/auth/login'} className="text-[#23bebe]">here</Link></p>
        </div>
    )
}

export default RegisterView
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {authServices} from "@/services/auth/index";
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
    
        const result = await authServices.registerAccount(data);
       

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
        <AuthLayout title="Register" error={error} link="/auth/login" linkText="Have an account? Sign in? ">
            <form onSubmit={handleSubmit}>
                <Input label="Email" name="email" type="email"  />
                <Input label="Fullname" name="fullname" type="text"  />
                <Input label="Phone" name="phone" type="number"  />
                <Input label="Password" name="password" type="password"  />
                <Button className="text-white" type="submit">{isLoading ? 'Loading...' : 'Register'}</Button>
            </form>
        </AuthLayout>
    )
}

export default RegisterView
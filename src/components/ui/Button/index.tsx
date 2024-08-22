import { signIn } from "next-auth/react";

type PropsTypes = {
    type: "button" | "submit" | undefined;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button = (props: PropsTypes) => {
    const {type, onClick, children, className} = props;

    return (
        <button type={type} onClick={onClick} className={`w-full bg-black p-2.5 border-none items-center text-center flex justify-center ${className}`}>
            {children}
        </button>
    );
}

export default Button
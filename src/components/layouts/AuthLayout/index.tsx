import Link from "next/link";

type PropsTypes = {
    error?: string;
    title?: string;
    children: React.ReactNode;
    link: string;
    linkText?: string
}

const AuthLayout = (props: PropsTypes) => {
    const {error, title, children, link, linkText} = props;
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center w-[100vw]">
            <h1 className="text-[32px] mt-2.5">{title}</h1>
            {error && <p className="text-[#fd3131] mb-2.5">{error}</p>}
            <div className="w-[30%] p-5 mb-5 shadow-[0_0_3px_rgba(0,0,0,0.5)]">
                {children}
            </div>
            <p className="">{linkText}<Link href={link} className="text-[#23bebe]">here</Link></p>
        </div>
    )
}

export default AuthLayout;
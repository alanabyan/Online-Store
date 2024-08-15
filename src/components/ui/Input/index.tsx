type PropsTypes = {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
}

const Input = (props: PropsTypes) => {
    const {label, name, type, placeholder } = props; 
    return (
        <div className="flex flex-col my-5 mx-0">
            {label && <label htmlFor={name} className="text-sm">{label}</label>}
            <input name={name} id={name} type={type} placeholder={placeholder} className="p-2.5 bg-[#eee] mt-[5px] border-none outline-none" />
        </div>
    )
};

export default Input;
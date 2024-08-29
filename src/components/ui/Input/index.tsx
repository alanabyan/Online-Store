type PropsTypes = {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
}

const Input = (props: PropsTypes) => {
    const {label, name, type, placeholder, defaultValue, disabled } = props; 
    return (
        <div className="flex flex-col my-5 mx-0">
            {label && <label htmlFor={name} className="text-sm">{label}</label>}
            <input name={name} id={name} type={type} placeholder={placeholder} defaultValue={defaultValue} disabled={disabled} className="p-2.5 bg-[#eee] mt-[5px] border-none outline-none" />
        </div>
    )
};

export default Input;
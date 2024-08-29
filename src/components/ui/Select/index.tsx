type option = {
    label: string;
    value: string;
}

type PropsTypes = {
    label?: string;
    name: string;
    defaultValue?: string;
    disabled?: boolean;
    options: option[];
}

const Select = (props: PropsTypes) => {
    const {label, name, defaultValue, disabled, options } = props; 


    return (
        <div className="flex flex-col my-5 mx-0">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} defaultValue={defaultValue} disabled={disabled} className="p-3.5 bg-[#eee] mt-1.5 border-none outline-none">
                {options.map((option) => (
                    <option value={option.value} key={option.label}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
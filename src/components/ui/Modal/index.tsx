import { useEffect, useRef } from "react";

const Modal = ({children, onClose} : {children : React.ReactNode, onClose : any}) => {
    const ref: any = useRef();

    useEffect(() => {
        const handelClickOutside = (event : any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handelClickOutside);
        return () => {
            document.removeEventListener('mousedown', handelClickOutside);
        };
    }, [onClose])
    return (
        <div className="w-full top-0 fixed h-full z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="bg-white p-5 w-1/2 max-h-[80vh]" ref={ref}>
                {children}
            </div>
        </div>
    )
};

export default Modal;
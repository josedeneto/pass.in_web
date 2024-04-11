import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'>{
    transparent?:boolean
}

export function IconButton({transparent,...props}:IconButtonProps){
    return (
        <button {...props}  className={transparent?'btn-more':'btn-pag'}/>
    );
}


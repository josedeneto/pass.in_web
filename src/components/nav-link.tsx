import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'>{
    children:string
    href:string
}
export function Navlink(props:NavLinkProps){
    return (
        <a {...props} href={props.href}>{props.children}</a> 
    );

}
import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<'th'> {
   pagination?:boolean
}

export function TableCell({pagination,...props}:TableCellProps) {
    return (
        <td {...props} className={pagination?"tfoot-td-right":''} /> 
    );
}
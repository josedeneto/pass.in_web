import { ComponentProps } from "react";

interface TableComponent extends ComponentProps<'table'>{}
export function Table(props:TableComponent){
    return(
        <div className="container-table">
       <table className="table-list" {...props}></table>
       </div>
    )
}
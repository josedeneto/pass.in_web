import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table-component"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { ChangeEvent, useState } from "react"
import { attendees } from "../assets/data/attendeed"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')
export function AttendeeList() {
    let [search,setName] = useState('');
    let [page, setPage] = useState(1);
    const totalPage = Math.ceil(attendees.length/10);
    function onSearchInput(event:ChangeEvent<HTMLInputElement>){
    setName(event.target.value);
    }

    function nextPage(){
        setPage(page+1)
    }
    function previousPage(){
        setPage(page-1)
    }
    function goToFirstPage(){
        setPage(1)
    }
    function goToLastPage(){
        setPage(totalPage)
    }
    return (
        <div className="attendee-container">
            <div className="attendeed">
                <h1>Participantes</h1>
                <div className="search">
                    <Search className="icon-search" />
                    <input onChange={onSearchInput} className="search-bar" type="text" placeholder="Buscar participante..." />
                  
                </div>
                {search} 
            </div>
            <div className="list-participants">
                <Table>
                    <thead>
                        <tr className="table-cabecalho-row">
                            <TableHeader style={{ width: 48 }}>
                                <input type="checkbox" />
                            </TableHeader>
                            <TableHeader>
                                Código
                            </TableHeader>
                            <TableHeader>
                                Participante
                            </TableHeader>
                            <TableHeader>
                                Data de inscrição
                            </TableHeader>
                            <TableHeader>
                                Data de check-in
                            </TableHeader>
                            <TableHeader>

                            </TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        
                           {attendees.slice((page-1)*10, page*10).map((attendee

                           ) => {
                                return (
                                    <tr key={attendee.id} className="tbody-tr">
                                        <TableCell><input type="checkbox" /></TableCell>
                                        <TableCell>{attendee.id}</TableCell>
                                        <TableCell>
                                            <div>
                                                <span className="name-participant">{attendee.name}</span>
                                                <span>{attendee.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{dayjs().to(attendee.checkedAt)}</TableCell>
                                        <TableCell>{dayjs().to(attendee.checkedAt)}</TableCell>
                                        <TableCell style={{ width: 50 }}><IconButton transparent><MoreHorizontal className="btn-more-icon" /></IconButton></TableCell>

                                    </tr>

                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableCell pagination={false} colSpan={3}>Mostrando 10 de {attendees.length} itens</TableCell>
                            <TableCell pagination={true} colSpan={3}>
                                <div className="pagination">
                                    <span>Página {page} de {totalPage}</span>
                                    <div className="pagination-icons">
                                        <IconButton onClick={goToFirstPage} disabled={page===1}><ChevronsLeft className="btn-more-icon" /></IconButton>
                                        <IconButton onClick={previousPage} disabled={page===1}><ChevronLeft className="btn-more-icon" /></IconButton>
                                       
                                        <IconButton onClick={nextPage} disabled={page=== totalPage}><ChevronRight className="btn-more-icon" /></IconButton>
                                        <IconButton onClick={goToLastPage} disabled={page=== totalPage}><ChevronsRight className="btn-more-icon" /></IconButton>
                                    </div>
                                </div>
                            </TableCell>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </div>
    )
}
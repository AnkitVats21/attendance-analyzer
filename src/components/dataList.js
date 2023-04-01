import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from "next/router";

const tableHeader = [
    'Name', 'Current Strength', 'Total Strength'
]


export default function DataList(props) {
    const router = useRouter()
    const hrefDecider = (id) => {
        if (props.type === 'venue') {
            return `venue/${id}`
        }
        const query = router.query
        if (query.branchId)
            return `${query.branchId}/section/${id}`
        // else
        return `classes/branch/${id}`
    }
    return <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableHeader.map((header) => <>
                            <TableCell>{header}</TableCell>
                        </>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link href={hrefDecider(row.id)}>
                                    {row.name}
                                </Link>
                            </TableCell>
                            <TableCell>75</TableCell>
                            <TableCell>80</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

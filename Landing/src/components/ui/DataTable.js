'use client'
import { useState, useMemo } from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export default function DataTable({ rows, columns, searchable = true, pageSize = 8, dense }) {
  const [page, setPage] = useState(0)
  const [rpp, setRpp] = useState(pageSize)
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    if (!q) return rows
    const s = q.toLowerCase()
    return rows.filter((r) => Object.values(r).some((v) => typeof v === 'string' && v.toLowerCase().includes(s)))
  }, [rows, q])

  const visible = filtered.slice(page * rpp, page * rpp + rpp)

  return (
    <Box>
      {searchable && (
        <Box sx={{ p: 2, maxWidth: 360 }}>
          <TextField placeholder="Search..." value={q} onChange={(e) => { setQ(e.target.value); setPage(0) }}
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment> } }} />
        </Box>
      )}
      <TableContainer>
        <Table size={dense ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>{columns.map((c) => <TableCell key={c.key || c.label} align={c.align}>{c.label}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {visible.map((r, i) => (
              <TableRow key={r.id ?? i} hover>
                {columns.map((c) => <TableCell key={c.key || c.label} align={c.align}>{c.render ? c.render(r, i) : r[c.key]}</TableCell>)}
              </TableRow>
            ))}
            {visible.length === 0 && <TableRow><TableCell colSpan={columns.length} align="center">No records found</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination component="div" count={filtered.length} page={page} onPageChange={(_, p) => setPage(p)}
        rowsPerPage={rpp} onRowsPerPageChange={(e) => { setRpp(+e.target.value); setPage(0) }} rowsPerPageOptions={[5, 8, 10, 25]} />
    </Box>
  )
}

import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
];

export default function Master() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440, overflowX: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user && (
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

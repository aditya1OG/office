import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem } from '@mui/material';

const Example = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                enableColumnPinning: false,
                header: 'ID',
                size: 50,
            },
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'middleName',
                header: 'Middle Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 300,
            },
            {
                accessorKey: 'city',
                header: 'City',
            },
            {
                accessorKey: 'state',
                header: 'State',
            },
            {
                accessorKey: 'country',
                header: 'Country',
            },
        ],
        []
    );

    // Define your custom data object here as an array of objects
    const customData = [
        { id: 1, firstName: 'John', middleName: 'Doe', lastName: 'Smith', address: '123 Main St', city: 'New York', state: 'NY', country: 'USA' },
        { id: 2, firstName: 'Jane', middleName: 'Lee', lastName: 'Brown', address: '456 Elm St', city: 'Los Angeles', state: 'CA', country: 'USA' },
    ];

    const table = useMaterialReactTable({
        columns,
        data: customData,
        enableColumnPinning: true,
        enableRowActions: true,
        
        layoutMode: 'grid-no-grow',
        renderRowActionMenuItems: () => [<MenuItem key="action">Action</MenuItem>],
        initialState: {
            columnPinning: { left: ['mrt-row-actions', 'state'] },
        },
    });

    return <MaterialReactTable table={table} size='small'/>;
};

export default Example;

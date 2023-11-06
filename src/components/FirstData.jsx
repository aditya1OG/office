import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

export default function FirstData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else {
            return 'N/A';
        }
    };

    return (
        <div className="h-full flex items-center justify-center bg-white mt-10 p-10" style={{ overflow: "hidden" }}>
            <DataTable
                value={data}
                scrollable
                scrollHeight="auto"
                style={{ overflow: "auto", display: 'block' }}
                className="w-full rounded-lg"
            >
                <Column field="name" header="Name" style={{ minWidth: '150px', minHeight: '30px', background: 'white' }} frozen className="font-bold flex flex-col gap-10" />
                <Column field="id" header="Id" style={{ minWidth: '100px', minHeight: '100px' }} />
                <Column field="name" header="Name" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="address.city" header="City" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="address.city" header="State" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="address.city" header="Country" style= {{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="company.name" header="Company" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="status" header="Status" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="activity" header="Activity" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px', minHeight: '100px' }} />
                <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px', minHeight: '100px' }} alignFrozen="right" />
            </DataTable>
        </div>
    );
};

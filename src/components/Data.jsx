import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableForm = () => {
    const mockCustomers = [
        {
            id: 1,
            name: 'John Doe',
            country: { name: 'USA' },
            date: '2023-01-15',
            company: 'ABC Inc',
            status: 'Active',
            activity: 'Online',
            representative: { name: 'Alice' },
            balance: 1000.25,
        },
        {
            id: 2,
            name: 'Adam Doe',
            country: { name: 'USA' },
            date: '2023-01-15',
            company: 'ABC Inc',
            status: 'Active',
            activity: 'Online',
            representative: { name: 'Alice' },
            balance: 1000.25,
        },
    ];

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className=" h-64 flex items-center justify-center bg-white p-10" style={{ overflow: "hidden" }}>
            <DataTable
                value={mockCustomers}
                scrollable
                scrollHeight="auto"
                style={{ overflow: "auto", display: 'block' }}
                className="w-full rounded-lg"
            >
                <Column
                    field="name"
                    header="Name"
                    style={{ minWidth: '150px', minHeight: '30px', background: 'white' }}
                    frozen
                    className="font-bold flex flex-col gap-10"
                ></Column>
                <Column field="id" header="Id" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '100px', minHeight: '100px' }}></Column>
                <Column
                    field="representative.name"
                    header="Representative"
                    style={{ minWidth: '100px', minHeight: '100px' }}
                ></Column>
                <Column
                    field="balance"
                    header="Balance"
                    body={balanceTemplate}
                    style={{ minWidth: '100px', minHeight: '100px' }}
                    alignFrozen="right"
                ></Column>
            </DataTable>
        </div>
    );
};



export default TableForm;



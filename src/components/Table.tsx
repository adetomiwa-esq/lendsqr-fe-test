import { useState } from 'react'
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { RiExpandUpDownLine } from 'react-icons/ri'
import "./Table.scss"


type User =  {
    id?: string;
    organization?: string,
    username?: string;
    email?: string;
    dateJoined?: string;
    phone?: string;
    status?: string;
}

const columnHelper = createColumnHelper<User>()

const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor("organization", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                Organization <RiExpandUpDownLine />
            </span>
        )
    }),

    columnHelper.accessor("username", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                Username <RiExpandUpDownLine />
            </span>
        )
    }),

    columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                EMAIL <RiExpandUpDownLine />
            </span>
        )
    }),

    columnHelper.accessor("phone", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                PHONE NUMBER <RiExpandUpDownLine />
            </span>
        )
    }),


    columnHelper.accessor("dateJoined", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                DATE JOINED <RiExpandUpDownLine />
            </span>
        )
    }),

    columnHelper.accessor("status", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                STATUS <RiExpandUpDownLine />
            </span>
        )
    }),
]

function Table() {

    const tableData: User[] = [
        {
            "id": '019834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Active'
        },
    ]

    const [data, setData] = useState([...tableData])

    // const [sorting, setSorting] = useState([])
    const [globalFilter, setGlobalFilter] = useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
            // sorting,
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        // onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel()
    })

    
  return (
    <div className='table-container'>
        <table className="table">
        <thead className="bg-[#F3F3F3]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header} */}
                    <div {...{
                                                className: header.column.getCanSort()
                                                ? "cursor-pointer select-none flex items-center"
                                                : "",
                                                onClick: header.column.getToggleSortingHandler()
                                            }}>
                                                {
                                                    flexRender(
                                                        header.column.columnDef.header, header.getContext()
                                                    )
                                                }
                                            </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="tb ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='tb-row hover:bg-gray-50 border-b border-b-[#E4E4E4]'>
              {/* {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {cell.renderCell()}
                </td>
              ))} */}
              {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            }
                                        </td>
                                    ))
                                }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table


// {
    //     accessorKey: "id", // Accesses `id` from the `User` type
    //     header: "ID",
    //   },
    //   {
    //     accessorKey: "name", // Accesses `name` from the `User` type
    //     header: "Name",
    //   },
    //   {
    //     accessorKey: "email", // Accesses `email` from the `User` type
    //     header: "Email",
    //   },
    //   {
    //     accessorKey: "dateJoined", // Accesses `email` from the `User` type
    //     header: "Date Joined",
    //   },
    //   {
    //     accessorKey: "phone", // Accesses `email` from the `User` type
    //     header: "Phone",
    //   },
    //   {
    //     accessorKey: "status", // Accesses `email` from the `User` type
    //     header: "Status",
    //   },
    //   {
    //     accessorKey: "organization", // Accesses `age` from the `User` type
    //     header: "Age",
    //     cell: (info) => <span>{info.getValue<number>()} years</span>,
    //   }
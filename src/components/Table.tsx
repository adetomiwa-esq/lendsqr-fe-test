import { useState } from 'react'
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import "./Table.scss"
import { FaEllipsisVertical } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FiUserX } from 'react-icons/fi'
import { GrUserExpert } from 'react-icons/gr'
import { IoEyeOutline, IoFilter } from 'react-icons/io5'


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

const columns: ColumnDef<User, undefined>[] = [
    columnHelper.accessor("organization", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                Organization <IoFilter />
            </span>
        )
    }),

    columnHelper.accessor("username", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                Username <IoFilter />
            </span>
        )
    }),

    columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                EMAIL <IoFilter />
            </span>
        )
    }),

    columnHelper.accessor("phone", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                PHONE NUMBER <IoFilter />
            </span>
        )
    }),


    columnHelper.accessor("dateJoined", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                DATE JOINED <IoFilter />
            </span>
        )
    }),

    columnHelper.accessor("status", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="table-title">
                STATUS <IoFilter />
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
            "id": '039834',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '0198354',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019534',
            "organization": "",
            "username": 'Babatunde Gabriel',
            "email": 'babatundegabriel@gmail.com',
            "dateJoined": 'Jan 6 2024',
            "phone": '+234 126813804',
            "status": 'Inactive'
        },
        {
            "id": '019835',
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

    const [userId, setUserId] = useState<string|undefined>("")
    const [displayFilterModal, setDisplayFilterModal] = useState(false)

    const body = document.querySelector('body')

    body?.addEventListener('click', () => {
        setUserId("")
        setDisplayFilterModal(false)
    })

    function toggleUserEditModal(id: string | undefined){
        if(id === userId){
            setUserId("")
        } else{
            setUserId(id)
        }
    }

    function showFilterModal(){
        setDisplayFilterModal(true)
    }
        
    
  return (
    <div className='table-container'>
        <table className="table">
        <thead className="bg-[#F3F3F3]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="table-head px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header} */}
                    <div {...{
                                                className: header.column.getCanSort()
                                                ? "cursor-pointer select-none flex items-center"
                                                : "",
                                                onClick: header.column.getToggleSortingHandler()
                                            }} onClick={(e) => {
                                                e.stopPropagation()
                                                showFilterModal()
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

                                <td className='ellipsis-container' onClick={(e) => {
                                    e.stopPropagation()
                                }}>
                                    <FaEllipsisVertical onClick={() => {
                                    
                                    toggleUserEditModal(row.original.id)
                                    }} className='ellipsis' />

                                    {/* ******************* edit user status modal ********************* */}
                                    <div className={`edit-user-status ${userId === row.original.id ? 'reveal-user-status-modal' : ''}`}>
                                        <Link to={``}>
                                            <span><IoEyeOutline /></span>
                                            <span>View Details</span>
                                        </Link>
                                        <div>
                                            <span><FiUserX /></span>
                                            <span>Blacklist User</span>
                                        </div>
                                        <div>
                                            <span><GrUserExpert /></span>
                                            <span>Activate User</span>
                                        </div>
                                    </div>
                                </td>
            </tr>
          ))}
        </tbody>

        
      </table>

      {/* ********************** Reset filter modal form***************************** */}
      <form action="" className={`set-filter ${displayFilterModal ? 'display-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="data-container">
                <label htmlFor="">Organization</label>
                <select name="" id="" className="data-field">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="data-container">
                <label htmlFor="">Username</label>
                <input type="text" name="" placeholder='User' className="data-field" id="" />
            </div>

            <div className="data-container">
                <label htmlFor="">Email</label>
                <input type="email" name="" placeholder='Email' className="data-field" id="" />
            </div>

            <div className="data-container">
                <label htmlFor="">Date</label>
                <input type="date" name="" placeholder='Date' className="data-field" id="" />
            </div>

            <div className="data-container">
                <label htmlFor="">Phone Number</label>
                <input type="text" name="" placeholder='Phone Number' className="data-field" id="" />
            </div>

            <div className="data-container">
                <label htmlFor="">Status</label>
                <select name="" id="" className="data-field">
                    <option value="">Select</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Table
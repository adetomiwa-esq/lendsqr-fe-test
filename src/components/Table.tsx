import { useEffect, useState } from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel,getPaginationRowModel, useReactTable } from '@tanstack/react-table'
// import type { ColumnDef } from "@tanstack/react-table";
// import "./Table.scss"
import { FaEllipsisVertical } from 'react-icons/fa6'
import { FiUserX } from 'react-icons/fi'
import { GrUserExpert } from 'react-icons/gr'
import { IoEyeOutline, IoFilter } from 'react-icons/io5'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


type User =  {
    _id?: string;
    company?: string,
    username?: string;
    email: string;
    registered?: string;
    phone?: string;
    status?: string;
}

const columnHelper = createColumnHelper<User>()

const columns = [
    columnHelper.accessor("company", {
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
        cell: (info) => {
            const mail = info.getValue()

            if(!mail) return <span>Invalid mail</span>

            return (
                <span>
                    {mail.length > 15 ? mail.slice(0,14) + "..." : mail}
                </span>
            )
        },
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


    columnHelper.accessor("registered", {
        cell: (info) => {
            const status = info.getValue() as string | undefined;

            if (!status) return <span>Invalid date</span>;

            const month = getMonth(status.slice(5, 7));
            const day = status.slice(8, 10);
            const year = status.slice(0, 4);
            const time = status.slice(11, 16); // assuming time exists like "13:45"
            const meridian = Number(status.slice(11, 13)) > 11 ? "PM" : "AM";

            return (
                <span>
                  {month} {day}, {year} {time} {meridian}
                </span>
            );
        },
        header: () => (
            <span className="table-title">
                DATE JOINED <IoFilter />
            </span>
        )
    }),

    columnHelper.accessor("status", {
        cell: (info) => {
            const status = info.getValue()
            return (
              <span className={`status-badge ${status}`}>
                {status}
              </span>
            )
          },
        header: () => (
            <span className="table-title">
                STATUS <IoFilter />
            </span>
        )
    }),
]

function getMonth (x: string) {
    let month = ""

switch (x) {
    case '01':
        month = "Jan";
        break;
    case '02':
        month = "Feb";
        break;
    case '03':
        month = "Mar";
        break;
    case '04':
        month = "Apr";
        break;
    case '05':
        month = "May";
        break;
    case '06':
        month = "June";
        break;
    case '07':
        month = "July";
        break;
    case '08':
        month = "Aug";
        break;
    case '09':
        month = "Sept";
        break;
    case '10':
        month = "Oct";
        break;
    case '11':
        month = "Nov";
        break;
  case '12':
    month = "Dec";
    break;
  default:
    console.log("Other Month");
}

return month
}

const saveDataToLocalStorage = (key: string, data: object | undefined) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  

function Table() {
    const navigate = useNavigate()

    const [data, setData] = useState<User[]>([])

    const [globalFilter, setGlobalFilter] = useState("")
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
      });

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://lendsqr-users.free.beeceptor.com/users')
          .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch users');
            return res.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setError('Could not load users');
            setLoading(false);
          });
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
    
        
    
  return (
    <section id='users-data'>



        <div className="users-table">
            <div className=" table-overflow hide-scroll-bar">

                <div className='table-container'>
                    <table className="table">
                        <thead className="bg-[#F3F3F3]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="table-head px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                
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
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500`}>
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
                                    
                                    toggleUserEditModal(row.original._id)
                                    }} className='ellipsis' />
                                    {/* ******************* edit user status modal ********************* */}
                                    <div className={`edit-user-status ${userId === row.original._id ? 'reveal-user-status-modal' : ''}`}>
                                        <div onClick={() => {
                                        
                                            const selectedUser = data.find(x => x._id === row.original._id)
                                            saveDataToLocalStorage('userData', selectedUser)
                                            navigate('/dashboard/users/selected-user')
                                        }}>
                                            <span><IoEyeOutline /></span>
                                            <span>View Details</span>
                                        </div>
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
                    
                    
                    {/* ********************** Set filter form***************************** */}
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

                        <div className="buttons">
                            <button className="reset">
                                Reset
                            </button>
                            <button className="filter">
                                Filter
                            </button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
            <div className="pagination-container">
                    {/* Left: Page size selector */}
                <div className="pagination-left">
                    <span>Showing</span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                        className="bg-gray-100 px-2 py-1 rounded"
                    >
                            {[10, 25, 50, 100].map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                    </select>
                    <span>out of {table.getFilteredRowModel().rows.length}</span>
                </div>
                        
                    {/* Right: Page navigation */}
                <div className="pagination-right">
                    <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={`left-btn ${!table.getCanPreviousPage() ? "disable-btn" : ""}`}
                    >
                    <FaChevronLeft />
                    </button>
                        
                    {Array.from({ length: table.getPageCount() }, (_, i) => i).map((page) => {
                        const current = table.getState().pagination.pageIndex;
                        if (
                        page === 0 ||
                        page === table.getPageCount() - 1 ||
                        (page >= current - 1 && page <= current + 1)
                        ) {
                        return (
                            <button
                            key={page}
                            onClick={() => table.setPageIndex(page)}
                            className={` number ${
                                current === page ? "current" : "not-current"
                            }`}
                            >
                            {page + 1}
                            </button>
                        );
                        } else if (
                        (page === current - 2 || page === current + 2)
                        ) {
                        return <span className='ellipsis' key={page}>...</span>;
                        }
                        return null;
                    })}

                    <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={`right-btn ${!table.getCanNextPage() ? "disable-btn" : ""}`}
                    >
                    <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Table
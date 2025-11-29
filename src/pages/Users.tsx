import {} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

function Users() {

  const dataList = [
    { img: "images/u.users.svg", title: "Users", users: "2,453" },
    { img: "images/u.active.svg", title: "Active Users", users: "2,453" },
    { img: "images/u.loans.svg", title: "Users with Loans", users: "12,453" },
    { img: "images/u.savings.svg", title: "Users with Savings", users: "102,453" },
  ]
  return (
    <div>
        <Header />
        <Sidebar />
        <div className="page-content">
          <div id="users-page">
            <section className="demograph">
              <h1>Users</h1>

              <div className="boxes">
                {
                  dataList.map((x, i) => (
                    <div className="box" key={i}>
                      <img src={x.img} alt="icon" />
                      <h4>{x.title}</h4>
                      <p>{x.users}</p>
                    </div>
                  ))
                }
              </div>
            </section>

            <section className="table">
              <Table />
            </section>
          </div>
        </div>
    </div>
  )
}

export default Users
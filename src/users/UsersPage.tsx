import Table from "../components/Table"
import UsersClassification from "./UsersClassification"
import './UsersPage.scss'


function UsersPage() {
  return (
    <div className="users-page">
      <UsersClassification />
      <div className="hide-scroll-bar">
        <Table />
      </div>
    </div>
  )
}

export default UsersPage
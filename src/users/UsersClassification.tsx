import active from '../assets/active.png'
import loan from '../assets/loan1.png'
import savings from '../assets/savings.png'
import users from '../assets/users.png'

function UsersClassification() {
  return (
    <section className="demograph">
      <h3 className="classification-header">Users</h3>

      <div className="data-boxes">
        <div className="data-box">
          <img src={users} alt="icon-img" className='icon-img' />
          <p className="title">USERS</p>
          <h4 className="count">2,453</h4>
        </div>

        <div className="data-box">
          <img src={active} alt="icon-img" className='icon-img' />
          <p className="title">ACTIVE USERS</p>
          <h4 className="count">2,453</h4>
        </div>

        <div className="data-box">
          <img src={loan} alt="icon-img" className='icon-img' />
          <p className="title">USERS WITH LOANS</p>
          <h4 className="count">12,453</h4>
        </div>
        
        <div className="data-box">
          <img src={savings} alt="icon-img" className='icon-img' />
          <p className="title">USERS WITH SAVINGS</p>
          <h4 className="count">102,453</h4>
        </div>
      </div>
    </section>
  )
}

export default UsersClassification
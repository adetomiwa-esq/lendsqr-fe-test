
interface Props {
    savedData: {
    _id?: string;
    company?: string,
    username?: string;
    email?: string;
    registered?: string;
    phone?: string;
    status?: string;
    gender?: string;
    balance?: string}
};

function PersonalInfo({ savedData } : Props) {

    
    
  return (
    <section className="personal-info">
        <div className="info-sec">
            <h1 className="sec-header">Personal Information</h1>

            <div className="boxes">
                <div className="box">
                    <h4 className="sm-header">FULL NAME</h4>
                    <p className="content">{savedData?.username}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">PHONE NUMBER</h4>
                    <p className="content">{savedData?.phone}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">EMAIL ADDRESS</h4>
                    <p className="content">{savedData?.email}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">BVN</h4>
                    <p className="content">{`07060780922`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">GENDER</h4>
                    <p className="content">{savedData?.gender}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">MARITAL STATUS</h4>
                    <p className="content">{`Single`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">CHILDREN</h4>
                    <p className="content">{`None`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">TYPE OF RESIDENCE</h4>
                    <p className="content">{`Parent’s Apartment`}</p>
                </div>
            </div>
        </div>

        <div className="info-sec">
            <h1 className="sec-header">Education and Employment</h1>

            <div className="boxes">
                <div className="box">
                    <h4 className="sm-header">LEVEL OF EDUCATION</h4>
                    <p className="content">{`B.Sc`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">EMPLOYMENT STATUS</h4>
                    <p className="content">{`Employed`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">SECTOR OF EMPLOYMENT</h4>
                    <p className="content">{`FinTech`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">DURATION OF EMPLOYMENT</h4>
                    <p className="content">{`2 years`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">OFFICIAL EMAIL</h4>
                    <p className="content">{savedData?.email}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">MONTHLY INCOME</h4>
                    <p className="content">{`₦200,000.00- ₦400,000.00`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">LOAN REPAYMENT</h4>
                    <p className="content">{`40,000`}</p>
                </div>
            </div>
        </div>

        <div className="info-sec">
            <h1 className="sec-header">Socials</h1>

            <div className="boxes">
                <div className="box">
                    <h4 className="sm-header">TWITTER</h4>
                    <p className="content">{`@grace_effiom`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">FACEBOOK</h4>
                    <p className="content">{`Grace Effiom`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">INSTAGRAM</h4>
                    <p className="content">{`@grace_effiom`}</p>
                </div>
            </div>
        </div>

        <div className="info-sec">
            <h1 className="sec-header">Guarantor</h1>

            <div className="boxes">
                <div className="box">
                    <h4 className="sm-header">FULL NAME</h4>
                    <p className="content">{`Debby Ogana`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">PHONE NUMBER</h4>
                    <p className="content">{`07060780922`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">EMAIL ADDRESS</h4>
                    <p className="content">{`debby@gmail.com`}</p>
                </div>
                <div className="box">
                    <h4 className="sm-header">RELATIONSHIP</h4>
                    <p className="content">{`Sister`}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PersonalInfo
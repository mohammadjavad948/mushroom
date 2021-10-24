import Test from "../components/navbar"

function ForDoWork(props) {
    return (
        <div style={{marginTop: "10px"}}>
            <a href={props.link}>
                <div dir="rtl" style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    padding: "15px 30px 5px 30px",
                    fontFamily: "xyz"
                }}>
                    <div className="row" style={{width: "100%"}}>
                        <div className="col-md-6">
                            <div style={{display: "flex", flexDirection: "row", color: "black", marginBottom: "10px"}}>
                                {props.content}
                                <span style={{
                                    fontFamily: "reg",
                                    color: "grey",
                                    marginRight: "20px",
                                    fontSize: "14px ",
                                    marginTop: "2px"
                                }}>
                  {props.title}
                </span>
                            </div>
                        </div>
                        <div className="col-md-6"
                             style={{textAlign: "left", fontFamily: "reg", color: "grey", marginBottom: "10px"}}>
                            برای انجام این تکلیف تا تاریخ {props.date} وقت دارید
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

function NoDashboard(props) {
    if (props.children == "no") {
        return (
            <div style={{marginTop: "130px", textAlign: "center", color: "gray", width: "100%"}}>
                <div style={{
                    width: "25%",
                    border: "rgb(170 , 170 , 170) solid 2px",
                    margin: "auto",
                    padding: "25px 20px",
                    borderRadius: "4px"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                         className="bi bi-x-square" viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <br/>
                    <br/>
                    <span style={{fontFamily: "reg"}}>
            هیچ کار جدیدی برای انجام دادن وجود ندارد
          </span>
                </div>
            </div>
        )
    } else {
        return (
            <div>{props.children}</div>
        )
    }
}

function Dashboard() {
    return (
        <Test>
            <NoDashboard>
                <div style={{padding: "10px 30px"}}>
                    <ForDoWork content="نوشتن سوال 2 و 5 تکمیلی صفحه 15" date="1396/05/02" title="فارسی" link="103"/>
                    <ForDoWork content="نوشتن مشق الگوریتم" date="1396/05/01" title="کار و فناوری" link="102"/>
                </div>
            </NoDashboard>
        </Test>
    )
}

export default Dashboard
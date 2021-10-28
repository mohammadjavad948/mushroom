import Test from "../components/navbar"

function Profile() {
    return (
        <Test>
            <div dir="rtl" style={{padding: "10px 0px"}}>
                <div className="row" dir="ltr" style={{width: "100%"}}>
                    <div className="col-md-8">
                        <div style={{
                            borderRadius: "4px",
                            width: "100%",
                            height: "100%",
                            backgroundImage: "url(/download_2.svg)"
                        }}></div>
                    </div>
                    <div className="col-md-4" style={{paddingRight: "30px"}} dir="rtl">
                        <div
                            style={{backgroundColor: "white", borderRadius: "4px", padding: "10px", fontFamily: "reg"}}>
                            <div style={{width: "100%", padding: "20px"}}>
                                <img style={{borderRadius: "1000px"}} src="/images.jpg" width="100%"
                                     height="100%"></img>
                            </div>
                            <br/>
                            <div dir="ltr" style={{textAlign: "center", color: "gray"}}>
                                محمد خدادوست
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{width: "50%", textAlign: "right"}}>
                                    <b>نام کاربری :</b>
                                </div>
                                <div dir="ltr" style={{color: "gray", width: "50%", textAlign: "left"}}>
                                    <b>GODLover</b>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{width: "50%", textAlign: "right"}}>
                                    <b>رمز عبور :</b>
                                </div>
                                <div dir="ltr" style={{color: "gray", width: "50%", textAlign: "left"}}>
                                    <b>MlovesGOD</b>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{width: "50%", textAlign: "right"}}>
                                    <b>پایه :</b>
                                </div>
                                <div dir="ltr" style={{color: "gray", width: "50%", textAlign: "left"}}>
                                    <b>نهم</b>
                                </div>
                            </div>
                            <div className="brs"></div>
                            <button className="btn btn-danger" style={{width: "100%"}}>خروج از حساب</button>
                        </div>
                    </div>
                </div>
            </div>
        </Test>
    )
}

export default Profile
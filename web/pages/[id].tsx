import { useRouter } from "next/router";
import { useState } from "react";
import Test from "../components/navbar"

export default () => {
    const router = useRouter()

    function setChat() {
        document.scrollingElement.scrollTop = "5000"
        return (
            <div>
                <div id="chat" style={{ borderRadius: "4px 4px 0px 0px", border: "solid 1.5px rgb(200 , 200 , 200)" }}>
                    <div style={{ padding: "10px 25px", fontFamily: "xyz", fontSize: "20px" }} dir="rtl">
                        <div className="row">
                            <div className="col-md-8">
                                ارسال تمرین های ریاضی تا صفحه 15
                            </div>
                            <div className="col-md-4" style={{ fontFamily: "reg", color: "gray", fontSize: "18px", textAlign: "left" }}>
                                <div style={{ marginTop: "5px" }}>
                                    1400/08/02
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: "18px", color: "gray", fontFamily: "reg", marginTop: "5px", textAlign: "justify", overflowX: "hidden", overflowY: "scroll", height: "55px", paddingLeft: "5px" }} className="scroll">
                            دانش آموزان امیر علی ثنایی و محمد خدادوست باید این تکلیف را تا ساعت 5 عصر روز یکشنبه 1400/08/02 برای من ارسال کنند.
                        </div>
                    </div>
                </div>
                <div dir="rtl" style={{ height: "435px", padding: "15px 20px" }}>
                    <div style={{ height: "350px", overflowX: "hidden", overflowY: "scroll", marginBottom: "10px", paddingLeft: "10px" }} className="scroll">
                        <div style={{ height: "0px" }}></div>
                        <div style={{ minWidth: "10%", maxWidth: "400px" }}>
                            <div className="alert alert-success" style={{ display: "inline-block", fontFamily: "reg" }}>
                                <b>محمد خدادوست</b>
                                <br />
                                <span>سلام آقای سلمانپور. من یک سوال دارم، تمرین های کتاب هم باید در جزوه ما باشه؟</span>
                            </div>
                        </div>
                        <div style={{ width: "100%" }} dir="ltr">
                            <div style={{ minWidth: "10%", maxWidth: "400px" }} dir="rtl">
                                <div className="alert alert-light" style={{ display: "inline-block", fontFamily: "reg", backgroundColor: "rgb(240 , 240 , 240)" }}>
                                    <b>استاد سلمانپور</b>
                                    <br />
                                    <span>خیر؛ فعلا نیازی نیست که تمرین ها رو در جزوه بنویسید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div dir="rtl" type="text" class="form-control" style={{ textAlign: "center", display: "flex", flexDirection: "row", marginTop: "-5px", display: "block", padding: ".375rem .75rem", fontSize: "1rem", lineHeight: "1.5", color: "#495057", backgroundColor: "#fff", backgroundClip: "padding-box", border: "1px solid #ced4da", borderRadius: ".25rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out" }} placeholder="جستجو کنید" >
                        <input className='form-control' placeholder="پیام خود را بنویسید" dir="rtl" style={{ fontFamily: "med", height: "35px", width: "85%", display: "inline" }}></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    const [two, setTwo] = useState(<div>
        <div onClick={function () { setHide(<Div works={two} chat={setChat()}></Div>) }} className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    نوشتن جزوه ریاضی
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
        <div className="brg"></div>
        <div className="row grayn" dir="rtl" style={{ padding: "10px 25px" }}>
            <div className="col-lg-8" style={{ textAlign: "right" }}>
                <div>
                    ارسال تمرین های ریاضی تا صفحه 15
                </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "left" }}>
                <div style={{ color: "gray", fontFamily: "reg" }}>
                    1400/08/02
                </div>
            </div>
        </div>
    </div>)

    const [working, setWorker] = useState(
        <div style={{ padding: "182px 0px" }}>
            <div style={{ margin: "0px auto", fontFamily: "reg", color: "gray", width: "50%", textAlign: "center" }}>
                <div style={{ width: "80%", border: "rgb(170 , 170 , 170) solid 2px", margin: "auto", padding: "25px 20px", borderRadius: "4px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-mouse3" viewBox="0 0 16 16">
                        <path d="M7 0c-.593 0-1.104.157-1.527.463-.418.302-.717.726-.93 1.208C4.123 2.619 4 3.879 4 5.187v.504L3.382 6A2.5 2.5 0 0 0 2 8.236v2.576C2 13.659 4.22 16 7 16h2c2.78 0 5-2.342 5-5.188V7.51a.71.71 0 0 0 0-.02V5.186c0-1.13-.272-2.044-.748-2.772-.474-.726-1.13-1.235-1.849-1.59C9.981.123 8.26 0 7 0zm2.5 6.099V1.232c.51.11 1.008.267 1.46.49.596.293 1.099.694 1.455 1.24.355.543.585 1.262.585 2.225v1.69l-3.5-.778zm-1-5.025v4.803L5 5.099c.006-1.242.134-2.293.457-3.024.162-.366.363-.63.602-.801C6.292 1.105 6.593 1 7 1c.468 0 .98.018 1.5.074zM5 6.124 13 7.9v2.912C13 13.145 11.19 15 9 15H7c-2.19 0-4-1.855-4-4.188V8.236a1.5 1.5 0 0 1 .83-1.342l.187-.093c.01.265.024.58.047.92.062.938.19 2.12.462 2.937a.5.5 0 1 0 .948-.316c-.227-.683-.35-1.75-.413-2.688a29.17 29.17 0 0 1-.06-1.528v-.002z" />
                    </svg>
                    <br />
                    <br />
                    یک تکلیف را از قسمت تکالیف انتخاب کنید تا نظرات و محتوای آن نشان داده شود انتخاب کنید
                </div>
            </div>
        </div>
    )

    const [hide , setHide] = useState(
        <Div works={two} chat={working}></Div>
    )

    return (
        <div>
            <Test>
                <div style={{padding: "10px 30px"}}>{hide}</div>
            </Test>
        </div>
    )
}

function Div(props) {
    const [card2, setCard2] = useState(<div style={{ backgroundColor: "rgb(10 , 10 , 10 , 0.6)", position: "fixed", width: "100%", height: "100%", top: "0px" , left: "0px" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", top: "0px", zIndex: "1" }} onClick={function () { setCard("") }}></div>
        <div style={{ zIndex: "1000", padding: "20px", position: "fixed", width: "50%", borderRadius: "4px", backgroundColor: "white", top: "20%", right: "25%", left: "auto" }}>
            <input className="form-in" style={{ fontFamily: "med" }} dir="rtl" placeholder="نام مشق جدید را بنویسید" />
            <div className="brs"></div>
            <input className="form-in" style={{ fontFamily: "med" }} dir="rtl" placeholder="تاریخ ارسال مشق را بنویسید (مثلا 1400/08/25 )"/>
            <div className="brs"></div>
            <textarea dir="rtl" class="form-in" cols="30" rows="5" style={{resize: "none" , fontFamily: "med"}} placeholder="شرح مشق را بنویسید"></textarea>
            <div className="brs"></div>
            <button className="btn btn-success" style={{ width: "100%", fontFamily: "med", fontSize: "16px" }}>ساخت مشق</button>
        </div>
    </div>)

    const [card , setCard] = useState("")

    return (
        <div>
            <div className="row">
                <div style={{ padding: "0px 12px" }}>
                    <button onClick={function () { setCard(card2) }} className="btn btn-success" style={{ width: "100%", marginTop: "10px", padding: "15px", fontFamily: "med", fontSize: "16px" }}>
                        ساخت مشق جدید
                    </button>
                </div>
                <div style={{ height: "15px" }}></div>
                <div className="col-md-4" style={{ marginBottom: "10px" }}>
                    <div style={{ backgroundColor: "white", borderRadius: "4px", fontFamily: "med", overflow: "hidden", height: "550px" }}>
                        <div className="scroll" style={{ width: "100%", height: "100%", overflowY: "scroll", overflowX: "hidden" }}>
                            {props.works}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div style={{ backgroundColor: "white", borderRadius: "4px" }}>
                        {props.chat}
                    </div>
                </div>
            </div>
            {card}
        </div>
    )
}
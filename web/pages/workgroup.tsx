import Test from "../components/navbar"
import Image from "next/image"
import { useState } from "react"

function Workgroup() {
    const [card1, setCard1] = useState(<div style={{ backgroundColor: "rgb(10 , 10 , 10 , 0.6)", position: "absolute", width: "100%", height: "100%", top: "0px" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", top: "0px", zIndex: "1" }} onClick={function () { setCard("") }}></div>
        <div style={{ zIndex: "1000", padding: "20px", position: "fixed", width: "50%", borderRadius: "4px", backgroundColor: "white", top: "20%", right: "25%", left: "auto" }}>
            <input className="form-in" style={{ fontFamily: "med" }} dir="rtl" placeholder="نام کارگروه را بنویسید"></input>
            <div className="brs"></div>
            <select className="form-select" style={{ fontFamily: "med" }} dir="rtl">
                <option disabled value="0" selected>پایه کارگروه را انتخاب کنید</option>
                <option value="7">هفتم</option>
                <option value="8">هشتم</option>
                <option value="9">نهم</option>
                <option value="10">دهم</option>
                <option value="11">یازدهم</option>
                <option value="12">دوازدهم</option>
            </select>
            <div className="brs"></div>
            <button className="btn btn-success" style={{ width: "100%", fontFamily: "med", fontSize: "16px" }}>ساخت کارگروه</button>
        </div>
    </div>)

    const [card , setCard] = useState("")

    return (
        <Test>
            <div style={{ padding: "10px 30px" }}>
                <div>
                    <button onClick={function () {setCard(card1)}} className="btn btn-success" style={{ width: "100%", marginTop: "10px", padding: "15px", fontFamily: "med", fontSize: "16px" }}>
                    ساخت کارگروه جدید
                    </button>
                    <Group button={<a href="/122"><button style={{ padding: "15px 25px", fontFamily: "xyz", fontSize: "20px", width: "100%" }} className="btn btn-outline-light">رفتن به این کارگروه</button></a>} img="/group.png" age="نهم" lesson="ریاضی"></Group>
                    <Group button={<a href="/122"><button style={{ padding: "15px 25px", fontFamily: "xyz", fontSize: "20px", width: "100%" }} className="btn btn-outline-light">رفتن به این کارگروه</button></a>} img="download_1.svg" age="نهم" lesson="زیست"></Group>
                </div>
            </div>
            {card}
        </Test>
    )
}

function Group(props) {
    return (
        <div id="test" style={{ padding: "17px 20px 10px 20px", marginTop: "10px", borderRadius: "4px", backgroundImage: `url(${props.img})` }}>
            <div dir="rtl">
                <div className="row">
                    <div className="col-md-8">
                        <h4 style={{ fontFamily: "xyz", marginTop: "0px" }}>{props.lesson}</h4>
                        <h5 style={{ fontFamily: "reg", color: "white", marginTop: "9px" }}>کلاس {props.age}</h5>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                        {props.button}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workgroup
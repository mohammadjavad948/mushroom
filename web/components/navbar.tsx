import Image from 'next/image'

function Test(Props) {
    var menu = {
        backgroundColor: "#ffffff",
        fontSize: "16px",
        fontFamily: "xyz",
        color: "gray"
    }
    var svg = {
        margin: "0px 0px 0px 7px"
    }
    var navbar = {
        display: "flex",
        flexDiraction: "row"
    }
    var bar = {
        width: "35px",
        height: "5px",
        backgroundColor: "#f38b08",
        margin: "6px 0",
        transition: "0.4s",
    }

    return (
        <div>
            <div dir="rtl" style={menu}>
                <div class="container-fluid" style={{ backgroundColor: "white" }}>
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a target="_blank" rel="nofollow" class="navbar-brand mr-0 ml-5" style={{ textAlign: "right" }} href="#">
                                <Image id="jk" src="/mushroom.png" width={160} height={59.2}></Image>
                            </a>
                            <div id="show-drawer" class="navbar-toggler containers" type="button" onclick="myFunction(this)">
                                <div style={bar}></div>
                                <div style={bar}></div>
                                <div style={bar}></div>
                            </div>
                            <div dir="rtl" class="navbar-collapse collapse" style={{ marginTop: "10px", width: "100%" }} id="navbarSupportedContent">
                                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                    <div dir="rtl" style={{ width: "70%" }}>
                                        <ul dir="rtl" class="navbar-nav">
                                            <li class="nav-item" style={{ marginRight: "20px", fontFamily: "xyz", fontSize: "16px" }}><a class="nav-link" href="/">داشبورد</a></li>
                                            <li class="nav-item" style={{ marginRight: "20px", fontFamily: "xyz", fontSize: "16px" }}><a class="nav-link" href="workgroup">کارگروه ها</a></li>
                                            <li class="nav-item" style={{ marginRight: "20px", fontFamily: "xyz", fontSize: "16px" }}><a class="nav-link" href="profile">پروفایل</a></li>
                                            <li class="nav-item" style={{ marginRight: "20px", fontFamily: "xyz", fontSize: "16px" }}><a class="nav-link" href="tips">راهنمای سایت</a>
                                            </li>
                                        </ul>
                                        <div style={{ height: "5px" }}></div>
                                    </div>
                                    <div dir="ltr" style={{ textAlign: "left", width: "30%", marginTop: "-3px" }}>
                                        <div dir="rtl" type="text" class="form-control" style={{ textAlign: "center", display: "flex", flexDirection: "row", marginTop: "-5px", display: "block", padding: ".375rem .75rem", fontSize: "1rem", lineHeight: "1.5", color: "#495057", backgroundColor: "#fff", backgroundClip: "padding-box", border: "1px solid #ced4da", borderRadius: ".25rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out" }} placeholder="جستجو کنید" >
                                            <input class='form-control' placeholder="جستجو کنید" dir="rtl" style={{ height: "35px", width: "80%", display: "inline" }}></input>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </nav >
                    </div >
                </div >
            </div >
            {Props.children}
        </div >
    )
}

export default Test
import { useRouter } from "next/router";
import Link from 'next/link'
import { useState, useEffect } from "react";
import slugify from "slugify";

export default function Home(props) {

    const { query } = useRouter();
    const uname = query.name;
    console.log(uname, "hi");
    const [data, setData] = useState({ name: "" });

  
    const users = slugify(String(uname), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    })
   
 
   
    // let params = new URLSearchParams(window.location.search); // object to get query or strings in url
    // let myparams = "hii";
    // if (myparams === null) {
    // 	myparams = "[Your Name]";
    // }
    // if (myparams.length !== 0) {
    // 	myparams = myparams.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
    // 	console.log("name is there", myparams)
    // }


    // console.log(myparams);
    // localStorage.setItem("name", myparams);
    // var name1 = localStorage.getItem("name");
    // console.log(name1);

    return (
        <>
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />





            <br />
            <div >
                <h1>{users}</h1>
                <p >की ओर से आपको</p>
            </div>
            <b>
                <p id='demo'> </p>
            </b>
            <div><img src="/images/Lord1.png" /></div>

            <br />

            <div>
                <div>

                    <p>मंदिर की घंटी, आरती की थाली,</p>
                    <p>नदी के किनारे सूरज की लाली</p>
                    <p>ज़िंदगी लाए खुशियों की बहार
                    </p>
                    <p>मंगलमय हो आपको सावन का त्योहार|
                    </p>
                </div>
                <br />
                <div><img src="/images/Lord1.png" /></div>
                <p id="namefooter">{users}</p>
                <br />
                <div className="enter-name">
                    <input id="name" className="" type="name"
                        placeholder="👉 Enter your name here..." value={data.name}
                        onChange={(event) =>
                            setData({
                                name: event.target.value,
                            })
                        } />
                    <Link
                        href={{
                            pathname: "/Chrishtmas/share",
                            query: data, // the data
                        }}
                    >
                        <a className="btnn" style={{ color: "blue" }}>
                            <span>👉</span> Create Wish
                        </a>
                    </Link>
                    {/* <a className="btnn " onclick="get_name()"><span>👉</span> Go</a> */}

                </div>
            </div>

            <marquee className="m1" behavior="scroll" direction="up" scrolldelay="0"> <br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
            </marquee>
            <marquee className="m2" behavior="scroll" direction="down" scrolldelay="0"> <br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
            </marquee>
            {/* <audio controls autoplay preload="auto" hidden>
        <source src="./song/bhola1.mpeg"
            type="audio/ogg">
        <source src="./song/bhola1.mpeg"
            type="audio/mpeg">
    </audio> */}
            {/* <script src="js/main.js"></script> */}
        </>
    )
}
import { useRouter } from "next/router";
import Link from 'next/link'
import { useState, useEffect } from "react";
import slugify from "slugify";
import Head from "next/head";


export default function Home(props) {

    const { query } = useRouter();
    const uname = query.name;
    console.log(uname, "hi");
    const [data, setData] = useState({ name: "" });

    let greeting;
    if (uname === undefined) {
        greeting = "[Your Name]";
    } else {
        greeting = uname;
    }

   



    const users = slugify(String(greeting), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    })

    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        </Head>
         <div className="text-center">

            <div >
                <h1>{users}</h1>
                <p >की ओर से आपको</p>
            </div>
            <b>
                <p id='demo'> </p>
            </b>
            <div ><img className=" block mx-auto" src="/images/Lord1.png" /></div>

   

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
                <div><img className=" block mx-auto" src="/images/Lord1.png" /></div>
                <p id="namefooter">{users}</p>
                <br />
                <div className="flex">
                    <input id="name" className="w-4/5 p-4 rounded mr-2.5 inline-block" type="text" minlength="5"
                        placeholder="👉 Enter your name here..." value={data.name}
                        onChange={(event) =>
                            setData({
                                name: event.target.value,
                            })
                            
                        } />
                    <Link
                        href={{
                            pathname: "/chrishtmas/share",
                            query: data, // the data
                        }}
                    >
                        <a className="w-1/5 bg-green-500 rounded p-4 inline-block">
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
            </div>
            {/* <audio controls autoplay preload="auto" hidden>
        <source src="./song/bhola1.mpeg"
            type="audio/ogg">
        <source src="./song/bhola1.mpeg"
            type="audio/mpeg">
    </audio> */}
            {/* <script src="js/main.js"></script> */}
            <style jsx>{`
     .m1 {
      position: fixed;
      left: 2%;
      width: auto;
      height: 100%;
      top: 1%;
      color: #000;
    }
    
    .m2 {
      position: fixed;
      right: 2%;
      width: auto;
      height: 100%;
      top: 1%;
      color: #000;
    }

      `}</style>
        </>
    )
}
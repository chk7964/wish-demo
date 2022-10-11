import { useRouter } from "next/router";
import Head from "next/head";
import slugify from "slugify";
import 'animate.css';
import { ImWhatsapp, ImTelegram } from "react-icons/im";

export default function Home() {
    const router = useRouter();
    const query = router.query;
    const name = query.by;
    const users = slugify(String(name), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
      })
    const slugname = "chrishtmas";
    const pathname = "https://wishes4u.xyz/" + slugname + "/"
    const sharetext = encodeURIComponent(
          " Wishing you a Happy Women's Day " + pathname + "?" + users
    )
    

    const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`
    const Telegramshare =
    "https://telegram.me/share/url?url=" +
    pathname +
    "&text=" +
    users +
    " Wishing you a Happy Women's Day"
  const copied = () => {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    })
  }
    return (
     <>
     <Head>
    <meta name="google" content="notranslate" />
    </Head>
    
    
           <div className="text-center">
        <div className="font-bold">
            <h1 className="animate__animated animate__bounce">{users}</h1>
            <p>की ओर से आपको</p>
        </div>
               
            <b>
                <p id='demo' > </p>
            </b>
            <div className="text-center">
        <img className="block mx-auto h-72" src="/images/flowers.png"/>
        </div>
            <br/>
          
            <div >
            <div className="font-bold">
                <p >मंदिर की घंटी, आरती की थाली,</p>
                <p >नदी के किनारे सूरज की लाली</p>
                <p >ज़िंदगी लाए खुशियों की बहार
                </p>
                <p>मंगलमय हो आपको सावन का त्योहार|
                </p>
            </div>
        
            <br/>
            <div><img className="block mx-auto h-72" src="/images/flowers.png"/></div>
            <br/><p className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-1/4 block mx-auto">By- {users}</p>
            <br/>
    </div>
    <div className="flex">
            <a id="share1" className="bg-green-400 p-4 rounded m-2 w-1/2"  href={Whatsappshare}
            ><span className="inline-block"><ImWhatsapp/></span> <b>यहाँ से whatsapp पर शेयर करे </b><span className="inline-block"><ImWhatsapp/></span></a>

              <a id="share2"  className="bg-sky-500 p-4 rounded m-1 w-1/2 "  href={Telegramshare}
          
            ><span className="inline-block"><ImTelegram/></span> <b>यहाँ से Telegram पर शेयर करे </b><span className="inline-block"><ImTelegram/></span></a>

              {/* <a id="share3"  className="open-button"
            
               > <i className="fa fa-twitter-square"
                ></i> <b >यहाँ से Twiiter पर शेयर करे </b><i
                 className="fa fa-twitter-square" ></i></a> */}
            </div>
    {/* <script src="js/main2.js"></script> */}

    {/* <audio id="myAudio"controls autoplay hidden>
        <source src="./song/bhola2.mpeg" type="audio/ogg">
        <source src="./song/bhola2.mpeg" type="audio/mpeg">
      </audio> */}

<marquee className="m1" behavior="scroll" direction="up" scrolldelay="0"> <br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
    </marquee>
    <marquee className="m2" behavior="scroll" direction="down" scrolldelay="0"> <br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
    </marquee>
    </div>
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

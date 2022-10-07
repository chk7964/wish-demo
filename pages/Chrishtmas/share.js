import { useRouter } from "next/router";
import slugify from "slugify";

export default function Home() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const users = slugify(String(name), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
      })
    const slugname = "Chrishtmas";
    const pathname = "https://womensday.tamilwords.net/" + slugname + "/"
    const sharetext = encodeURIComponent(
        users + " Wishing you a Happy Women's Day " + pathname
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
    <meta name="google" content="notranslate" />
   
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

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
    
    
           
        <br/>
        <div>
            <h1  id="obj1">{name}</h1>
            <p>की ओर से आपको</p>
        </div>
               
            <b>
                <p id='demo' > </p>
            </b>
        <img  src="/images/flowers.png"/>
          
            <br/>
          
            <div >
            <div >
                <p >मंदिर की घंटी, आरती की थाली,</p>
                <p >नदी के किनारे सूरज की लाली</p>
                <p >ज़िंदगी लाए खुशियों की बहार
                </p>
                <p>मंगलमय हो आपको सावन का त्योहार|
                </p>
            </div>
        
            <br/>
            <div><img  src="/images/flowers.png"/></div>
            <br/><p id="namefooter">{query.name}</p>
            <br/>
    </div>
    <div>
            <a id="share1" className="bg-green-400 p-4 rounded m-2"  href={Whatsappshare}
            ><i className="fa fa-whatsapp"
              ></i> <b>यहाँ से whatsapp पर शेयर करे </b><i
              className="fa fa-whatsapp" ></i></a>

              <a id="share2"  className="bg-sky-500 p-4 rounded m-1"  href={Telegramshare}
          
            ><i className="fa fa-telegram" 
             ></i> <b>यहाँ से Telegram पर शेयर करे </b><i
              className="fa fa-telegram"></i></a>

              <a id="share3"  className="open-button"
            
               > <i className="fa fa-twitter-square"
                ></i> <b >यहाँ से Twiiter पर शेयर करे </b><i
                 className="fa fa-twitter-square" ></i></a>
            </div>
    {/* <script src="js/main2.js"></script> */}

    {/* <audio id="myAudio"controls autoplay hidden>
        <source src="./song/bhola2.mpeg" type="audio/ogg">
        <source src="./song/bhola2.mpeg" type="audio/mpeg">
      </audio> */}
      </>
 )
}

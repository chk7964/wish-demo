export default function Home() {
 return (
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
  
  
   <div className="header">
  <p><a href="./">Tools Font Basket</a></p>
</div>

<div className="scrollmenu">
  <div className="menu">
  <a href="./">Home</a>
  <a href="./capitalize-case">CapitalizeCase Converter</a>
  <a href="./fancy-text">Fancy Text</a>
  <a href="./invisible-character/">Invisible Text Generator</a>  
  <a href="./lower-case/">LowerCase Text Converter</a>
  <a href="./numbers-to-words-converter/">Number To Word Converter</a>
  <a href="./reverse-text/">Reverse Text Converter</a>
  <a href="./shuffle-text/">Suffle Text </a>
  <a href="./text-repeater/">Text Repeater</a>
  <a href="./upper-case/">UpperCase Conveter</a>
</div>
</div>

 <div className='mx-auto'>
 <table className="border-separate border-spacing-2 border border-slate-400 table-auto w-full">
  <thead>
    <tr>
      <th className="">State</th>
      <th className="">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="">Indiana</td>
      <td className="">Indianapolis</td>
    </tr>
    <tr>
      <td className="">Ohio</td>
      <td className="">Columbus</td>
    </tr>
    <tr>
      <td className="">Michigan</td>
      <td className="">Detroit</td>
    </tr>
  </tbody>
</table>


    




  </div>

  <div className="footer">
  <div className="fmenu">
  <a href="#">Home</a>
  <a href="#">About Us</a>
  <a href="#">Contact Us</a>
  <a href="#">Privacy Policy</a>
</div>
  <p>Copyright &copy; <b>{new Date().getFullYear()}</b> Your Name All Rights Reserved</p>
</div>

     </>
 )
}
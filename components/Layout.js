
export default function Layout({ children }) {
 return (
  <>

   <div className="container p-4 shadow-lg m-4 mx-4 rounded bg-slate-300">
   <main>
    {children}
   </main>
   </div>
  </>
 )
}
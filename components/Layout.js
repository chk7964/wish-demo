
export default function Layout({ children }) {
 return (
  <>

   <div className="container mx-auto p-4 shadow-lg m-2 mb-12 rounded bg-slate-300">
   <main>
    {children}
   </main>
   </div>
  </>
 )
}
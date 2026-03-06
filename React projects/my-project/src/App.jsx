import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'


function App () {
  const [count, setCount] = useState(0)
  
  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
          Tailwindcss
        </h1>
        <Card />
        <Card username="newguy" btnText="click me"/>
    </>
  )
}
export default App;





// function App () {
//   return (
   
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//         <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//         <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-center'
//         src="https://imgs.search.brave.com/c9Ft-kAcdP-SMWGWjPEiTgSjJpfteQqkHnFwQVxq2UQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzY0LzY5Lzc2/LzM2MF9GXzY2NDY5/NzY5OV9XQ3dWdmFx/Y2hMNHR3c251TDVH/WUN3d1pPN1NaSTVy/WS5qcGc"
//         alt="" width="384" height="512" />
//         <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
//           <blockquote>
//             <figcaption class="font-medium">
//               <div className="text-sky-500 dark:text-sky-400">
//                 saumya shikhar
//               </div>
//               <div className="text-slate-700 dark:text-slate-500">
//                 Forntend Dev, Somewhere 
//               </div>
//             </figcaption>
//           </blockquote>
//         </div>
//       </figure>
//     </div>
//   )
// }
// export default App;
// function App() {
//   return (
//     <div className={styles.layout}>
//                 <Header/>
//                 <div className={styles.content}>
//                     <Sidebar/>
//                     <main className={styles.main}>
//                         {children}
//                         <p>Main content goes here</p>
//                     </main>
//                 </div>
//                 <Footer/>
//             </div>
//             )
//           }

// export default App;

// <Layout>
//       <p>Main content goes here</p>
//     </Layout>


//  return (
//     <>
//     <h1 className='bg-pink-400 text-black p-4 rounded-xl '>
//        Anita patra
//       </h1>
//       <figure class= "md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          
//       <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto" src="https://imgs.search.brave.com/tu80peDDYz46QJ-k5hQt-xJBiKLPdXDaWtkdTw-6rH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/YXVkaW8tY3JlYXRp/b24vdmlzdWFscy1z/b25ncy53ZWJw"
//        alt=""width="384" height="512" />
//        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//         <blockquote>
//           <p class ="text-lg font-medium">
//             "Tailwind CSS is the only frameWork that I've seen scale
//             on large teams. It's easy to customize, adapts to any design,
//             and the build size is tiny."
//           </p>
//         </blockquote>
//         <figcaption class="font-medium">
//           <div class="text-sky-500 dark:text-sky-400">
//             my name
//           </div>
//           <div class ="text-slate-700 dark:text-slate-500">
//             Staff Engineer, Algo
//           </div>
//         </figcaption>

//        </div>
//       </figure>
//     </>
//   )

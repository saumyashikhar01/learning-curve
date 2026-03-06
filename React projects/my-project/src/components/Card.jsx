import React from 'react'

function Card({username, btnText}) {
    console.log(username);
  return (
   <div className="relative h-100 w-75 rounded-md">
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
       <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-center'
       src="https://imgs.search.brave.com/c9Ft-kAcdP-SMWGWjPEiTgSjJpfteQqkHnFwQVxq2UQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzY0LzY5Lzc2/LzM2MF9GXzY2NDY5/NzY5OV9XQ3dWdmFx/Y2hMNHR3c251TDVH/WUN3d1pPN1NaSTVy/WS5qcGc"
       alt="" width="384" height="512" />
       <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
         <blockquote>
           <figcaption class="font-medium">
             <div className="text-sky-500 dark:text-sky-400">
               {username}
             </div>
             <div className="text-slate-700 dark:text-slate-500">
               Forntend Dev, {btnText} 
             </div>
           </figcaption>
         </blockquote>
       </div>
     </figure>
   </div>
    </div>
  )
}

export default Card









// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
// } from "@material-tailwind/react";

// export function CardDefault() {
//     return (
//         <Card className = "mt-6 w-96">
//             <CardHeader color="blue-gray" className="relative h-56">
//                 <img
//                     src ="https://i.pravatar.cc/150?img=3"
//                     alt="some pic was-here"
//                 />
//             </CardHeader>
//             <CardBody>
//                 <Typography variant="h5" color= "blue-gray" className="md-2">
//                     User-card
//                 </Typography>
//                 <Typography>
//                     Lorem ipsum,
//                 </Typography>
//             </CardBody>
//             <CardFooter className="pt-0">
//                 <Button>
//                     Reed More
//                 </Button>
//             </CardFooter>
//         </Card>
//     )
// }


// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// export function CardDefault() {
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by
//           walk and near to &quot;Naviglio&quot; where you can enjoy the main
//           night life in Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// }
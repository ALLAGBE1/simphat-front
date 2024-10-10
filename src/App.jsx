import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Manager from './components/Manager'
import Partenaires from './components/Partenaires'
import Info from './components/Info'

function App() {
  return (
    <div className= "">
        <NavBar />
        <Info />
        <Hero />
        <Manager />
        <Partenaires />
        <Footer />
    </div>
  )
}

export default App






// import './App.css'
// // import Footer from './components/Footer'
// import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import Manager from './components/Manager'
// import Partenaires from './components/Partenaires'
// import Info from './components/Info'

// function App() {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       <div className="fixed top-0 -z-10 h-full w-full">
//       {/* <div className="relative h-full w-full bg-white"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div> */}
//       {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
//         {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
//          */}
//         {/* <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 "></div> */}
//       </div>

//       <div className= "container mx-auto px-8">
//         <NavBar />
//         <Info />
//         <Hero />
//         <Manager />
//         <Partenaires />
//       </div>
      
//       {/* <div className='p-12'></div>
//       <Footer /> */}
//     </div>
//   )
// }

// export default App

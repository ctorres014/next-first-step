import Link  from "next/link";
import ActiveLink from "../active-link/ActiveLink";

// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 3000);
//   });
// }
const navItems = [
  { path: '/about', text: 'About'},
  { path: '/price', text: 'Price'},
  { path: '/contact', text: 'Contact'},
]
// Creamos un functional component
export const Navbar = async () => {
  // await temporalAsync();
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/">Home</Link>
        <div className="flex flex-1"></div>
        {
          navItems.map(item => (
            <ActiveLink key={item.path} { ...item }></ActiveLink>
            ))
        }
          
        
    </nav>
        
  )
}

export default Navbar

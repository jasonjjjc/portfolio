import Link from 'next/link';


export default function ProjectButton({ href,title}) {
 
  return(
  console.log(href, title, 'this is the href and title'),
  <Link  href={`${href}/projectPage`} passHref>
    <button className='flex justify-center text-xl bg-white text-black p-4 m-4 shadow-sm'>{title}</button>
  </Link>
 ) 
}

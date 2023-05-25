import Link from 'next/link';


export default function ProjectButton({ url,title }) {
  console.log(url,title)
 return(

  <Link  href={`/${url}`} passHref>
    <button className='flex justify-center text-xl bg-white text-black p-4 m-4 shadow-sm'>{title}</button>
  </Link>
 ) 
}

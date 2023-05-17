export default function Card({ children }) {
    return (
        <>
            <div className='flex justify-center text-xl bg-white text-black p-4 m-4 shadow-sm'>
                {children}
            </div>
        </>
    )
}
import { Imprima } from 'next/font/google';
import Upper from './upper/index';
import Middle from './upper/middle';


const HomeScreen = () => {
    return (
        <>
            <div className="h-screen bg-no-repeat bg-[url('/main/Home-bg.jpg')] ">
                <div className='relative h-full w-full'>
                    <Upper />
                </div>
            </div>
            <Middle />
        </>
    )
}


export default HomeScreen;
import HomeScreen from '@/components/screens/home'
import Image from 'next/image'
import Header from '@/components/utilize/head/index'
import Upper from '@/components/screens/upper/index'

export default function Home() {
  return (
    <main className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
      <Header />
      <HomeScreen />
    </main>
  )
}
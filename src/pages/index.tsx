
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import About from '@/components/About'
import AboutSecond from '@/components/AboutSecond'
import Feedback from '@/components/Feedback'
import Carrosel from '@/components/Carrosel'
import Place from '@/components/Place'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <Main/>
      {/*<CarroselTeen/>*/}
      <About/>
      <AboutSecond/>
      {/*<CarroselEvents/>*/}
      <Feedback/>
      {/*<Announcement/>*/}
      <Carrosel/>
      <Place/>
    </div>
    
  )
}
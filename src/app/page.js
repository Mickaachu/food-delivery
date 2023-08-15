import {Hero, Floating, HowWorks, Explore, Checkout, CallToAction} from "../../components/index"
export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <Hero/>
      <Floating/>
      <HowWorks/>
      <Explore/>
      <Checkout/>
      <CallToAction/>
    </main>
  )
}

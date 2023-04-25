
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import { Container } from "../atoms/Container"
import { Paragraph } from "../atoms/Paragraph";
import Link from "next/link";
import Image from "next/image";
import People from "../../Images/people.png"
import Company from "../../Images/companies.png";
import Stats from "../../Images/stats.png"
import Mac from "../../Images/mac.png"
import Mac2 from "../../Images/mac2.png"
import Tech from "../../Images/tech.png"
import Screen1 from "../../Images/screen1.png"
import Screen2 from "../../Images/screen2.png"
import Screen3 from "../../Images/screen3.png"
import Check from "../../Images/check.png"
import Payment from "./payment";
import Math from "../../Images/math.png"
import Carousel from "../molecules/Carousel";
function HomePage() {
  return (
    <>
    <div className="h-screen w-screen bg-indigo-100">
        <Header/>
        <Container className="mx-auto flex w-3/5 text-center items-center justify-center font-bold h-2/6">
          <Paragraph className="text-5xl text-black ">
              A UI/UX design subscription so good 
              it should come with a warning label
          </Paragraph>
        </Container>

    <div className="w-screen">
        <Container className="flex justify-evenly items-center h-2 font-extrabold">
            <div className="flex flex-row">
                <Image src={Check}></Image>
                <Paragraph>No hiring headaches</Paragraph>
            </div>

            <div className="flex flex-row">
                <Image src={Check}></Image>
                <Paragraph>Weekly turnaround times</Paragraph>
            </div>

            <div className="flex flex-row">
                <Image src={Check}></Image>
                <Paragraph>One flat monthly rate</Paragraph>
            </div>
        </Container>
    </div>
        <Container className=" flex mx-auto flex w-max h-16 m-10">
            <Link className="flex justify-center items-center text-xl bg-orange-500 text-white p-5" href="#">
            START YOUR RISK-FREE TRIAL</Link>
        </Container>

        <Container className="h-1/4">
          <Image className="object-fill" src={People}></Image>
        </Container>


        <Container className="flex h-2/6 bg-stone-800 flex-column w-full">
              <Paragraph className="text-4xl flex items-center justify-center text-2xl w-full text-white">
                We helped our customers raise 1B+
              </Paragraph>
       
            
        </Container>
        <Image className="" src={Company}></Image>


        <Container className="h-2/6 font-bold w-4/5 mx-auto flex items-center justify-center bg-gray-100">
            <Paragraph className="text-5xl text-center">
                A diverse team of passionate UX nerds who are 
                here to help your startup succeed
            </Paragraph>

            
        </Container>

        <div className="h-3 w-screen mx-auto flex items-center justify-center bg-gray-100 ">
            <Paragraph className="flex w-full text-center text-sm items-center justify-center">
                From ideation to expansion, TDP understands the unique demands of your startup—providing you with optimized design 
                strategies and fast turnarounds for an affordable monthly subscription.
            </Paragraph>
        </div>

        <Image className="" src={Stats}></Image>


        <Container className="flex items-center justify-center w-screen text-center h-2/6">
            <Paragraph className="text-4xl font-bold w-full">How signing up with The Design Project works</Paragraph>

        </Container>    


        <div className="flex items-center justify-center w-screen text-center">
        <Paragraph className="text-base font-semi w-4/6 ">Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</Paragraph>
        </div>


        <Container className="flex h-5/6 ">
            <Container className="flex flex-col w-screen text-center justify-center items-center">
                <div className="text-white p-5 text-4xl bg-orange-500 w-fit rounded-full flex justify-center items-center">01</div>

                <div className="text-xl text-orange-500 font-bold">Sign up for one of our services</div>

                <Image src={Mac}></Image>

                <div className="w-3/4 text-center">Sign up for one of our affordable subscription plans—which offer a variety of options to fit your unique needs.</div>
            </Container>
                
            <Container className="flex flex-col w-screen text-center justify-center items-center">
                <div className="text-white p-5 text-4xl bg-orange-500 w-fit rounded-full flex justify-center items-center">02</div>

                <div className="text-xl text-orange-500 font-bold">Meet your perfect match</div>
                  
                <Image src={Tech}></Image>
                  
                <div className="w-3/4 text-center">We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.</div>
            </Container>



            <Container className="flex flex-col w-screen text-center justify-center items-center">
                <div className="text-white p-5 text-4xl bg-orange-500 w-fit rounded-full flex justify-center items-center">03</div>

                <div className="text-xl text-orange-500 font-bold">The first sprint begins (hold on tight)</div>
                  
                <Image src={Mac2}></Image>
                  
                <div className="w-3/4 text-center">TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.</div>
            </Container>
        </Container>

        <Container className="bg-stone-800 text-white w-screen">
            <Paragraph className="text-4xl font-bold flex justify-center pt-36">
            How accessible UX design is changing the businesses for the better
            </Paragraph>

            <Container className="bg-stone-800 flex flex-col p-6">
                <Image className="p-6" src={Screen1}></Image>
                <Image className="p-6" src={Screen2}></Image>
                <Image className="p-6" src={Screen3}></Image>
            </Container>


        </Container>


        {/* <---- Carousel ----> */}

        <Carousel/>



        <Payment/>

        <Container className="w-screen h-5/6 bg-gray-300 flex">
            <Container className="bg-black h-4/6 flex flex-col w-screen">
                <div className="text-white text-5xl font-bold flex justify-center items-center w-full h-2/4">Let’s build something awesome together!</div>
                <div className="text-white font-bold">Try us risk free for 7 days, if you don’t love us, get your money back.</div>
                <Link className="text-white text-xl font-bold border-2 w-fit p-6 bg-orange-500 mb-12" href="#">GET STARTED -</Link>
            </Container>
        </Container>

        <Footer/>
    </div>
    </>
  )
}

export default HomePage;
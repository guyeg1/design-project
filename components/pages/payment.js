import { Container } from "../atoms/Container";
import { Paragraph } from "../atoms/Paragraph";
import HomePage from "../pages/HomePage";
import Link from "next/link";

export default function Payment() {
    return (
        <Container className="flex w-full h-fit overflow-hidden space-x-12">
            <Container className="flex flex-col w-2/6 border-2 m-6">
                <Paragraph className="font-bold text-3xl p-2">
                    Essential
                </Paragraph>

                <Paragraph className="pb-12">Great for basic UI/UX design needs</Paragraph>

                <Paragraph className="text-orange-500 text-5xl font-bold">$2,600</Paragraph>
                <Paragraph className="text-orange-500 font-bold pb-12">PER MONTH</Paragraph>

                <div className="flex flex-col justify-start">
                    <Paragraph className="flex justify-self-start">WHAT'S INCLUDED:</Paragraph>
                    <div>- UI execution</div>
                    <div>- Connect on Slack</div>
                    <div>- One 30minute meeting a week</div>
                </div>


                <div className="flex flex-col justify-start p-20">
                    <div className="flex justify-self-start font-bold text-xl">DESIGN TEAM</div>

                    <div>- 1 designer working with 4-5 other customers at the same time</div>
                </div>

                <Link className="border-2 border-black px-16 py-8" href="/HomePage">TRY FREE</Link>

            </Container>



            <Container className="flex flex-col w-2/6 border-2 border-orange-500 m-6">
                
            <Paragraph className="font-bold text-3xl p-2">
                    Pro
                </Paragraph>

                <Paragraph className="">Great for end-to-end product design</Paragraph>

                <Paragraph className="text-orange-500 text-5xl font-bold pt-12">$3,595</Paragraph>
                <Paragraph className="text-orange-500 font-bold pb-12">PER MONTH</Paragraph>

                <div className="flex flex-col justify-start">
                    <Paragraph className="flex justify-self-start">WHAT'S INCLUDED:</Paragraph>
                    <div>- Everything in Essential</div>
                    <div>- Full UI/UX design and research</div>
                    <div>- Dev ready Figma files</div>
                </div>


                <div className="flex flex-col justify-start p-20">
                    <div className="flex justify-self-start font-bold text-xl">DESIGN TEAM</div>

                    <div>- 1 designer working on 2-3 other customers at the same time</div>
                </div>

                <Link className="border-2 border-orange-500 text-orange-500 px-16 py-8" href="/HomePage">TRY FREE</Link>


            </Container>

            
            <Container className="flex flex-col w-2/6 border-2 m-6">
            <Paragraph className="font-bold text-3xl p-2">
                    Turbo
                </Paragraph>

                <Paragraph className="pb-6 text-center w-2/3">Great for products that require more design horsepower and tight timelines</Paragraph>

                <Paragraph className="text-orange-500 text-5xl font-bold">$5,200</Paragraph>
                <Paragraph className="text-orange-500 font-bold pb-12">PER MONTH</Paragraph>

                <div className="flex flex-col justify-start">
                    <Paragraph className="flex justify-self-start">WHAT'S INCLUDED:</Paragraph>
                    <div>- UI execution</div>
                    <div>- Connect on Slack</div>
                    <div>- One 30minute meeting a week</div>
                </div>


                <div className="flex flex-col justify-start p-20">
                    <div className="flex justify-self-start font-bold text-xl">DESIGN TEAM</div>

                    <div>- 1 designer working with 4-5 other customers at the same time</div>
                </div>

                <Link className="border-2 border-black px-16 py-8" href="/HomePage">TRY FREE</Link>


            </Container>
        </Container>
    )
}
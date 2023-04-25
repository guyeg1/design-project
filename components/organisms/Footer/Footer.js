import { Container } from "../../atoms/Container";
import { Paragraph } from "../../atoms/Paragraph";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../Images/logo.png";
import Email from "../../../Images/email.png"
import Insta from "../../../Images/insta.png"
import In from "../../../Images/in.png"



const Footer = () => {
    return (
    <Container className="h-3/5 w-screen bg-stone-800 flex">
        <Container className="flex flex-col items-stretch self-center p-24">
            <Paragraph className="font-bold text-5xl text-white">the design project</Paragraph>

            <div className="flex space-x-8 pt-9">
                <div className="flex ">
                    <Image src={Email}></Image>
                    <Paragraph className="text-white">hello@designproject.io</Paragraph>
                </div>
                
                <div className="flex">
                    <Image src={Insta}></Image>
                    <Paragraph className="text-white">@designproject.io</Paragraph>
                </div>

                <div className="flex">
                    <Image src={In}></Image>
                    <Paragraph className="text-white">The Design Project</Paragraph>
                </div>
            </div>

            <Link className="text-white text-xl font-bold border-2 w-fit p-6 bg-orange-500 mt-6" href="#">CONTACT US -</Link>
        </Container>

        <Container className="flex flex-col text-white space-y-6 text-left font-bold">
            <div>HOW IT WORKS</div>
            <div>ABOUT</div>
            <div>OUR WORK</div>
            <div>BLOG</div>
            <div>CONTACT US</div>

        </Container>

        {/* <Paragraph className="text-white flex self-end">© 2022 The Design Project</Paragraph> */}
    </Container>
    )
}

export default Footer;
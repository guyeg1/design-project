import React, { useState } from "react"
import { Container } from "../../atoms/Container"
import { Paragraph } from "../../atoms/Paragraph"
import { animated, useSpring } from '@react-spring/web';
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../Images/logo.png"



const Header = () => {
  const [IsSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const navStyle = useSpring({
    opacity: IsSideMenuOpen ? 1 : 0,
    right: IsSideMenuOpen ? 0 : -270
  })
  const hamburgerStyle2 = useSpring({
    opacity: IsSideMenuOpen ? 0 : 1
  })
  const hamburgerStyle1 = useSpring({
    y: IsSideMenuOpen ? 8 : 0,
    rotate: IsSideMenuOpen ? 225 : 0
  })
  const hamburgerStyle3 = useSpring({
    y: IsSideMenuOpen ? -8 : 0,
    rotate: IsSideMenuOpen ? -225 : 0
  })
  return (
    <>
      <header className="fixed z-20 flex h-24 w-full items-center overflow-hidden bg-primary-50/30 backdrop-blur flex-row">
        <Container className="flex px-16 py-6">
          <div className="flex items-center text-2xl font-black text-primary-900">
            <div
              style={{
                position: "relative",
                width: "60px",
                height: "60px",
                marginRight: "8px"
              }}
            >
              <Image
                src={Logo}
                layout="fill"
                objectFit="contain"
                alt=""
                priority
                loading="eager"
              />
            </div>
            <div className="text-3xl font-bold">the design project</div>
          </div>

          <div className="z-20 flex items-end sm:hidden">
            <button
              className="ml-4 flex flex-col"
              onClick={() => {
                setIsSideMenuOpen(!IsSideMenuOpen)
              }}
            >
              <animated.span
                style={hamburgerStyle1}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle2}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle3}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
            </button>
          </div>

          <div className="hidden items-end sm:flex font-bold">
            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-black-500">
              <Link href="/">HOW IT WORKS</Link>
            </Paragraph>

            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-500">
              <Link href="/">ABOUT</Link>
            </Paragraph>

            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-500">
              <Link href="/">WORK</Link>
            </Paragraph>

            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-500">
              <Link href="/">PRICING</Link>
            </Paragraph>

            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-500">
              <Link href="/">BLOG</Link>
            </Paragraph>
            
            <div className="text-orange-500 border-solid border-orange-500 p-4 border-2" href="#">GET STARTED</div>
          </div>
        </Container>
      </header>

      <animated.nav
        style={navStyle}
        className="fixed top-0 z-10 flex h-full flex-col bg-primary-50/30 p-6 text-lg text-white-900 backdrop-blur"
      >
        <ul className="mt-24 flex flex-col">
          <li>
            <div className="border-none flex cursor-pointer py-2 px-8 ">
              <Link href="#">HOW IT WORKS</Link>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="#">ABOUT</Link>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="#">WORK</Link>
            </div>
          </li>

          <li>
            <div className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="#">HOW IT WORKS</Link>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="#">ABOUT</Link>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="#">WORK</Link>
            </div>
          </li>
        </ul>
      </animated.nav>

      <div className="relative h-24 w-full" />
    </>
  )
}

export default Header;
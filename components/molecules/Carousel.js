// import Image from "next/image";
// import { useState } from "react";
// import Swipe from "react-easy-swipe";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Tech from "../../Images/tech.png"

 
// export default function Carousel({ images }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     let newSlide = currentSlide === images?.length - 1 ? 0 : currentSlide + 1;
//     setCurrentSlide(newSlide);
//   };

//   const handlePrevSlide = () => {
//     let newSlide = currentSlide === 0 ? images?.length - 1 : currentSlide - 1;
//     setCurrentSlide(newSlide);
//   };

//   return (
//     <div className="relative">
//       <AiOutlineLeft
//         onClick={handlePrevSlide}
//         className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />
//       <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
//         <Swipe
//           onSwipeLeft={handleNextSlide}
//           onSwipeRight={handlePrevSlide}
//           className="relative z-10 w-full h-full"
//         >
//           {images?.map((image, index) => {
//             if (index === currentSlide) {
//               return (
//                 <Image
//                   key={image.id}
//                   src={Tech}
//                   layout="fill"
//                   objectFit="contain"
//                   className="animate-fadeIn"
//                 />
//               );
//             }
//           })}
//         </Swipe>
//       </div>
//       <AiOutlineRight
//         onClick={handleNextSlide}
//         className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />

//       <div className="relative flex justify-center p-2">
//         {images?.map((_, index) => {
//           return (
//             <div
//               className={
//                 index === currentSlide
//                   ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
//                   : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
//               }
//               key={index}
//               onClick={() => {
//                 setCurrentSlide(index);
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// export default function Carousel () {
//     return (<section id="home-testimonials"><div class="center sal-animate" data-sal="slide-up" data-sal-duration="250" data-sal-delay="100"><div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"><div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);"><div class="swiper-slide swiper-slide-active" style="width: 542px;"><article><h4>TDP helped identify the main pain points and designed a new UX that is accessible and easy to understand. The redesign pushed us forward on our mission to be able to verify 100% of IDs in real-time, and we raised over $100M in funding.</h4><div class="profile"><div><img src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erick_desoto_17d68fc497.png" alt=""/></div><div><h5>Erick Desoto</h5><h6>VP of Product at Socure</h6></div></div></article></div><div class="swiper-slide swiper-slide-next" style="width: 542px;"><article><h4>"We wanted to deliver something more than your average, boring onboarding experience. Cybersecurity is complex, but we wanted to deliver something fun and new. The Design Project was able to bring this gamified vision to life in a profoundly simple, fun way."</h4><div class="profile"><div><img src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erkang_2fbc7460a9.png" alt=""/></div><div><h5>ERKANG ZHENG</h5><h6>CEO and Founder at JupiterOne</h6></div></div></article></div><div class="swiper-slide" style="width: 542px;"><article><h4>"TDP does a great job at understanding our business challenges and coming up with elegant design solutions to solve them. Communication is fluid and enables us to move quickly, adapt to changes and pivot to achieve our goals."</h4><div class="profile"><div><img src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/elliot_0b5226de35.png" alt=""/></div><div><h5>ELLIOT CHEN</h5><h6>Head of product at OXIO</h6></div></div></article></div></div><div class="swiper-button-prev swiper-button-disabled"></div><div class="swiper-button-next"></div></div><div class="centro"><a href="/work" data-sal="slide-up" data-sal-duration="250" data-sal-delay="100" class="sal-animate">See our Case Studies<img src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/Arrow_1_1ddb2c71c4.png" alt=""/></a></div></div></section>)
//   }
  
export default function Carousel () {
    return (<section id="home-testimonials">
  <div
    className="center sal-animate"
    data-sal="slide-up"
    data-sal-duration={250}
    data-sal-delay={100}
  >
    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
      <div
        className="swiper-wrapper w-screen snap-x snap-mandatory px-20 overflow-scroll flex flex-row space-x-5 flex-nowrap items-center"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div
          className="swiper-slide snap-center shrink-0 swiper-slide-active"
          style={{ width: 542 }}
        >
          <article>
            <h4>
              TDP helped identify the main pain points and designed a new UX
              that is accessible and easy to understand. The redesign pushed us
              forward on our mission to be able to verify 100% of IDs in
              real-time, and we raised over $100M in funding.
            </h4>
            <div className="profile">
              <div>
                <img
                  src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erick_desoto_17d68fc497.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Erick Desoto</h5>
                <h6>VP of Product at Socure</h6>
              </div>
            </div>
          </article>
        </div>
        <div className="swiper-slide snap-center shrink-0 swiper-slide-next" style={{ width: 542 }}>
          <article>
            <h4>
              "We wanted to deliver something more than your average, boring
              onboarding experience. Cybersecurity is complex, but we wanted to
              deliver something fun and new. The Design Project was able to
              bring this gamified vision to life in a profoundly simple, fun
              way."
            </h4>
            <div className="profile">
              <div>
                <img
                  src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erkang_2fbc7460a9.png"
                  alt=""
                />
              </div>
              <div>
                <h5>ERKANG ZHENG</h5>
                <h6>CEO and Founder at JupiterOne</h6>
              </div>
            </div>
          </article>
        </div>
        <div className="swiper-slide snap-center shrink-0 swiper-slide-next" style={{ width: 542 }}>
          <article>
            <h4>
              "We wanted to deliver something more than your average, boring
              onboarding experience. Cybersecurity is complex, but we wanted to
              deliver something fun and new. The Design Project was able to
              bring this gamified vision to life in a profoundly simple, fun
              way."
            </h4>
            <div className="profile">
              <div>
                <img
                  src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erkang_2fbc7460a9.png"
                  alt=""
                />
              </div>
              <div>
                <h5>ERKANG ZHENG</h5>
                <h6>CEO and Founder at JupiterOne</h6>
              </div>
            </div>
          </article>
        </div>
        <div className="swiper-slide snap-center shrink-0 swiper-slide-next" style={{ width: 542 }}>
          <article>
            <h4>
              "We wanted to deliver something more than your average, boring
              onboarding experience. Cybersecurity is complex, but we wanted to
              deliver something fun and new. The Design Project was able to
              bring this gamified vision to life in a profoundly simple, fun
              way."
            </h4>
            <div className="profile">
              <div>
                <img
                  src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/erkang_2fbc7460a9.png"
                  alt=""
                />
              </div>
              <div>
                <h5>ERKANG ZHENG</h5>
                <h6>CEO and Founder at JupiterOne</h6>
              </div>
            </div>
          </article>
        </div>
        <div className="swiper-slide snap-center shrink-0" style={{ width: 542 }}>
          <article>
            <h4>
              "TDP does a great job at understanding our business challenges and
              coming up with elegant design solutions to solve them.
              Communication is fluid and enables us to move quickly, adapt to
              changes and pivot to achieve our goals."
            </h4>
            <div className="profile">
              <div>
                <img
                  src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/elliot_0b5226de35.png"
                  alt=""
                />
              </div>
              <div>
                <h5>ELLIOT CHEN</h5>
                <h6>Head of product at OXIO</h6>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="swiper-button-prev swiper-button-disabled" />
      <div className="swiper-button-next" />
    </div>
    <div className="centro">
      <a
        href="/work"
        data-sal="slide-up"
        data-sal-duration={250}
        data-sal-delay={100}
        className="sal-animate"
      >
        See our Case Studies
        <img
          src="https://designproject-strapi-images.s3.us-east-2.amazonaws.com/Arrow_1_1ddb2c71c4.png"
          alt=""
        />
      </a>
    </div>
  </div>
</section>
)
}

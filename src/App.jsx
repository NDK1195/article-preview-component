import avatar from "./images/avatar-michelle.jpg";
import iconFacebook from "./images/icon-facebook.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import iconTwitter from "./images/icon-twitter.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isOpenShare, setIsOpenShare] = useState(false);

  return (
    <main className="bg-light-grayish-blue">
      <div className="flex min-h-screen items-center justify-center">
        {/* <!-- container --> */}
        <div className="relative mx-6 flex min-w-[327px] max-w-[730px] flex-col gap-9 rounded-[10px] bg-white shadow-box lg:mx-0 lg:flex-row lg:gap-10">
          {/* <!-- image --> */}
          <div className="h-[200px] w-full rounded-t-[10px] bg-image bg-cover bg-no-repeat lg:h-[280px] lg:rounded-bl-[10px] lg:rounded-tr-none"></div>
          {/* <!-- content --> */}
          <div className="px-8 pb-5 lg:py-8 lg:pl-0 lg:pr-10">
            <h1 className="mb-3 font-bold leading-6 tracking-[0.2px] text-very-dark-grayish-blue lg:text-xl lg:leading-7 lg:tracking-[0.25px]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="mb-8 text-[13px] font-medium leading-5 tracking-[0.122px] text-desaturated-dark-blue lg:mb-5">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            {/* <!-- author --> */}
            <div className="flex items-center justify-between">
              {/* <!-- avatar & info --> */}
              <div className="flex items-center gap-4">
                <img
                  src={avatar}
                  alt="avatar"
                  className="size-10 rounded-full"
                />
                {/* <!-- info --> */}
                <div className="flex flex-col">
                  <h2 className="text-[13px] font-bold leading-5 tracking-[0.122px] text-very-dark-grayish-blue">
                    Michelle Appleton
                  </h2>
                  <p className="text-[13px] font-medium leading-5 tracking-[0.122px] text-grayish-blue">
                    28 Jun 2020
                  </p>
                </div>
              </div>
              {/* <!-- share --> */}
              <a
                href="#"
                className={`z-10 flex size-8 items-center justify-center rounded-full ${isOpenShare ? "relative top-2 bg-desaturated-dark-blue lg:static" : "static bg-[#ecf2f8]"} hover:bg-desaturated-dark-blue`}
                onClick={() => setIsOpenShare((isOpenShare) => !isOpenShare)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill="#6E8098"
                    className={`${isOpenShare ? "fill-white" : ""} hover:fill-white`}
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- socials --> */}
          <AnimatePresence>
            {isOpenShare && (
              <motion.div
                className="triangle absolute bottom-0 left-0 flex h-16 w-full items-center rounded-b-[10px] bg-very-dark-grayish-blue px-8 py-4 lg:bottom-[83px] lg:left-[543px] lg:max-w-[248px] lg:rounded-[10px]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* icons */}
                <div className="flex items-center gap-5 lg:justify-center">
                  <h3 className="text-[13px] font-medium uppercase leading-5 tracking-[5px] text-grayish-blue">
                    share
                  </h3>
                  <div className="flex items-center gap-4">
                    <a href="#">
                      <img src={iconFacebook} alt="icon facebook" />
                    </a>
                    <a href="#">
                      <img src={iconTwitter} alt="icon twitter" />
                    </a>
                    <a href="#">
                      <img src={iconPinterest} alt="icon pinterest" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
export default App;

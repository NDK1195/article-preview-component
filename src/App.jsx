import drawers from './images/drawers.jpg'
import avatar from './images/avatar-michelle.jpg'
import iconShare from './images/icon-share.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconPinterest from './images/icon-pinterest.svg'
import iconTwitter from './images/icon-twitter.svg'

function App() {
  return (
    <main className="bg-light-grayish-blue">
    <div className="flex min-h-screen items-center justify-center">
      {/* <!-- container --> */}
      <div
        className="mx-6 flex min-w-[327px] max-w-[730px] flex-col gap-9 rounded-[10px] bg-white shadow-box lg:mx-0 lg:flex-row lg:gap-10"
      >
        {/* <!-- image --> */}
        <div className="lg:max-w-[285px]">
          <img
            src={drawers}
            alt="drawers"
            className="w-full rounded-t-[10px]"
          />
        </div>
        {/* <!-- content --> */}
        <div className="px-8 pb-5">
          <h1
            className="mb-3 font-bold leading-6 tracking-[0.2px] text-very-dark-grayish-blue"
          >
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p
            className="mb-8 text-[13px] font-medium leading-5 tracking-[0.122px] text-desaturated-dark-blue"
          >
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
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
                <h2
                  className="text-[13px] font-bold leading-5 tracking-[0.122px] text-very-dark-grayish-blue"
                >
                  Michelle Appleton
                </h2>
                <p
                  className="text-[13px] font-medium leading-5 tracking-[0.122px] text-grayish-blue"
                >
                  28 Jun 2020
                </p>
              </div>
            </div>
            {/* <!-- share --> */}
            <a
              href="#"
              className="flex size-8 items-center justify-center rounded-full bg-[#ecf2f8]"
              ><img src={iconShare} alt="icon share"
            /></a>
            {/* <!-- socials --> */}
            <div className="hidden">Share</div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
export default App
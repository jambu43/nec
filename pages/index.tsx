import Head from "next/head";
import { Inter } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, differenceInSeconds } from 'date-fns';
import Countdown from "@/components/Countdown";
import Image from "next/image";

library.add(faEnvelope);

export default function Home() {
  return (
    <div className="main-wrapper">
      <main className="main-container">
        <section className="position-relative full-screen d-flex flex-column justify-content-center text-center pt-100 pb-100">
          <div
            className="brk-backgrounds brk-bg-gradient-35deg-92 brk-abs-overlay brk-library-rendered"
            data-brk-library="component__backgrounds_css,assets_fss"
          >
          </div>
          <div className="container z-index-2">
            <Image src="/images/logo.png" width={250} height={450} alt="logo" />
            <h1 className="font__family-montserrat font__weight-bold font__size-64 line__height-64 text-white mt-0 mb-15">
             Site en construction!
            </h1>
            <h2 className="font__family-montserrat font__weight-normal font__size-18 line__height-21 text-white opacity-40">
              Notre site web sera en ligne dans :
            </h2>
            <div className="countdown__wrapper countdown__large pt-50 pb-60">
              {/* counter here */}
              <Countdown />
            </div>
            <form
              action="https://berserk.nikadevs.com/coming-soon.html#"
              name="subscribe"
              className="brk-form-transparent brk-form-btn-inside brk-form-btn-inside_left maxw-300 brk-subscribe-mail rendered brk-library-rendered lazyloaded brk-recaptcha-rendered"
              data-brk-library="recaptcha"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="S'ABONNER"
                className="w-100 text-center pl-35"
              />
              <button type="submit" className="btn-white">
                {/* <i className="far fa-envelope"></i> */}
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
              <input
                name="g-recaptcha-response"
                type="hidden"
              />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

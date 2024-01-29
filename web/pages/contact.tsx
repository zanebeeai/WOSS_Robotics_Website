import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactUsScreen() {
  return (
    <>
      <Head>
        <title>Contact [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="👋 Contact Us"
        subtitle="Don't hesitate to get in touch with us - we're always here to help."
      />
      <div className="flex items-center justify-center pr-5 pl-5">
        <div className="flex items-center justify-center flex-col md:w-[939px] border-2 border-gray-600 rounded-lg px-10 py-8">
          <h2 className="font-bold text-gray-300 text-lg mb-3">
            Have any questions?
          </h2>
          <div className="flex flex-wrap gap-4 mb-3 items-center justify-center">
            <a href="https://www.instagram.com/frc6070" target="_blank">
              <p className="text-md font-bold text-pink-400 hover:text-white">
                <FaInstagram className="inline mr-1" size={20} /> Instagram
              </p>
            </a>
            <a href="https://twitter.com/frc6070" target="_blank">
              <p className="text-md font-bold text-sky-400 hover:text-white">
                <FaTwitter className="inline mr-1" size={20} /> Twitter
              </p>
            </a>
            <a
              href="https://www.facebook.com/frc6070"
              target="_blank"
              className="md:block hidden"
            >
              <p className="text-md font-bold text-blue-600 hover:text-white">
                <FaFacebook className="inline mr-1" size={20} /> Facebook
              </p>
            </a>
            <a href="mailto:gryphonmachine@gmail.com" target="_blank">
              <p className="text-md font-bold text-primary hover:text-white">
                <IoMdMail className="inline mr-1" size={20} /> Email
              </p>
            </a>
          </div>
          <span className="text-gray-400 text-xs mb-10">
            Glenforest Secondary School • FRC 6070
          </span>
          <iframe
            style={{
              filter: "invert(100%) hue-rotate(180deg)",
              borderRadius: "20px",
            }}
            className="md:w-[850px] md:h-[450px] h-[300px] border-2 border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9794644333642!2d-79.59473948789925!3d43.627786353953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b387a74621bc9%3A0x48123a1faebcc518!2sGlenforest%20Secondary%20School!5e0!3m2!1sen!2sca!4v1681771474867!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </div>

      <Footer />
    </>
  );
}

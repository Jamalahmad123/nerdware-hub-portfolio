import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaUser, FaCommentAlt } from "react-icons/fa";
import Button from "../Components/shared/Button";
// import PageName from "../Components/shared/PageName";
import Wrapper from "../Components/shared/Wrapper";
import { pageFromStart, useTitle } from "../CustomHooks/CustomHook";

const Contact = () => {
  pageFromStart();

  useTitle("NerdWareHub Digital Ageny | Contact-us");

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        className={`py-10 md:py-14 bg-center bg-no-repeat bg-cover bg-contact`}
      >
        <Wrapper className="space-y-7 md:py-14">
          {/* <PageName page="Contact" /> */}
          <div className="overflow-hidden">
            <motion.h1
              animate={{ y: "0" }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white"
            >
              Contact Us
            </motion.h1>
          </div>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl text-gray-200"
          >
            At Nerdwarehub, we are dedicated to providing our clients with the
            highest level of service and support. If you have any questions or
            would like to learn more about our services, please don't hesitate
            to contact us. You can reach us by phone, email or through our
            website contact form.
            {/*  Our customer service team is available to
            answer any questions you may have and provide you with the
            information you need to make an informed decision about our
            services. We look forward to hearing from you and helping you
            achieve your business goals through our expert digital solutions. */}
          </motion.p>
        </Wrapper>
      </motion.header>
      <section className="bg-gray-100">
        <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-primary">Let's get in touch!</h2>
            <p className="text-gray-700 mt-4 mb-8">
              Your information is safe with us. We guarantees 100% data
              security. We don’t use emails for spamming.
            </p>
            <div className="p-6 shadow-lg rounded-lg">
              <span className="text-orange-600">
                <FaEnvelope className="inline-block mr-2" /> Send Us an Email:
              </span>
              <p className="mt-2 mb-5 text-gray-700">
                Our support team will get back to in 24-h during standard
                business hours.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  Info@nerdwarehub.com
                </a>
                <a
                  href="mailto:careers@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  careers@nerdwarehub.com
                </a>
              </div>
            </div>
            <div className="p-6 shadow-lg rounded-lg mt-6">
              <span className="text-orange-600">
                <FaPhoneAlt className="inline-block mr-2" /> Phone/Whatsapp:
              </span>
              <p className="mt-2 mb-5 text-gray-700">
                Assistance Hours: Mon – Sat, 9 am to 6 pm
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+92 317 6440066"
                  className="text-lg font-semibold text-primary"
                >
                  +92 317 6440066
                </a>
                <a
                  href="tel:+92 340 4619940"
                  className="text-lg font-semibold text-primary"
                >
                  +92 340 4619940
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg space-y-10">
            <h3 className="text-primary text-2xl md:text-3xl">Hey! there :)</h3>
            <div className="flex items-center border-b border-primary">
              <FaUser />
              <input
                type="text"
                className="w-full px-3 focus-within:outline-none border-none focus:border-none bg-transparent"
                placeholder="Full Name*"
              />
            </div>
            <div className="flex items-center border-b border-primary">
              <FaEnvelope />
              <input
                type="email"
                className="w-full px-3 focus-within:outline-none border-none focus:border-none bg-transparent"
                placeholder="Email*"
              />
            </div>
            <div className="flex items-center border-b border-primary">
              <FaPhoneAlt />
              <input
                type="tel"
                className="w-full px-3 focus-within:outline-none border-none focus:border-none bg-transparent"
                placeholder="Phone number*"
              />
            </div>
            <div className="flex items-start border-b border-primary">
              <FaCommentAlt className="mt-1" />
              <textarea
                className="w-full px-3 focus-within:outline-none border-none focus:border-none bg-transparent"
                placeholder="Brief about the project*"
              ></textarea>
            </div>
            <div className="space-y-6">
              <span className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  className="w-[25px] h-[25px]"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  By clicking the “Submit” button you agree to our Terms &
                  Conditions.
                </label>
              </span>
              <Button styles="bg-black-gradient-2 w-full rounded-full text-white">
                Submit
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Contact;

//
//

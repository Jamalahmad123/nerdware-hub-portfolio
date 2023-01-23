import { FaEnvelope, FaPhoneAlt, FaUser, FaCommentAlt } from "react-icons/fa";
import Button from "../Components/shared/Button";
import PageName from "../Components/shared/PageName";
import Wrapper from "../Components/shared/Wrapper";
import { pageFromStart } from "../CustomHooks/CustomHook";

const Contact = () => {
  pageFromStart();

  return (
    <>
      <header className={`py-16 bg-center bg-no-repeat bg-cover bg-contact`}>
        <Wrapper className="space-y-7 md:py-14">
          {/* <PageName page="Contact" /> */}
          <h1 className="text-white">Contact Us</h1>
          <p className="max-w-xl text-dimWhite">
            If you have questions, need support, or anything else, please fill
            the form below. We are here to help you.
          </p>
        </Wrapper>
      </header>
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
                  href="malto:jamal@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  info@nerdware.com
                </a>
                <a
                  href="malto:jamal@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  hr@nerdware.com
                </a>
              </div>
            </div>
            <div className="p-6 shadow-lg rounded-lg mt-6">
              <span className="text-orange-600">
                <FaPhoneAlt className="inline-block mr-2" /> Phone/Whatsapp:
              </span>
              <p className="mt-2 mb-5 text-gray-700">
                Assistance Hours: Mon – Sat, 10 am to 7 pm
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="malto:jamal@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  555 555 555
                </a>
                <a
                  href="malto:jamal@nerdwarehub.com"
                  className="text-lg font-semibold text-primary"
                >
                  555 555 555
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

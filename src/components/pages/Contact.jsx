import Footer from "../common/Footer"
import Header from "../common/Header"

function Contact(){
    return(
        <section>
            <Header/>
       
          <section className="w-full flex justify-center px-5 py-10">

      <div className="w-full max-w-[552px] bg-white rounded-xl px-[30px] py-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

        <form className="flex flex-col gap-[18px]">

          
          <div>
            <label
              htmlFor="name"
              className="block text-[13px] font-medium text-[#292d32] mb-[6px]"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              className="w-full h-[42px] px-3 bg-[#f5f7f7] border border-[#d5d8d8] rounded-md outline-none text-sm text-gray-800 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-[#292d32] mb-[6px]"
            >
              Your Email
            </label>

            <input
              id="email"
              type="email"
              className="w-full h-[42px] px-3 bg-[#f5f7f7] border border-[#d5d8d8] rounded-md outline-none text-sm text-gray-800 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          
          <div>
            <label
              htmlFor="subject"
              className="block text-[13px] font-medium text-[#292d32] mb-[6px]"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              className="w-full h-[42px] px-3 bg-[#f5f7f7] border border-[#d5d8d8] rounded-md outline-none text-sm text-gray-800 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] font-medium text-[#292d32] mb-[6px]"
            >
              Your Message
            </label>

            <textarea
              id="message"
              rows="5"
              className="w-full min-h-[112px] px-3 py-3 bg-[#f5f7f7] border border-[#d5d8d8] rounded-md outline-none resize-y text-sm text-gray-800 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-[42px] mt-[1px] rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[13px] font-semibold flex items-center justify-center gap-3 shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
          >
            Send Message

            <span className="text-[18px]">
              ➤
            </span>
          </button>

        </form>

      </div>

    </section>

        <Footer/>
        </section>
    )
}
export default Contact
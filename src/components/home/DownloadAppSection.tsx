
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DownloadAppSection = () => {
  return (
    <section className="py-16 bg-primary-800 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get the Healwise App</h2>
            <p className="text-lg text-blue-100 mb-6">
              Download our mobile app for a seamless healthcare experience. Book appointments, consult with doctors, and manage your medical records—all from your phone.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary-800 hover:bg-gray-100">
                <svg
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5227 7.39601V8.92935C17.5227 9.31491 17.2468 9.59601 16.8682 9.59601C16.4896 9.59601 16.2137 9.31491 16.2137 8.92935V7.39601H14.6C14.2214 7.39601 13.9455 7.11491 13.9455 6.72935C13.9455 6.34379 14.2214 6.06268 14.6 6.06268H16.2137V4.52935C16.2137 4.14379 16.4896 3.86268 16.8682 3.86268C17.2468 3.86268 17.5227 4.14379 17.5227 4.52935V6.06268H19.1364C19.515 6.06268 19.7909 6.34379 19.7909 6.72935C19.7909 7.11491 19.515 7.39601 19.1364 7.39601H17.5227Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.93582 11.7792C8.93582 9.45941 10.8075 7.59277 13.1364 7.59277H16.8637C19.1925 7.59277 21.0637 9.45941 21.0637 11.7792V16.7689C21.0637 19.0887 19.1925 20.9554 16.8637 20.9554H13.1364C10.8075 20.9554 8.93582 19.0887 8.93582 16.7689V11.7792ZM13.1364 8.92611H16.8637C18.4591 8.92611 19.7546 10.216 19.7546 11.7792V16.7689C19.7546 18.3322 18.4591 19.622 16.8637 19.622H13.1364C11.5409 19.622 10.2455 18.3322 10.2455 16.7689V11.7792C10.2455 10.216 11.5409 8.92611 13.1364 8.92611Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.93573 5.12571C2.93573 3.93129 3.90963 2.9574 5.10405 2.9574H8.23678C9.4312 2.9574 10.4051 3.93129 10.4051 5.12571V18.8743C10.4051 20.0687 9.4312 21.0426 8.23678 21.0426H5.10405C3.90963 21.0426 2.93573 20.0687 2.93573 18.8743V5.12571ZM5.10405 4.29073H8.23678C8.6955 4.29073 9.07178 4.66702 9.07178 5.12571V18.8743C9.07178 19.333 8.6955 19.7093 8.23678 19.7093H5.10405C4.64536 19.7093 4.26907 19.333 4.26907 18.8743V5.12571C4.26907 4.66702 4.64536 4.29073 5.10405 4.29073Z"
                    fill="currentColor"
                  />
                </svg>
                App Store
              </Button>
              <Button className="bg-white text-primary-800 hover:bg-gray-100">
                <svg
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2548 9.86623L15.8691 6.26326C16.1595 5.97212 16.1595 5.49702 15.8691 5.20588C15.5787 4.91475 15.105 4.91475 14.8146 5.20588L11.2003 8.80884C10.91 9.09998 10.91 9.57508 11.2003 9.86623C11.4907 10.1574 11.9644 10.1574 12.2548 9.86623Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.8691 18.7939C16.1595 18.5028 16.1595 18.0277 15.8691 17.7365L12.2548 14.1336C11.9644 13.8424 11.4907 13.8424 11.2003 14.1336C10.91 14.4247 10.91 14.8998 11.2003 15.191L14.8146 18.7939C15.105 19.0851 15.5787 19.0851 15.8691 18.7939Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.44444 3.5C4.54213 3.5 3 5.04213 3 6.94444V17.0556C3 18.9579 4.54213 20.5 6.44444 20.5H17.5556C19.4579 20.5 21 18.9579 21 17.0556V6.94444C21 5.04213 19.4579 3.5 17.5556 3.5H6.44444ZM17.5556 5H6.44444C5.3695 5 4.5 5.8695 4.5 6.94444V17.0556C4.5 18.1305 5.3695 19 6.44444 19H17.5556C18.6305 19 19.5 18.1305 19.5 17.0556V6.94444C19.5 5.8695 18.6305 5 17.5556 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 8.5H20V7H4V8.5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 17H20V15.5H4V17Z"
                    fill="currentColor"
                  />
                </svg>
                Google Play
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-blue-200 mb-2">Scan QR code to download</p>
              <div className="bg-white p-2 inline-block rounded">
                <div className="h-24 w-24 bg-gray-300">
                  {/* This would be a QR code image in a real application */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-primary-900/30 rounded-3xl h-[500px] w-[250px] backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-700/50 rounded-2xl h-[450px] w-[220px] backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-primary-500/90 to-primary-800/90 p-4">
                  <div className="h-full w-full rounded-xl bg-white/5 backdrop-blur flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white mb-4 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">H</span>
                    </div>
                    <p className="text-white text-center text-sm">Healwise App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;

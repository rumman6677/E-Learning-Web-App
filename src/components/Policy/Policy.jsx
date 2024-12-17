import Navbar from "../../context/Navbar";
import Footer from "../footer/Footer";

const policy = () => {
    return (
        <div>
          <Navbar/>

          
            <div className="bg-[#0b121f] text-white">
                <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                    <h1 className="text-3xl font-bold mb-4">Penough Privacy Policy</h1>

                    <p className="mb-4">
                        At Penough, we are committed to protecting the privacy of our customers and users. This Privacy Policy explains how we collect, use, and protect the information we receive from you.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Collection of Information</h2>

                    <p className="mb-4">
                        We collect information from you when you register on our website, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or use certain other services on our website. The information we collect may include your name, email address, phone number, and other contact information.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Use of Information</h2>

                    <p className="mb-4">
                        The information we collect from you may be used in the following ways:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li>To personalize your experience</li>
                        <li>To improve our website</li>
                        <li>To improve customer service</li>
                        <li>To process transactions</li>
                        <li>To send periodic emails</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">Protection of Information</h2>

                    <p className="mb-4">
                        We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. We use encryption technology when collecting or transferring sensitive data such as credit card information.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Changes to Privacy Policy</h2>

                    <p className="mb-4">
                        We reserve the right to modify this Privacy Policy at any time. Any changes to this Privacy Policy will be posted on this page.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

                    <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at info@penough.com.
                    </p>

                </div>
            </div>


          <Footer/>
        </div>
    );
};

export default policy;
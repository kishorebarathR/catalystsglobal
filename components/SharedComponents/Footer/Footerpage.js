import React from "react";

const Contactus = () => {
  return (
    <div className="footer-contactus bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h3>
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bangalore Office */}
          <div className="footer-locations-single bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.94865316356!2d77.35073688856047!3d12.953959987771264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168df57c87d5%3A0x26c7cc2f19d25e1!2sAECS%20Layout%2C%20Ashwathnagar%2C%20Bengaluru%2C%20Karnataka%20560094!5e0!3m2!1sen!2sin!4v123456789"
              className="w-full h-40 md:h-48"
              allowFullScreen=""
              loading="lazy"
              title="Bangalore Office Location"
            ></iframe>
            <div className="p-4">
              <h5 className="text-lg font-semibold text-gray-700">Bangalore</h5>
              <p className="text-sm text-gray-600 mt-2">
                No.25, AECS Layout, Ashwathnagar, Bengaluru - 560094, Karnataka
              </p>
              <a
                href="https://goo.gl/maps/SA4WkU1RBgkRcMnd8"
                className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Delhi Office */}
          <div className="footer-locations-single bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.94865316356!2d77.35073688856047!3d12.953959987771264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168df57c87d5%3A0x26c7cc2f19d25e1!2sGreen%20Park%20Delhi!5e0!3m2!1sen!2sin!4v123456789"
              className="w-full h-40 md:h-48"
              allowFullScreen=""
              loading="lazy"
              title="Delhi Office Location"
            ></iframe>
            <div className="p-4">
              <h5 className="text-lg font-semibold text-gray-700">Delhi</h5>
              <p className="text-sm text-gray-600 mt-2">
                Swasti Health Catalyst, A-10 (Second Floor), Green Park New
                Delhi-110016
              </p>
              <a
                href="https://goo.gl/maps/SeiB97CAc1vb267i8"
                className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Bhopal Office */}
          <div className="footer-locations-single bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.94865316356!2d77.35073688856047!3d12.953959987771264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168df57c87d5%3A0x26c7cc2f19d25e1!2sBhopal!5e0!3m2!1sen!2sin!4v123456789"
              className="w-full h-40 md:h-48"
              allowFullScreen=""
              loading="lazy"
              title="Bhopal Office Location"
            ></iframe>
            <div className="p-4">
              <h5 className="text-lg font-semibold text-gray-700">Bhopal</h5>
              <p className="text-sm text-gray-600 mt-2">
                E-2/244, First Floor, Arera Colony, Bhopal, Madhya Pradesh,
                462016
              </p>
              <a
                href="https://goo.gl/maps/SeiB97CAc1vb267i8"
                className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

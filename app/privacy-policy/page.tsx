import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page_wrapper">
      {/* Preloader */}

      {/* Blog Details Block */}
      <section className="blog_detail_section bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-extrabold mb-6 text-white-400">
              Privacy Policy
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Introduction
                </h3>
                <p className="text-gray-300">
                  Your privacy is important to us. This Privacy Policy explains
                  how we collect, use, and protect your personal information
                  when you use the TripSyncer app.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Information We Collect
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Location Data: We collect precise or approximate location
                      data from your device if you enable location services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Camera and Photos: We access your camera and photos with
                      your permission to allow you to upload and share photos
                      through the app.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Storage: We access device storage to save app data and
                      photos.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Contacts: We access your contacts to facilitate the
                      sharing of trip details.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Use of Information
                </h3>
                <p className="text-gray-300">
                  We use the information we collect to provide, improve, and
                  personalize our services, including navigation, trip planning,
                  and sharing features.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Sharing of Information
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Service Providers: To assist us in meeting business
                      operations needs and to perform certain services and
                      functions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Compliance with Laws: In response to legal requests, we
                      may disclose your information to law enforcement or other
                      government authorities.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Security
                </h3>
                <p className="text-gray-300">
                  We implement security measures to protect your information
                  from unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Your Rights
                </h3>
                <p className="text-gray-300">
                  You have the right to access, update, or delete your personal
                  information. You can exercise these rights by contacting us
                  directly.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Changes to Privacy Policy
                </h3>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Contact Us
                </h3>
                <p className="text-gray-300">
                  If you have any questions about these Terms or our Privacy
                  Policy, please contact us at trip@tripsyncer.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

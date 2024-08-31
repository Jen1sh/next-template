import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="page_wrapper">
      {/* Blog Details Section */}
      <section className="blog_detail_section bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-extrabold mb-6 text-white-400">
              Terms and Conditions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  1. Introduction
                </h3>
                <p className="text-gray-300">
                  Welcome to TripSyncer! These Terms and Conditions govern your
                  use of our mobile application and services. By accessing or
                  using the app, you agree to be bound by these terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  2. License to Use App
                </h3>
                <p className="text-gray-300">
                  TripSyncer grants you a non-exclusive, non-transferable,
                  revocable license to use the mobile application for your
                  personal, non-commercial use subject to the restrictions set
                  forth in these Terms and Conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  3. User Accounts
                </h3>
                <p className="text-gray-300">
                  You may be required to register and maintain an active
                  personal user account to access and use certain features of
                  the app. You are responsible for all activity that occurs
                  under your account.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  4. App Access Permissions
                </h3>
                <p className="text-gray-300">
                  TripSyncer requires the following permissions to offer a
                  complete experience:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Location: TripSyncer requires access to your location to
                      offer real-time navigation and location sharing features.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Camera: Access to the camera is required to enable you to
                      capture and share photos directly through the app.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Storage: We require access to your device's storage to
                      save trip information and photos locally.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">
                      <i className="icofont-check-circled"></i>
                    </span>
                    <p>
                      Contacts: Access to your contacts allows you to easily
                      share trip details with others.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  5. Prohibited Activities
                </h3>
                <p className="text-gray-300">
                  You agree not to use the app for any unlawful purpose, to
                  infringe on any third party's rights, or to breach any
                  standards, content guidelines, or codes of conduct.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  6. Intellectual Property
                </h3>
                <p className="text-gray-300">
                  All intellectual property rights in the app and its content
                  are owned by TripSyncer or its licensors. You may not use any
                  content from the app without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  7. Termination
                </h3>
                <p className="text-gray-300">
                  We may terminate or suspend your access to the app
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including, without limitation, if you breach these
                  Terms and Conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  8. Limitation of Liability
                </h3>
                <p className="text-gray-300">
                  TripSyncer shall not be liable for any indirect, incidental,
                  special, consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses resulting from your access to or use of or
                  inability to access or use the app.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  9. Changes to Terms
                </h3>
                <p className="text-gray-300">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. By continuing to access or
                  use our app after those revisions become effective, you agree
                  to be bound by the revised terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  Contact Us
                </h3>
                <p className="text-gray-300">
                  If you have any questions about these Terms or our Privacy
                  Policy, please contact us at info@tripsyncer.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;

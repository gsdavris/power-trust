import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Contact from "../forms/Contact";
import SocialMenu from "../menus/SocialMenu";

const features = [
  {
    name: "Τηλέφωνικη Επικοινωνία.",
    description: (
      <dd className="inline">
        Συμπληρώστε τα στοιχεία σας στη φόρμα επικοινωνίας και ζητήστε
        τηλεφωνική επικοινωνία, ένας εκπρόσωπός μας θα σας καλέσει σύντομα. Ή
        καλέστε μας στο{" "}
        <a className="font-semibold text-primary" href="tel:+302221604748">
          2221 604 748
        </a>
        .
      </dd>
    ),
    icon: HiOutlinePhone,
  },
  {
    name: "Ηλεκτρονικό Ταχυδρομείο.",
    description: (
      <dd className="inline">
        Στείλτε μας email στην διεύθυνσή μας{" "}
        <a
          className="font-semibold text-primary"
          href="mailto:info@powertrust.gr"
        >
          info@powertrust.gr
        </a>{" "}
        και θα σας απαντήσουμε το συντομότερο.
      </dd>
    ),
    icon: HiOutlineEnvelope,
  },
  {
    name: "Κεντρικά Γραφεία.",
    description: (
      <dd className="inline">
        Αποστολή αλληλογραφίας στην διεύθυνσή μας{" "}
        <span className="font-semibold text-primary">
          Δοξακη Μ. & Αγιας Κυριακής 17, Χαλκίδα
        </span>
        .
      </dd>
    ),
    icon: HiOutlineMapPin,
  },
];

export default function ContactSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pb-16 flex flex-col text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary">
            Προσωποποιημένη Εξυπηρέτηση
          </h2>
          <p className="mt-2 font-bold text-3xl text-primary tracking-tight sm:text-5xl">
            Φόρμα Επικοινωνίας
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Contact />
          <div className="lg:max-w-lg">
            <p className="text-lg leading-8 text-gray-600">
              Συμπληρώστε τα στοιχεία σας στη φόρμα επικοινωνίας και ένας
              σύμβουλος ενέργειας σύντομα θα επικοινωνήσει μαζί σας.
            </p>
            <dl className="mt-20 max-w-xl space-y-8 text-base mx-auto leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  {feature.description}
                </div>
              ))}
            </dl>
            <div className="py-16 text-center">
              <SocialMenu
                social={[
                  {
                    name: "twitter",
                    location: "https://twitter.com/",
                  },
                  {
                    name: "facebook",
                    location: "https://www.facebook.com",
                  },
                  {
                    name: "instagram",
                    location: "https://www.instagram.com",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

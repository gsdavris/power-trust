import { useState } from "react";
import axios from "axios";
import { Switch } from "@headlessui/react";
import Loading from "../contentUI/Loading";
import Alert from "./Alert";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    error: "",
    loading: false,
    responseData: "",
  });

  const {
    firstName,
    lastName,
    company,
    phoneNumber,
    email,
    message,
    loading,
    error,
    responseData,
  } = values || {};

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      responseData: "",
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.persist();
    e.preventDefault();

    setValues({ ...values, error: false, loading: true });
    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: "Όλα τα πεδία με * είναι υποχρεωτικά",
        },
      });
    }

    const { data } = await axios.post("/api/mail", values);

    if (!data) {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: "Υπάρχει πρόβλημα! Δοκίμασε αργότερα.",
        },
      });
    }

    if (data.sent) {
      setValues({
        ...values,
        firstName: "",
        lastName: "",
        company: "",
        phoneNumber: "",
        email: "",
        message: "",
        error: false,
        loading: false,
        responseData: {
          type: "success",
          message: "Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα",
        },
      });
    } else {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: data.message,
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl"
      onBlur={() =>
        setValues({
          ...values,
          responseData: "",
        })
      }
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Όνομα*
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName || ""}
              onChange={handleChange("firstName")}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Επώνυμο*
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName || ""}
              onChange={handleChange("lastName")}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Εταιρεία (προαιρετικό)
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              value={company || ""}
              onChange={handleChange("company")}
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email*
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={email || ""}
              onChange={handleChange("email")}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Αριθμός τηλεφώνου*
          </label>
          <div className="relative mt-2.5">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber || ""}
              onChange={handleChange("phoneNumber")}
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Μήνυμα*
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              value={message || ""}
              onChange={handleChange("message")}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? "bg-indigo-600" : "bg-gray-200",
                "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            Συμφωνώ με την{" "}
            <a href="#" className="font-semibold text-indigo-600">
              Πολιτική&nbsp;Απορρήτου
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="mt-10">
        <Alert responseData={responseData} />
        <button
          type="submit"
          disabled={!agreed}
          className={`block w-full rounded-md ${
            agreed ? "bg-indigo-600 hover:bg-indigo-500" : "bg-indigo-300"
          } px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          {loading ? <Loading /> : "Αποστολή Μηνύματος"}
        </button>
      </div>
    </form>
  );
}

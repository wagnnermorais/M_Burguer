import { useState } from "react";
import { LinkedinIcon, GithubIcon } from "@/components/icons/Icons";
import Input from "@/components/page/Input";
import Layout from "@/layout/Layout";

export default function Contacts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section className="flex flex-col min-h-screen font-Graphie bg-zinc-800 text-white">
      <Layout>
        <div className="my-12 mx-auto w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-l">
            <div className="flex flex-col justify-center py-4 px-6 border-b-2 border-b-black order-last rounded-tl-md lg:rounded-none lg:rounded-tr-md bg-white text-black">
              <h2 className="text-4xl font-bold mb-4 tracking-tighter">
                Contact
              </h2>
              <p className="my-4 text-lg text-justify tracking-wide">
                We&apos;d love to hear from you! Whether you have a question
                about our menu, want to provide feedback, or just want to say
                hello, feel free to get in touch with us. Our team is here to
                help and we aim to respond to all inquiries as quickly as
                possible. Reach out to us via the contact form below, or through
                our social media channels. We look forward to connecting with
                you!
              </p>
              <div className="flex items-center my-4 gap-2">
                <p className="text-lg font-bold">Address:</p>
                <p className="text-lg">1155 103rd St, Miami Beach, Florida.</p>
              </div>
              <div className="flex items-center my-4 gap-2">
                <p className="text-lg font-bold">Phone:</p>
                <p className="text-lg">786-401-7058.</p>
              </div>
              <div className="flex items-center my-4 gap-2">
                <p className="text-lg font-bold">E-mail:</p>
                <p className="text-lg">contact@mburguer.com</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center my-4 gap-4">
                  <div className="cursor-pointer ease duration-300">
                    <LinkedinIcon fill="black" />
                  </div>
                  <div className="cursor-pointer ease duration-300">
                    <GithubIcon fill="black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-[url('/images/contact/2.jpg')] bg-cover bg-center min-h-[65vh] rounded-tr-md lg:rounded-none lg:rounded-tl-md"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg">
            <div className="hidden lg:block bg-[url('/images/contact/3.jpg')] bg-cover bg-center min-h-[65vh] rounded-bl-md"></div>
            <div className="flex flex-col justify-center py-4 px-6 rounded-tr-md lg:rounded-none lg:rounded-br-md bg-white text-black">
              <h2 className="text-4xl font-bold mb-4 tracking-tighter">
                Get in touch
              </h2>
              <form className="">
                <div className="my-8">
                  <Input title="Name" value={name} onChange={setName} />
                </div>
                <div>
                  <Input title="Email" value={email} onChange={setEmail} />
                </div>
                <div className="my-8">
                  <Input
                    title="Subject"
                    value={subject}
                    onChange={setSubject}
                  />
                </div>
                <div className="my-8">
                  <Input
                    title="Message"
                    value={message}
                    onChange={setMessage}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="mt-12 py-2.5 px-4 w-1/2 text-lg font-bold rounded-md border ease duration-300 bg-zinc-800 text-white hover:bg-white hover:text-black hover:border-black"
                    type="submit"
                  >
                    Send It
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

import SignInForm from "@/components/pages/auth/SignInForm";
import Logo from "@/assets/images/logo/logo.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto flex justify-center items-center min-h-screen px-4 md:px-6                                                                                                                                                                                                                                                                                                                 ">
        <div className=" backdrop-blur-xs px-4 md:px-8 py-8 md-py-10 w-full md:w-[35rem] rounded-lg">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
            <h4 className="text-xl md:text-2xl font-bold text-neutral-700">
              Account Login
            </h4>
          </div>
          <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default Page;

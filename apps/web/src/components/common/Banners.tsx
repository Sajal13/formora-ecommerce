"use client";

import React, {
  CSSProperties,
  PropsWithChildren,
  Fragment,
  useEffect,
  useState
} from "react";
import bgImage from "@/assets/images/backgrounds/category.jpg";
import { StaticImageData } from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

interface BannersProps {
  bg?: string | StaticImageData;
  className?: string;
  style?: CSSProperties;
  title: string;
  breadcrumb?: boolean;
}

const Banners = ({
  bg = bgImage,
  className,
  style,
  title,
  breadcrumb = true,
  children
}: PropsWithChildren<BannersProps>) => {
  const imageUrl = typeof bg === "object" ? bg.src : bg;

  const pathName = usePathname();
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    const path = pathName.split("/");
    path[0] = "/";
    setPaths(path);
  }, [pathName]);
  return (
    <section
      className={classNames(
        `min-h-[22.5rem] py-4 px-4 md:px-8 bg-cover bg-no-repeat bg-center relative z-0
         bg-black/50 bg-blend-overlay flex justify-center items-center`,
        className
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        ...style
      }}
    >
      <div className="container mx-auto text-gray-100 text-center backdrop-blur-xs bg-white/0.5 py-5 rounded-xl">
        <h4 className="text-2xl md:text-3xl font-medium mb-2">{title}</h4>
        <div className="flex justify-center items-center">
          {breadcrumb &&
            paths.length > 0 &&
            paths.map((item, index, array) => (
              <Fragment key={index}>
                {array.length - 1 !== index && (
                  <Link
                    href={
                      item === "/"
                        ? "/"
                        : item === "category"
                          ? "/category"
                          : `/category/${item}`
                    }
                    className={`capitalize text-sm sm:text-base 2xl:text-lg`}
                  >
                    {item === "/" ? "Home" : `${item.split("-").join(" ")}`}
                  </Link>
                )}
                {array.length - 1 === index && (
                  <p className="text-warning capitalize text-sm sm:text-base 2xl:text-lg">
                    {item.split("-").join(" ")}
                  </p>
                )}
                <div
                  className={`mx-2 sm:mx-4 md:mx-5 ${
                    index === array.length - 1 ? "hidden" : "block"
                  }`}
                >
                  <i className="font-medium text-sm sm:text-base 2xl:text-lg">
                    <CgChevronRight />
                  </i>
                </div>
              </Fragment>
            ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Banners;

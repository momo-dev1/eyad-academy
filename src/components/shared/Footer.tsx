import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Title from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "تعرف علينا",
    links: [
      {
        text: "عن اكاديمية إياد.كوم",
        href: "",
      },
      { text: "تواصل معنا", href: "" },
      { text: "سياسة الاسترجاع", href: "" },
    ],
  },
  {
    title: "أقسام الموقع",
    links: [
      { text: "الدورات", href: "" },
      { text: "الاستشارات", href: "" },
      { text: "الأسئلة الشائعة", href: "" },
    ],
  },
];

const help = [
  {
    title: "المساعدة",
    links: [
      { text: "جمهورية مصر العربية", href: "" },
      {
        text: "WhatsApp: +123 456 789",
        href: "",
      },
      { text: "Email : teacher@eyad-academy.com", href: "" },
    ],
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "https://facebook.com",
    color: "text-blue-600 hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com",
    color: "text-blue-400 hover:text-blue-200",
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    href: "https://instagram.com",
    color: "text-pink-600 hover:text-pink-400",
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsappSquare />,
    href: "https://whatsapp.com",
    color: "text-green-500 hover:text-green-300",
  },
];

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#f8f8f8] text-right p-5">
      <MaxWidthWrapper>
        <div className="md:grid-cols-2  grid grid-cols-1 gap-5 mb-4">
          {/* Logo and Description */}
          <div>
            <Image width="425" height="100" src="/images/logo.png" alt="logo" />
            <p className="mt-3 text-secondry  md:max-w-sm">
              موقع اكاديمية إياد.كوم هو منصة افتراضية متخصصة في تدريس مناهج الـ
              IG في جمهورية مصر العربية.
            </p>
          </div>

          <div className="flex gap-5 pt-1">
            {/* Dynamic Sections */}
            {sections.map((section, index) => (
              <div key={index} className="flex-1">
                <Title
                  textSize="small"
                  title={section.title}
                  underline="underlines"
                />
                <ul className="mt-4 text-[16px] md:text-lg text-secondry">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="hover:text-[#ffbe58] duration-300"
                    >
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 md:gap-10 md:items-baseline">
          {/* Social Media Links */}
          <div className=" pt-2">
            <Title
              textSize="small"
              title="تابع اكاديمية إياد.كوم"
              underline="underlines"
            />
            <div className="flex gap-3 md:justify-center mt-4">
              {socialMedia.map((media, mediaIndex) => (
                <Link
                  className={`text-3xl ${media.color} duration-300`}
                  key={mediaIndex}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {media.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {help.map((section, index) => (
            <div key={index} className="flex-1">
              <Title
                textSize="small"
                title={section.title}
                underline="underlines"
              />
              <ul className="mt-4 text-[16px] md:text-lg text-secondry ">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:text-[#ffbe58] duration-300 "
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer Bottom */}
        <div className="mt-4 flex justify-center text-secondry pt-5 border-t">
          <div className="md:flex-row flex flex-col-reverse items-center justify-between w-full gap-3">
            <div>
              <p>
                حقوق النشر © <a href="/">eyad-academy.com</a> 2024
              </p>
            </div>
            <div>
              <ul className="flex gap-4 ">
                <li className="hover:text-[#ffbe58] duration-300">
                  <Link href="privacy-policy">سياسة الخصوصية</Link>
                </li>
                <li className="hover:text-[#ffbe58] duration-300">
                  <Link href="#">شروط الاستخدام</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

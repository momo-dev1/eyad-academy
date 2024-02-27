import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

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

    href: "",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "",
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    href: "",
  },
  {
    name: "Whatsapp ",
    icon: <FaWhatsappSquare />,
    href: "",
  },
];
const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#f8f8f8] text-right p-5">
      <MaxWidthWrapper>
        <div className="md:grid-cols-2  grid grid-cols-1 gap-5 mb-4">
          {/* Logo and Description */}
          <div>
            <img src="/images/logo.png" alt="logo" className="ml-auto" />
            <p className="mt-3 text-secondry  md:max-w-sm">
              موقع اكاديمية إياد.كوم هو منصة افتراضية متخصصة في تدريس مناهج الـ
              IG في جمهورية مصر العربية.
            </p>
          </div>

          <div className="flex gap-5 pt-1">
            {/* Dynamic Sections */}
            {sections.map((section, index) => (
              <div key={index} className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold">
                  {section.title}
                </h3>
                <ul className="mt-4 text-[16px] md:text-lg text-secondry">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.text}</a>
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
            <h3 className="text-xl md:text-2xl font-bold">
              تابع اكاديمية إياد.كوم
            </h3>
            <div className="flex gap-3 md:justify-center mt-4">
              {socialMedia.map((media, mediaIndex) => (
                <a
                  className="text-3xl text-green-600"
                  key={mediaIndex}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {help.map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
              <ul className="mt-4 text-[16px] md:text-lg text-secondry">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
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
              <ul className="flex gap-4">
                <li>
                  <a href="https://elmadrasah.com/policies/privacy-policy">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#">شروط الاستخدام</a>
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

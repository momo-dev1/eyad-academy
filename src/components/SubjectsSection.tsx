import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Title from "./shared/SectionTitle";
import Image from "next/image";

const SubjectsComponent = () => {
  // subjectsData.js
  const subjects = [
    {
      id: 1,
      href: "",
      imgSrc: "/images/subjects/chemistry.webp",
      altText: "image",
      name: "الرياضيـات",
    },
    {
      id: 2,
      href: "",
      imgSrc: "/images/subjects/computer.png",
      altText: "image",
      name: "علوم الحاسوب",
    },
    {
      id: 3,
      href: "",
      imgSrc: "/images/subjects/physics.webp",
      altText: "image",
      name: "الفيـزيـاء",
    },
    {
      id: 4,
      href: "",
      imgSrc: "/images/subjects/chemistry.webp",
      altText: "image",
      name: "الكيــميـاء",
    },
    {
      id: 5,
      href: "",
      imgSrc: "/images/subjects/ielts.webp",
      altText: "image",
      name: "آيلتس",
    },
    {
      id: 6,
      href: "",
      imgSrc: "/images/subjects/french.png",
      altText: "image",
      name: "اللغة الفرنسية",
    },

    {
      id: 7,
      href: "",
      imgSrc: "/images/subjects/english.webp",
      altText: "image",
      name: "اللغة الإنجليزية",
    },
    {
      id: 8,
      href: "",
      imgSrc: "/images/subjects/biology.webp",
      altText: "image",
      name: "الأحيـــاء",
    },
  ];

  return (
    <section className="bg-custom-gradient p-5">
      <MaxWidthWrapper>
        <div className="py-20 text-center">
          <Title
            textSize="large"
            title="إختر من بين جميع المواد التي تقدمها اكاديمية اياد.كوم"
          />
          <ul className="md:grid-cols-4 mt-14 grid grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <li
                key={subject.id}
                className="p-4 rgb(248, 248, 248); bg-white hover:bg-[#eaf3ed]  border hover:border-green-600 transition-colors rounded-2xl box-shadow: 0px 0px 3px 2px"
              >
                <Link
                  href={subject.href}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <Image
                    width="50"
                    height="50"
                    src={subject.imgSrc}
                    alt={subject.altText}
                  />
                  <p className="text-xl text-center">{subject.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SubjectsComponent;

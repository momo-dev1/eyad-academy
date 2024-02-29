import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Title from "../shared/SectionTitle";
import Image from "next/image";
import { subjectsData } from "@/utils/data";

const SubjectsComponent = () => {
  return (
    <section className="bg-custom-gradient p-5">
      <MaxWidthWrapper>
        <div className="py-20 text-center">
          <Title
            textSize="large"
            title="إختر من بين جميع المواد التي تقدمها اكاديمية اياد.كوم"
          />
          <ul className="md:grid-cols-4 mt-14 grid grid-cols-2 gap-8">
            {subjectsData.map((subject, index) => (
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

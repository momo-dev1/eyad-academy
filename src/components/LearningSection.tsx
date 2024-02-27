import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import SectionTitle from "./shared/SectionTitle";

const LearningHome = () => {
  const courseFeatures = [
    {
      title: "دوراتنـــــا مصممة لك",
      description:
        "يتم توظيـــــف مدرس خصــوصي يملك من المهـــــارات ما يمكنه من التعامل مع كافة السمات الشخصية مما يضمن راحة طلابنا خــلال حصة الدرس.",
      imgSrc: "/images/learning/learn-1.png",
      imgAlt: "image",
    },
    {
      title: "دورات فرديــة مع متابعة مستمــرة",
      description:
        "دورات تدريبيـــــة فرديـــــة وليست مجموعة مع وجـــود معلم متخصص يمكنك التواصـــل المبــــــــاشر معه بصــــورة شخصية يـــوفر لك الإجـــابـة على جميع أسئلتك",
      imgSrc: "/images/learning/learn-2.png",
      imgAlt: "image",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <header className="mb-8 text-center">
          <SectionTitle title="تعلم مع اكاديمية اياد.كوم" />
          <p className="sm:text-lg mt-5 text-base">
            وكن من طلابنا الذين ساعدناهم لتحقيق التفوق والالتحاق بالجامعات
            المرموقة
          </p>
        </header>
        <ul className="p-4 space-y-10">
          {courseFeatures.map((feature, index) => (
            <li
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }  gap-9 justify-between items-center rounded-[50px] bg-[#f8f8f8] p-10`}
            >
              <div className="text-center md:text-right md:w-1/2">
                <h3 className="sm:text-xl mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-base">{feature.description}</p>
              </div>
              <div className="md:w-1/2 md:mt-0  mt-4">
                <img src={feature.imgSrc} alt={feature.imgAlt} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href=""
            target="_blank"
            className="hover:bg-transparent hover:text-green-500 inline-flex items-center px-10 py-2 text-lg font-bold text-white transition-colors bg-green-500 border border-green-500 rounded"
          >
            احجز درسك الآن
            <i className="fa fa-arrow-left ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LearningHome;

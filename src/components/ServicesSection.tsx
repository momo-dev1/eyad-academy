import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Title from "./shared/SectionTitle";
import Link from "next/link";
import Image from "next/image";

interface IProps {}

export default function ServicesSection({}: IProps) {
  const services = [
    {
      id: 1,
      imageSrc: "/images/services/services-2.webp",
      title: "دروس خصوصية مدرسية",
      description:
        "في أكاديمية إياد.كوم، نفخر بتقديم دورات تعليمية عبر الإنترنت متنوعة وشاملة، مصممة خصيصًا لتلائم مناهج التعليم في مصر، بما في ذلك المنهج البريطاني والأمريكي، لجميع المراحل التعليمية وصولًا إلى التعليم الجامعي. نهدف إلى تمكين الطلاب من تحقيق التميز الأكاديمي وبناء مستقبل واعد من خلال توفير تجربة تعليمية غنية ومتكاملة. استكشف معنا أحدث الأساليب التعليمية والمواد الدراسية المتقدمة التي تلبي احتياجاتك التعليمية في كل خطوة من رحلتك العلمية.",

      link: "",
    },
    {
      id: 2,
      imageSrc: "/images/services/services-1.webp",
      title: "تطوير مهارات الأطفال",
      description:
        "في أكاديمية إياد.كوم، نؤمن بأهمية تنمية مهارات الأطفال منذ الصغر. لذا، نقدم مجموعة واسعة من الدورات والدروس الخصوصية عبر الإنترنت للطلاب في جميع المراحل الدراسية، بدءًا من مرحلة الروضة وحتى الصف الرابع. برامجنا تغطي كل المواد الدراسية وتتجاوزها لتشمل دورات مخصصة لتطوير المهارات المعرفية والاجتماعية للأطفال. نهدف إلى تزويدهم بأسس قوية تعزز من قدراتهم الأكاديمية وتطور مهاراتهم الحياتية، مما يجعلهم أكثر استعدادًا وتكيفًا مع المتغيرات العالمية. انضم إلى اكاديمية اياد.كوم وافتح لطفلك أبواب التعلم والنمو.",
      link: "",
    },
    {
      id: 3,
      imageSrc: "/images/services/services-3.webp",
      title: "منارتك نحو النجاح في الاختبارات الجامعية",
      description:
        "في أكاديمية إياد.كوم، نوفر دورات تحضيرية متخصصة لطلاب المناهج الدراسية المختلفة، بما في ذلك المنهج البريطاني (IG)، المنهج الأمريكي، وغيرها من المناهج المعتمدة في التعليم الأساسي والثانوي. برامجنا مصممة لتعزيز فهم الطلاب وإتقانهم للمواد الدراسية، مع توفير التحضير الكامل لأي اختبارات داخلية أو خارجية قد يواجهونها. استكشف معنا أساليب التعلم المبتكرة والمواد التعليمية الفعالة لضمان تحقيق النجاح الأكاديمي والتفوق في مسيرتك الدراسية.",
      link: "",
    },
  ];
  return (
    <section className="my-10">
      <MaxWidthWrapper>
        <div className="sec-title text-center pt-14">
          <Title textSize="large" title="ماذا تقدم منصة اكاديمية إياد.كوم؟" />
        </div>
        <div className="flex flex-wrap justify-center mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="md:w-1/2 lg:w-1/3 w-full p-4 text-center"
            >
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="mb-4">
                  <Image
                    width="420"
                    height="375"
                    className="w-full"
                    src={service.imageSrc}
                    alt={service.title}
                  />
                </div>
                <div className="box ">
                  <h3 className=" mb-2 text-lg font-bold">{service.title}</h3>
                  <p className="mb-4 text-secondry text-xs md:text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    target="_blank"
                    className="hover:bg-transparent hover:text-green-500 inline-flex items-center px-10 py-2 text-lg font-bold text-white transition-colors bg-green-500 border border-green-500 rounded"
                  >
                    ابدأ الآن
                    <i className="fa fa-arrow-left ml-2" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

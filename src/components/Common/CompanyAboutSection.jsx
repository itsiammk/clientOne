import Image from "next/image";

export default function CompanyAboutSection() {
  const companies = [
    { name: "AFCONS INFRASTRUCTURE LIMITED", image: "/afcons.png" },
    { name: "DILIP BUILDCON LIMITED", image: "/dilip.jpg" },
    { name: "METALFAB HIGHTECH PVT. LTD.", image: "/metafab.jpeg" },
    { name: "RENUKA EQUIPMENTS PVT. LTD.", image: "/renuka.jpeg" },
    { name: "NIKHIL CONSTRUCTIONS GROUP PVT. LTD.", image: "/nikhil.jfif" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white  p-4 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex-shrink-0 bg-gray-200 p-2 rounded-lg">
                <Image
                  src={company.image}
                  alt={`${company.name} logo`}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 ">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

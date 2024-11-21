export default function CompanyAboutSection() {
  const partnerCompanies = [
    "AFCONS INFRASTRUCTURE LIMITED",
    "DILIP BUILDCON LIMITED",
    "METAFAB HIGHTECH PVT. LTD.",
    "RENUKA EQUIPMENTS PVT. LTD.",
    "NIKHIL CONSTRUCTION GORUP PVT. LTD.",
    "BBG INFRASTRUCTURE PVT. LTD.",
    "HARSHITHA CONSTRUCTIONS",
    "PUNAM CONSTRUCTIONS",
    "APICES INFRA PVT. LTD.",
    "B & S CONSTRUCTIONS",
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          OUR CLIENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCompanies.map((company) => (
            <div
              key={company}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-center">{company}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceLayoutProps {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    links: { label: string; text: string; href: string }[];
    extras?: React.ReactNode;
  }
  
  export default function ExperienceLayout({
    company,
    role,
    duration,
    responsibilities,
    links,
    extras,
  }: ExperienceLayoutProps) {
    return (
      <div className="p-6 md:p-10 lg:p-15">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold font-sharpsans">{company}</h1>
          <p className="font-bold">{role}</p>
          <p>{duration}</p>
  
          <div className="my-4 rounded-xl bg-sky-100 px-3 py-5">
            <ul className="list-disc px-5">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
  
          <div className="flex flex-col sm:flex-row gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-7 border border-gray-100 rounded-lg flex justify-between gap-5 w-full sm:w-1/3 hover:border-black"
              >
                <span className="font-bold">{link.label}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
  
          <hr className="my-10 text-gray-200" />
          {extras && (
            <>
              <h2 className="font-sharpsans text-2xl">Extras / Notables:</h2>
              {extras}
            </>
          )}
        </div>
      </div>
    );
  }
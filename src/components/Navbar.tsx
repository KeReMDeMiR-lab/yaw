type Faculty = "engineering" | "medicine" | "law" | "business";

interface NavbarProps {
  activeFaculty: Faculty;
  onChange: (faculty: Faculty) => void;
}

const tabs: { label: string; value: Faculty }[] = [
  { label: "Engineering", value: "engineering" },
  { label: "Medicine", value: "medicine" },
  { label: "Law", value: "law" },
  { label: "Business", value: "business" },
];

export default function Navbar({ activeFaculty, onChange }: NavbarProps) {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Title */}
          <div className="text-xl font-bold text-blue-600">
            GPA Calculator
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const isActive = activeFaculty === tab.value;

              return (
                <button
                  key={tab.value}
                  onClick={() => onChange(tab.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

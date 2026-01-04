import { useState } from "react";

// Types
export type Course = {
  id: number;
  name?: string;
  credits: number | "";
  grade: string;
};

// Helper: letter grades list (can be updated later)
const GRADES = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

export default function GpaCalculator() {
  const [courseCount, setCourseCount] = useState<number | "">("");
  const [courses, setCourses] = useState<Course[]>([]);

  const generateCourses = () => {
    if (!courseCount || courseCount <= 0) return;

    const generated: Course[] = Array.from({ length: courseCount }, (_, i) => ({
      id: i,
      name: "",
      credits: "",
      grade: "",
    }));

    setCourses(generated);
  };

  const updateCourse = (
    index: number,
    field: keyof Course,
    value: string | number
  ) => {
    setCourses((prev) =>
      prev.map((course, i) =>
        i === index ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-blue-950 rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">GPA Calculator</h1>

        {/* Course count selector */}
        <div className="flex flex-col sm:flex-row gap-4 items-end mb-8">
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-sm font-medium mb-1">Number of Courses</label>
            <input
              type="number"
              min={1}
              value={courseCount}
              onChange={(e) => setCourseCount(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateCourses}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Generate
          </button>
        </div>

        {/* Course rows */}
        {courses.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-950">
                  <th className="text-left p-3 text-sm font-semibold">Course Name (Optional)</th>
                  <th className="text-left p-3 text-sm font-semibold">Credits</th>
                  <th className="text-left p-3 text-sm font-semibold">Grade</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.id} className="border-t">
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="e.g. Calculus"
                        value={course.name}
                        onChange={(e) => updateCourse(index, "name", e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        min={0}
                        value={course.credits}
                        onChange={(e) => updateCourse(index, "credits", Number(e.target.value))}
                        className="w-24 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(index, "grade", e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select</option>
                        {GRADES.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* GPA output placeholder */}
        {courses.length > 0 && (
          <div className="mt-10 p-6 bg-blue-950 rounded-xl text-center">
            <h2 className="text-xl font-semibold mb-2">Your GPA</h2>
            <p className="text-gray-600">
              GPA calculation will be added once Alfaisal rules are provided.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

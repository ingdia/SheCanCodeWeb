import ApplicationForm from '@/Components/ui/ApplicationForm';

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-[#009BCF]/10 rounded-full mb-4">
            <span className="text-[#009BCF] font-semibold text-sm">APPLICATION FORM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light italic text-gray-800 mb-4">
            Apply to She Can Code
          </h1>
          <p className="text-gray-600 text-lg">
            Please fill out the form below to apply for our courses
          </p>
        </div>

        {/* Form */}
        <ApplicationForm />
      </div>
    </main>
  );
}

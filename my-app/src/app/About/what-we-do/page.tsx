import Link from 'next/link';

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-[#009BCF] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Comprehensive programs designed to help women succeed in technology careers.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-4">Coding Bootcamps</h3>
              <p className="text-gray-600 mb-6">
                Intensive, hands-on training programs that teach you the skills needed to start a career in tech.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 12-16 week programs</li>
                <li>• Project-based learning</li>
                <li>• Industry-relevant curriculum</li>
                <li>• Real-world projects</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-4">Career Support</h3>
              <p className="text-gray-600 mb-6">
                We help you launch your tech career with confidence through comprehensive support.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Resume building workshops</li>
                <li>• Interview preparation</li>
                <li>• Job placement assistance</li>
                <li>• Employer connections</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-4">Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Learn from experienced professionals who guide you through your tech journey.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• One-on-one mentoring</li>
                <li>• Industry insights</li>
                <li>• Career guidance</li>
                <li>• Network building</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-4">Community</h3>
              <p className="text-gray-600 mb-6">
                Join a supportive network of women in tech who inspire and help each other grow.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Monthly networking events</li>
                <li>• Hackathons and competitions</li>
                <li>• Technical workshops</li>
                <li>• Alumni network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009BCF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application online</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#009BCF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Interview</h3>
              <p className="text-gray-600">Meet with our team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#009BCF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learn</h3>
              <p className="text-gray-600">Join the bootcamp</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#009BCF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Launch</h3>
              <p className="text-gray-600">Start your tech career</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our next cohort and start your journey in tech.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-4 bg-[#009BCF] text-white text-lg font-semibold rounded-lg hover:bg-[#0087b3] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}

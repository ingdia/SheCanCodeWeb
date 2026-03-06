export default function WhoWeArePage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-[#009BCF] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            We're a community dedicated to empowering women through technology education and career support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower women with the technical skills and confidence needed to thrive in the technology industry, creating a more inclusive and diverse tech ecosystem in Rwanda and beyond.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A future where women are equally represented in technology, leading innovation and driving positive change in their communities through coding and digital skills.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Story</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-3">The Beginning</h3>
              <p className="text-gray-600">
                Founded with a passion for closing the gender gap in technology, SheCanCode started as a small initiative to provide coding education to women in Rwanda.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-3">Growth</h3>
              <p className="text-gray-600">
                Over the years, we've trained hundreds of women, helping them launch successful careers in tech. Our programs have expanded to include mentorship, career support, and community building.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#009BCF] mb-3">Today</h3>
              <p className="text-gray-600">
                We're now a thriving community of empowered women developers and tech leaders, working together to create opportunities and inspire the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-[#009BCF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">Women Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">85%</div>
              <div className="text-white/90">Employment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', desc: 'We strive for quality in everything we do' },
              { title: 'Inclusion', desc: 'Everyone deserves a seat at the table' },
              { title: 'Innovation', desc: 'We embrace new ideas and approaches' },
              { title: 'Community', desc: 'Together we achieve more' }
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

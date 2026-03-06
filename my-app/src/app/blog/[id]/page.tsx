import Link from 'next/link';
import Image from 'next/image';

const blogData: { [key: string]: any } = {
  '1': {
    title: 'Breaking Into Tech: A Beginner\'s Guide',
    author: 'Sarah Mugisha',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    content: `
      <p class="lead">Starting a career in technology can feel overwhelming, especially if you're coming from a non-technical background. But here's the truth: everyone starts somewhere, and with the right approach, you can build a successful tech career.</p>

      <p>I remember my first day learning to code. I stared at the screen, confused by all the brackets and semicolons. "Will I ever understand this?" I wondered. If you're feeling the same way right now, you're not alone.</p>

      <h2>Why Tech?</h2>

      <p>The technology industry offers incredible opportunities for growth, creativity, and impact. Whether you're interested in building websites, analyzing data, or designing user experiences, there's a place for you in tech.</p>

      <p>What makes tech special is that it's constantly evolving. There's always something new to learn, always a problem to solve. And the best part? You don't need a fancy degree to get started.</p>

      <h2>Getting Started</h2>

      <p>The first step is choosing what area of tech interests you most. Don't worry about making the "perfect" choice – you can always pivot later. Here are some popular paths:</p>

      <p><strong>Web Development</strong> is where many people start. You'll learn to build websites and web applications using languages like HTML, CSS, and JavaScript. It's visual, it's creative, and you can see your work come to life immediately.</p>

      <p><strong>Data Science</strong> is perfect if you love numbers and patterns. You'll analyze data to help businesses make better decisions. It combines statistics, programming, and business knowledge.</p>

      <p><strong>UI/UX Design</strong> focuses on creating beautiful and intuitive user interfaces. If you have an eye for design and care about how people interact with technology, this might be your path.</p>

      <p><strong>Mobile Development</strong> lets you build apps for iOS and Android. Every time you use an app on your phone, someone coded that. It could be you.</p>

      <h2>Learning Resources</h2>

      <p>Here's something that surprised me: you don't need a computer science degree to break into tech. I've met successful developers who were teachers, nurses, and accountants in their previous lives.</p>

      <p>There are countless resources available. Online coding bootcamps like SheCanCode offer structured learning with mentorship and community support. Free platforms like freeCodeCamp and Codecademy let you learn at your own pace. YouTube has thousands of tutorials, and the official documentation for most technologies is surprisingly readable.</p>

      <p>But here's the secret: the best way to learn is by doing. Don't just watch tutorials – build things. Make mistakes. Break your code. Then fix it. That's how you really learn.</p>

      <h2>Building Your Portfolio</h2>

      <p>As you learn, start building projects. Your portfolio is your ticket to landing your first job. Employers want to see what you can do, not just what courses you've completed.</p>

      <p>Start small. Build a personal website. Create a to-do list app. Clone a simple version of your favorite website. Each project teaches you something new and adds to your portfolio.</p>

      <p>Focus on quality over quantity. Three well-built, polished projects are better than ten half-finished ones. Make sure your code is clean, your projects work properly, and you can explain the decisions you made.</p>

      <h2>The Job Search</h2>

      <p>Once you have some skills and projects, it's time to start applying. Here's something important: don't wait until you feel "ready." You'll never feel completely ready, and that's okay. You'll learn so much on the job.</p>

      <p>Network. Attend tech meetups and events. Join online communities. Reach out to people on LinkedIn. Many jobs are filled through connections, not job boards.</p>

      <p>When you apply, customize your resume and cover letter for each position. Show them you've researched their company and explain why you're excited about what they do.</p>

      <p>Prepare for interviews by practicing coding challenges and being ready to talk about your projects. They want to see how you think and solve problems, not just whether you know every syntax rule.</p>

      <h2>Final Thoughts</h2>

      <p>Breaking into tech is challenging, but it's absolutely achievable. I've seen it happen countless times. People who never thought they could code are now building amazing things and loving their careers.</p>

      <p>Stay consistent. Code a little bit every day, even if it's just for 30 minutes. Keep learning. Don't give up when things get hard – and they will get hard. That's when the real learning happens.</p>

      <p>The tech community is welcoming and supportive, especially for women entering the field. We need more diverse voices and perspectives in technology. Your unique background and experiences are valuable.</p>

      <p>Remember: every expert was once a beginner. Every successful developer started exactly where you are now, staring at their screen, wondering if they could do it.</p>

      <p>They did it. And so can you.</p>

      <p class="signature">Your journey starts today.</p>
    `
  },
  '2': {
    title: 'Women in Tech: Success Stories from Rwanda',
    author: 'Grace Uwase',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Inspiration',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
    content: `
      <p class="lead">Rwanda's tech scene is thriving, and women are at the forefront of this transformation. Today, we're sharing inspiring stories of women who are breaking barriers and building successful careers in technology.</p>

      <p>When I first started covering tech stories in Rwanda, I noticed something remarkable. In meeting after meeting, conference after conference, I kept seeing the same thing: brilliant women leading teams, building products, and changing lives through technology.</p>

      <h2>The Rise of Women in Rwandan Tech</h2>

      <p>Over the past decade, Rwanda has made significant strides in promoting gender equality in technology. From government initiatives to grassroots organizations, there's a growing movement to ensure women have equal opportunities in the tech industry.</p>

      <p>But this didn't happen by accident. It took vision, commitment, and countless women willing to be the first – the first in their family to code, the first woman on their team, the first female tech lead in their company.</p>

      <h2>Aline's Story: From Bootcamp to Tech Lead</h2>

      <p>Let me tell you about Aline. Two years ago, she was working as a receptionist, feeling unfulfilled and wondering if there was more to life. She had always been curious about technology but never thought it was for "someone like her."</p>

      <p>Then she heard about SheCanCode. "I almost didn't apply," she told me over coffee last month. "I thought you needed to be a genius or have studied computer science. But I decided to try anyway."</p>

      <p>The first few weeks were tough. Really tough. She struggled with concepts that seemed to come easily to others. She stayed up late, practiced on weekends, and asked questions – lots of questions.</p>

      <p>But something clicked. The more she coded, the more she loved it. The logic, the problem-solving, the satisfaction of making something work – it all resonated with her.</p>

      <p>Today, Aline is a tech lead at one of Kigali's fastest-growing startups. She manages a team of five developers and is working on a product that's used by thousands of people across East Africa.</p>

      <p>"The best part," she says, "is mentoring other women who are just starting out. I remember how scared I was. Now I get to tell them: you can do this."</p>

      <h2>Breaking Stereotypes</h2>

      <p>Many women in tech face stereotypes and biases. They're often the only woman in the room, the only woman on their team. They're questioned more, doubted more, have to prove themselves more.</p>

      <p>But these pioneers are proving that talent and passion matter more than gender. They're building apps that solve real problems. They're leading teams that ship products. They're starting their own tech companies and creating jobs for others.</p>

      <p>And slowly but surely, they're changing what people think of when they picture a "developer" or a "tech leader."</p>

      <h2>The Power of Community</h2>

      <p>One common thread in all these success stories is the importance of community. Whether it's through bootcamps, meetups, or online groups, having a supportive network makes all the difference.</p>

      <p>"When I was learning to code, I felt so alone," one developer told me. "Then I found a community of women going through the same thing. We studied together, debugged together, celebrated together. I don't think I would have made it without them."</p>

      <p>This is why organizations like SheCanCode matter. They're not just teaching technical skills – they're building communities, creating support systems, and showing women that they belong in tech.</p>

      <h2>Looking Forward</h2>

      <p>The future is bright for women in Rwandan tech. With more role models, better resources, and growing support, we're seeing more women enter and thrive in the industry every year.</p>

      <p>But there's still work to do. We need more women in leadership positions. We need more funding for women-led startups. We need more companies committed to creating inclusive environments.</p>

      <p>If you're a woman considering a career in tech, know that you're not alone. There's a whole community of women who have walked this path before you, and they're ready to support you on your journey.</p>

      <p>You don't need to be perfect. You don't need to know everything. You just need to start.</p>

      <p class="signature">The tech industry needs your voice, your perspective, your ideas. Welcome.</p>
    `
  }
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogData[params.id] || blogData['1'];

  return (
    <main className="min-h-screen pt-20 bg-gray-100">
      {/* Header */}
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#009BCF] text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#009BCF]/10 text-[#009BCF] text-sm font-semibold rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#009BCF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-[#009BCF] prose-a:no-underline hover:prose-a:underline
            [&_.lead]:text-2xl [&_.lead]:text-gray-800 [&_.lead]:font-normal [&_.lead]:leading-relaxed [&_.lead]:mb-8
            [&_.signature]:text-xl [&_.signature]:text-[#009BCF] [&_.signature]:font-semibold [&_.signature]:italic [&_.signature]:mt-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="text-gray-400">***</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Share */}
        <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
          <p className="text-gray-700 font-semibold">Share this story</p>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-[#009BCF] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-[#009BCF] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-[#009BCF] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center py-12 px-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-6">Join our community and learn from industry experts</p>
          <Link href="/apply" className="inline-block px-8 py-3 bg-[#009BCF] text-white rounded-lg hover:bg-[#0087b3] transition-colors font-semibold">
            Apply to SheCanCode
          </Link>
        </div>
      </article>
    </main>
  );
}

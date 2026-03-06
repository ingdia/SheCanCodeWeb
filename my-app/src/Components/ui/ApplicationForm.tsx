'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ApplicationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    course: '', fullName: '', email: '', dobDay: '', dobMonth: '', dobYear: '', gender: '', phone: '', nationality: '',
    isRefugee: false, hasDisability: false, province: '', district: '', sector: '', cell: '', village: '',
    emergencyContactName: '', emergencyRelationship: '', emergencyPhone: '', hasChild: false, hasLaptop: false,
    occupation: '', educationLevel: '', academicBackground: '', englishProficiency: '', englishSkill: '',
    canPayFee: '', linkedIn: '', github: '', hearAboutUs: '', platform: '', motivation: '', additionalFeedback: ''
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Application submitted successfully!');
    setIsSubmitting(false);
    router.push('/');
  };

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative mb-12">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${currentStep >= step ? 'bg-gradient-to-r from-[#009BCF] to-[#0087b3] text-white scale-110 shadow-lg' : 'bg-gray-200 text-gray-500'}`}>
                {step}
              </div>
              <span className={`text-xs mt-2 font-medium ${currentStep >= step ? 'text-[#009BCF]' : 'text-gray-400'}`}>
                {step === 1 ? 'Personal' : step === 2 ? 'Contact' : step === 3 ? 'Education' : step === 4 ? 'Additional' : 'Motivation'}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-[#009BCF] to-[#0087b3] h-2 rounded-full transition-all duration-700 ease-out shadow-lg" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="space-y-6 animate-slideIn">
            <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-[#0087b3] bg-clip-text text-transparent mb-6">Course Selection</h3>
              <select name="course" value={formData.course} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300 bg-white">
                <option value="">Select a course</option>
                <option value="web-fundamentals">Web Fundamentals</option>
                <option value="python-programming">Python Programming</option>
                <option value="advanced-backend">Advanced Backend</option>
                <option value="ui-ux-design">UI/UX Design</option>
              </select>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-purple-600 bg-clip-text text-transparent mb-6">Personal Information</h3>
              <div className="space-y-4">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <div className="grid grid-cols-3 gap-3">
                  <input type="number" name="dobDay" value={formData.dobDay} onChange={handleChange} required placeholder="Day" min="1" max="31" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                  <select name="dobMonth" value={formData.dobMonth} onChange={handleChange} required className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                    <option value="">Month</option>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                  </select>
                  <input type="number" name="dobYear" value={formData.dobYear} onChange={handleChange} required placeholder="Year" min="1950" max="2010" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                </div>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" pattern="[0-9]{10}" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <select name="nationality" value={formData.nationality} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">Select nationality</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="other">Other</option>
                </select>
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="checkbox" name="isRefugee" checked={formData.isRefugee} onChange={handleChange} className="w-6 h-6 text-[#009BCF] rounded-lg focus:ring-[#009BCF]" />
                  <span className="text-gray-700 font-medium">I am a refugee</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="checkbox" name="hasDisability" checked={formData.hasDisability} onChange={handleChange} className="w-6 h-6 text-[#009BCF] rounded-lg focus:ring-[#009BCF]" />
                  <span className="text-gray-700 font-medium">I have a disability</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-slideIn">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-blue-600 bg-clip-text text-transparent mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="province" value={formData.province} onChange={handleChange} required placeholder="Province" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="text" name="district" value={formData.district} onChange={handleChange} required placeholder="District" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="text" name="sector" value={formData.sector} onChange={handleChange} required placeholder="Sector" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="text" name="cell" value={formData.cell} onChange={handleChange} required placeholder="Cell" className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
              </div>
              <input type="text" name="village" value={formData.village} onChange={handleChange} required placeholder="Village" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300 mt-4" />
            </div>

            <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-pink-600 bg-clip-text text-transparent mb-6">Emergency Contact</h3>
              <div className="space-y-4">
                <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required placeholder="Emergency Contact Name" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="text" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} required placeholder="Relationship" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} required placeholder="Emergency Phone" pattern="[0-9]{10}" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-green-600 bg-clip-text text-transparent mb-6">Family & Equipment</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="checkbox" name="hasChild" checked={formData.hasChild} onChange={handleChange} className="w-6 h-6 text-[#009BCF] rounded-lg focus:ring-[#009BCF]" />
                  <span className="text-gray-700 font-medium">I have a young child</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="checkbox" name="hasLaptop" checked={formData.hasLaptop} onChange={handleChange} className="w-6 h-6 text-[#009BCF] rounded-lg focus:ring-[#009BCF]" />
                  <span className="text-gray-700 font-medium">I have a laptop</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-slideIn">
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-indigo-600 bg-clip-text text-transparent mb-6">Education & Occupation</h3>
              <div className="space-y-4">
                <select name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">Select occupation</option>
                  <option value="student">Student</option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="self-employed">Self-Employed</option>
                </select>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                </select>
                <textarea name="academicBackground" value={formData.academicBackground} onChange={handleChange} required placeholder="Academic background" rows={4} className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300 resize-none" />
                <select name="englishProficiency" value={formData.englishProficiency} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">English proficiency</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                </select>
                <select name="englishSkill" value={formData.englishSkill} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">Strongest English skill</option>
                  <option value="speaking">Speaking</option>
                  <option value="writing">Writing</option>
                  <option value="reading">Reading</option>
                  <option value="listening">Listening</option>
                </select>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-xl border border-yellow-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-yellow-600 bg-clip-text text-transparent mb-6">Registration Fee</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="radio" name="canPayFee" value="yes" checked={formData.canPayFee === 'yes'} onChange={handleChange} required className="w-6 h-6 text-[#009BCF]" />
                  <span className="text-gray-700 font-medium">Yes, I can pay</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#009BCF] transition-all duration-300">
                  <input type="radio" name="canPayFee" value="no" checked={formData.canPayFee === 'no'} onChange={handleChange} className="w-6 h-6 text-[#009BCF]" />
                  <span className="text-gray-700 font-medium">No, I cannot pay</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 animate-slideIn">
            <div className="bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-teal-600 bg-clip-text text-transparent mb-6">Additional Information</h3>
              <div className="space-y-4">
                <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile (Optional)" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub Profile (Optional)" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300">
                  <option value="">How did you hear about us?</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="website">Website</option>
                  <option value="event">Event</option>
                </select>
                {formData.hearAboutUs === 'social-media' && (
                  <input type="text" name="platform" value={formData.platform} onChange={handleChange} placeholder="Which platform?" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300" />
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6 animate-slideIn">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-8 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-rose-600 bg-clip-text text-transparent mb-6">Motivation</h3>
              <textarea name="motivation" value={formData.motivation} onChange={handleChange} required placeholder="Why do you want to join? (Min 50 characters)" rows={6} minLength={50} className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300 resize-none" />
              <p className="text-sm text-gray-500 mt-2">{formData.motivation.length} / 50 characters</p>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009BCF] to-amber-600 bg-clip-text text-transparent mb-6">Additional Feedback</h3>
              <textarea name="additionalFeedback" value={formData.additionalFeedback} onChange={handleChange} placeholder="Any additional information (Optional)" rows={4} className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#009BCF]/20 focus:border-[#009BCF] transition-all duration-300 resize-none" />
            </div>
          </div>
        )}

        <div className="flex gap-4 pt-8">
          {currentStep > 1 && (
            <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-8 py-4 border-2 border-[#009BCF] text-[#009BCF] font-semibold rounded-2xl hover:bg-[#009BCF] hover:text-white transition-all duration-300 transform hover:scale-105">
              Previous
            </button>
          )}
          <Link href="/" className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300">
            Cancel
          </Link>
          {currentStep < totalSteps ? (
            <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="flex-1 py-4 bg-gradient-to-r from-[#009BCF] to-[#0087b3] text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Next Step →
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className={`flex-1 py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#009BCF] to-[#0087b3] hover:shadow-2xl'} text-white`}>
              {isSubmitting ? 'Submitting...' : 'Submit Application ✓'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

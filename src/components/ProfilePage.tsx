
import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

interface ProfilePageProps {
  isDarkMode: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ isDarkMode }) => {
  const skills = [
    'Pengoperasian Komputer/Laptop', 'Komunikasi Yang Baik dan Efektif Dengan Tim', 'Pemrograman Dasar', 'Javascript', 'React', 'Node.js', 'C++', 'CSS', 
    'Tailwind CSS','Python', 'Express.js'
  ];

  const education = [
    {
      level: 'SMK',
      school: 'SMK Voctech 1 Tangerang',
      major: 'Jurusan Multimedia',
      year: '2021 - 2024',
      description: 'Saya sewaktu di SMK berfokus pada editing, jaringan komputer dan pemrograman dasar.'
    },
    {
      level: 'SMP',
      school: 'SMP Ypp Sobang',
      major: 'Pendidikan Umum',
      year: '2018 - 2021',
      description: 'Saya memulai pendidikan menengah pertama dengan prestasi akademik yang cukup baik.'
    }
  ];

  const experience = [
    {
      position: 'Junior Web & Apps Developer',
      company: 'Wiraswasta',
      period: '2025 - Sekarang',
      description: 'Membuat website dan aplikasi yang sederhana untuk diri sendiri dulu supaya bisa lebih memahami dasar-dasarnya dan jika pengalaman saya sudah cukup maka saya akan mencoba berkolaborasi dengan tim/partner/publik untuk menciptakan sebuah inovasi/inovatif digital.'
    },
    {
      position: 'Staff Gudang',
      company: 'Shope Xpress',
      period: 'Juni 2024 - Desember 2024',
      description: 'Melakukan pengemasan dan pengecekan barang masuk dan barang keluar yang akan dikirim ke tempat tujuan, Mengatur barang di area muat dengan aman dan efisien, Memberikan arahan kepada pekerja lain, Mengikuti SOP yang sudah ditetapkan oleh shope xpress.'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 pb-10 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    } transition-all duration-500`}>
      <div className="max-w-6xl mx-auto px-4 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Tentang Saya
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Saya lulusan SMK VOCTECH 1 TANGERANG. Memiliki niat, bakat, dan minat kerja yang sungguh-sungguh dalam bidang pekerjaan-nya.
            Mencari kesempatan untuk berkembang menjadi lebih baik dan memperluas wawasan atau pengalaman. Mampu bekerja dibawah tekanan.
            Mampu berkolaborasi dengan tim. dan Siap untuk memberikan berkontribusi terhadap perusahaan yang ditempati.
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16 animate-slide-in-right">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-blue-500 mr-3" size={32} />
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Pendidikan
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.level}
                  </span>
                  <span className={`ml-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {edu.year}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {edu.school}
                </h3>
                <p className={`text-blue-500 font-medium mb-2`}>
                  {edu.major}
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 animate-slide-in-right">
          <div className="flex items-center mb-8">
            <Briefcase className="text-green-500 mr-3" size={32} />
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Pengalaman Kerja
            </h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {exp.position}
                  </h3>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-green-500 font-medium mb-3">{exp.company}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-slide-in-right">
          <div className="flex items-center mb-8">
            <Code className="text-purple-500 mr-3" size={32} />
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Keahlian & Kemampuan
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkMode ? 'bg-gray-800 border border-gray-700 text-white' : 'bg-white border border-gray-200 text-gray-800'
              }`}>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;

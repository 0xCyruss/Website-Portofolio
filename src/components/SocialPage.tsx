
import React from 'react';
import { Instagram, Twitter, MessageCircle, Users } from 'lucide-react';

interface SocialPageProps {
  isDarkMode: boolean;
}

const SocialPage: React.FC<SocialPageProps> = ({ isDarkMode }) => {
  const socialLinks = [
    {
      platform: 'Instagram',
      username: '@rcaddd_',
      url: 'https://instagram.com/rcaddd_',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      description: 'Lihat foto dan Momen sehari-hari saya.'
    },
    {
      platform: 'Twitter',
      username: '@rcaddd_',
      url: 'https://twitter.com/rcaddd_',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      description: 'Ikuti pemikiran dan Update terbaru saya.'
    },
    {
      platform: 'Telegram',
      username: '@rcadd',
      url: 'https://t.me/rcadd',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      description: 'Hubungi saya untuk diskusi.'
    },
    {
      platform: 'Discord',
      username: 'rcadd.',
      url: 'https://discord.com/users/rcadd.',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      description: 'Bergabung dengan komunitas developer'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 pb-10 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    } transition-all duration-500`}>
      <div className="max-w-6xl mx-auto px-4 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Social Media
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Mari terhubung! Ikuti saya di berbagai platform social media untuk update terbaru 
            dan Konten menarik tentang teknologi dan Pengembangan web & apps.
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-right">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  {/* Icon and Platform */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {social.platform}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {social.username}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {social.description}
                  </p>

                  {/* Action Button */}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
                  >
                    <Icon size={20} className="mr-2" />
                    Kunjungi {social.platform}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-lg animate-fade-in`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Ada Pertanyaan?
          </h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Jangan ragu untuk menghubungi saya melalui platform manapun di atas. 
            Saya selalu senang untuk berdiskusi tentang teknologi, proyek, atau peluang kolaborasi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className={`px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              📧 richardrizkyw@gmail.com
            </span>
            <span className={`px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              📱 +62 85136393252
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;

import React from 'react';
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  brandName: string;
  accentColor: string;
}

const Footer: React.FC<FooterProps> = ({ brandName, accentColor }) => {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt={brandName} className="h-10 w-auto object-contain opacity-90 hover:opacity-100" />
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              자웃자는 당신의 창의적인 방송 생활을 지원합니다. 최고의 휴대용 오디오 장비로 어디서나 프로페셔널한 스튜디오를 경험하세요.
            </p>
            <div className="flex space-x-5">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white/5 rounded-full hover:text-white transition-all hover:scale-110"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Contact Us</h3>
            <ul className="space-y-5 text-gray-400 text-sm font-medium">
              <li className="flex items-center gap-4 hover:text-white transition-colors"><MapPin className="w-4 h-4" /> 서울특별시 강남구 테헤란로 123</li>
              <li className="flex items-center gap-4 hover:text-white transition-colors"><Phone className="w-4 h-4" /> 02-1234-5678</li>
              <li className="flex items-center gap-4 hover:text-white transition-colors"><Mail className="w-4 h-4" /> support@jautja.com</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Quick Links</h3>
            <ul className="space-y-5 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">배송 및 환불 안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">대량 구매 문의</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Newsletter</h3>
            <p className="text-gray-500 text-sm font-medium">최신 장비 소식과 이벤트를 메일로 받아보세요.</p>
            <div className="flex bg-white/5 rounded-[1.5rem] p-1.5 ring-1 ring-white/10 focus-within:ring-white/30 transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border-none px-4 text-sm focus:ring-0 outline-none font-bold"
              />
              <button
                className="px-6 py-3 rounded-2xl font-black text-xs tracking-widest hover:brightness-110 transition-all shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2024 JAUTJA OFFICIAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

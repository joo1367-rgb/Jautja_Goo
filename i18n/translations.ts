export type Lang = 'ko' | 'en';

export const translations: Record<Lang, Record<string, unknown>> = {
  ko: {
    menu: {
      about: '소개',
      shop: '상품',
      media: '미디어',
      naverStore: '네이버스토어',
      amazon: 'Amazon',
    },
    home: {
      hero: {
        description: '어디에도 없는 휴대용 오디오 인터페이스부터 방송용 이어폰, 고급 마이크까지\n자웃자는 당신의 스튜디오를 위한 가장 완벽한 피스(Piece)를 제공합니다.',
        ctaProduct: '제품 라인업 확인',
        ctaNews: '신제품 런칭 소식',
      },
      signature: {
        mainTitle: '자웃자 PRO 컴팩트 인터페이스',
        subDescription: '스마트폰 하나로 완성하는 라이브 방송.\n외부 전원 없이, 에코까지 한 번에.',
        benefits: [
          { label: '컴팩트 휴대', desc: '어디서나 라이브 방송' },
          { label: '외부전원 불필요', desc: '내장 배터리로 이동 중 사용' },
          { label: '에코·라이브 녹음', desc: '실시간 에코 지원' },
          { label: 'PC 겸용', desc: '스마트폰·PC 하나로' },
        ],
        patentLine: '국내 특허 등록 · 글로벌 인증 완료',
        badges: [
          { label: '특허' },
          { label: 'CE' },
          { label: 'FCC' },
        ],
        ctaProduct: '제품 자세히 보기',
        whyTitle: 'Why JAUTJA? 신뢰',
        whyHeading: '자웃자를 선택해야 하는 이유',
        trustItems: [
          { label: '국내 특허 등록', desc: '기술력 검증' },
          { label: 'CE · FCC 인증', desc: '글로벌 안전 기준 충족' },
          { label: '크리에이터 선택', desc: '방송 현장에서 검증' },
          { label: '자웃자 품질 보증', desc: 'A/S 및 지원' },
        ],
        learnMore: '더 자세히 알아보기',
      },
    },
    about: {
      hero: {
        label: 'About',
        title1: '방송 장비의',
        title2: '새로운 시대를 열다.',
        subtitle: '크리에이터를 위한 오디오 솔루션, 자웃자의 이야기를 소개합니다.',
      },
      brandStory: {
        label: 'Brand Story',
        heading: '자웃자를 만들게 된 이유',
        p1Bold: '자웃자(JAUTAJA)',
        p1Rest: '는 10여 년간 글로벌 방송 시장의 변화를 지켜보며, 1인 방송·미디어 시대에 크리에이터에게 꼭 필요한 도구를 만들고자 탄생했습니다.',
        p2: "대표님께서는 댄서로 활동하며 무대와 현장을 수없이 누벼 왔습니다. 무거운 장비, 꼬인 전원선, 복잡한 설정—라이브가 있는 곳마다 반복되는 불편함을 직접 겪었고, '내가 쓰고 싶은 장비'를 찾지 못한 끝에 스스로 만들기로 결심했습니다. 그 경험이 지금의 자웃자 제품으로 이어졌습니다.",
        p3: "저희는 단순한 '판매'를 넘어, 어디서나 완벽한 사운드로 방송할 수 있는 솔루션을 제공합니다. 스마트폰 하나로 라이브 방송부터 녹음, 에코 지원까지—외부 전원 없이, 컴팩트하게.",
        p4: '"방송 장비의 새로운 시대를 열다"는 슬로건처럼, 자웃자는 크리에이터가 콘텐츠에만 집중할 수 있도록 기술과 신뢰로 뒷받침합니다.',
        imageAlt: '자웃자 브랜드 이미지',
      },
      globalTrust: {
        label: 'Global Trust & Certification',
        heading: '검증된 기술력, 글로벌 신뢰',
        patent: {
          label: 'Patent',
          title: '특허 등록',
          desc: '국내 특허로 검증된 자웃자만의 기술력',
          alt: '국내 특허 등록',
        },
        trademark: {
          label: 'Trademark',
          title: '글로벌 상표 등록',
          desc: '한국, EU, 중국, 일본 상표 등록으로 브랜드 자산을 보호합니다.',
          alts: ['한국 상표 등록', 'EU 상표 등록', '중국 상표 등록', '일본 상표 등록'],
        },
        certification: {
          label: 'Certification',
          title: '글로벌 인증',
          desc: 'FCC(미국), CE(유럽) 인증을 획득한 안전하고 검증된 제품입니다.',
          alts: ['FCC 인증', 'CE 인증'],
        },
      },
      philosophy: {
        label: 'Philosophy',
        heading: '브랜드 철학',
        items: [
          { title: '크리에이터 중심', desc: '방송인과 크리에이터가 콘텐츠에만 집중할 수 있도록, 장비는 단순하고 믿을 수 있게 설계합니다.' },
          { title: '기술과 신뢰', desc: '국내 특허와 글로벌 인증으로 검증된 품질. 한 번 선택하면 오래 쓸 수 있는 제품을 지향합니다.' },
          { title: '어디서나 프로급 사운드', desc: '스튜디오가 아닌 현장에서도, 스마트폰 하나로 완성하는 라이브 방송. 자웃자는 그 가능성을 실현합니다.' },
        ],
      },
      cta: {
        text: '자웃자 제품이 궁금하다면',
        button: '상품 보러가기',
      },
    },
    shop: {
      hero: {
        label: 'Shop',
        title: 'SHOP',
        subtitle: '초보 방송인부터 전문적인 방송인까지 신뢰하는 최상의 퀄리티를 보장합니다.',
      },
      gallery: {
        label: 'The Gallery',
        title: 'All Products',
        description: '최신 트렌드의 오디오 인터페이스와 마이크를 만나보세요. 감각적인 디자인과 탁월한 성능을 보장합니다.',
        viewMore: 'View more',
      },
    },
    media: {
      hero: {
        label: 'Media',
        title: 'MEDIA',
        subtitle: '언론 보도와 영상으로 만나는 자웃자',
      },
      trust: {
        heading: '방송 장비의 신뢰, 언론과 영상으로',
        subtitle: '자웃자는 언론과 크리에이터에게 인정받은 장비로, 당신의 방송 퀄리티를 책임집니다.',
      },
      press: {
        label: 'Press · 언론 보도',
        readArticle: '기사 보기',
      },
      videos: 'Videos',
    },
    footer: {
      description: '자웃자는 당신의 창의적인 방송 생활을 지원합니다. 최고의 휴대용 오디오 장비로 어디서나 프로페셔널한 스튜디오를 경험하세요.',
      contactTitle: 'Contact Us',
      address: '서울특별시 강남구 강남대로 342 (역삼빌딩) 5층',
      phone: '0507-1319-2813',
      email: 'jautja@naver.com',
      newsletterTitle: 'Newsletter',
      newsletterDesc: '최신 장비 소식과 이벤트를 메일로 받아보세요.',
      emailPlaceholder: 'Email Address',
      join: 'JOIN',
      legal: '상호명: 자웃자 | 대표자: 이정희 | 사업자등록번호: 115-87-02558 | 주소: 서울특별시 강남구 강남대로 342 (역삼빌딩) 5층 | 대표전화: 0507-1319-2813',
      copyright: '© 2024 JAUTJA OFFICIAL. ALL RIGHTS RESERVED.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  en: {
    menu: {
      about: 'About',
      shop: 'Shop',
      media: 'Media',
      naverStore: 'Naver Store',
      amazon: 'Amazon',
    },
    home: {
      hero: {
        description: 'From portable audio interfaces to broadcast earpieces and premium mics—\nJAUTJA delivers the perfect piece for your studio.',
        ctaProduct: 'View Product Lineup',
        ctaNews: 'New Product Launch',
      },
      signature: {
        mainTitle: 'JAUTJA PRO Compact Interface',
        subDescription: 'Complete live broadcasting with just your smartphone.\nNo external power. Echo support included.',
        benefits: [
          { label: 'Compact & Portable', desc: 'Live broadcast anywhere' },
          { label: 'No External Power', desc: 'Built-in battery for on-the-go use' },
          { label: 'Echo & Live Recording', desc: 'Real-time echo support' },
          { label: 'PC Compatible', desc: 'Smartphone and PC in one' },
        ],
        patentLine: 'Domestic Patent Registered · Global Certification Complete',
        badges: [
          { label: 'Patent' },
          { label: 'CE' },
          { label: 'FCC' },
        ],
        ctaProduct: 'View Product Details',
        whyTitle: 'Why JAUTJA? Trust',
        whyHeading: 'Why Choose JAUTJA',
        trustItems: [
          { label: 'Domestic Patent', desc: 'Verified technology' },
          { label: 'CE · FCC Certified', desc: 'Global safety standards met' },
          { label: 'Creator Choice', desc: 'Proven in the field' },
          { label: 'JAUTJA Quality Guarantee', desc: 'A/S and support' },
        ],
        learnMore: 'Learn More',
      },
    },
    about: {
      hero: {
        label: 'About',
        title1: 'Opening a new era',
        title2: 'of broadcast equipment.',
        subtitle: 'Audio solutions for creators. The story of JAUTJA.',
      },
      brandStory: {
        label: 'Brand Story',
        heading: 'Why we created JAUTJA',
        p1Bold: 'JAUTJA',
        p1Rest: ' was born from over a decade of watching the global broadcast market evolve. We set out to build the tools creators need in the age of solo broadcasting and media.',
        p2: "Our founder performed as a dancer and experienced countless stages and venues. Heavy gear, tangled cables, and complicated setups—the same frustrations at every live event. Unable to find the gear they wanted, they decided to build it. That experience led to today's JAUTJA products.",
        p3: "We go beyond simply selling—we provide a solution for broadcasting with perfect sound anywhere. From live streaming to recording and echo support, all from a single smartphone, without external power, compact and reliable.",
        p4: 'As our slogan says, "Opening a new era of broadcast equipment," JAUTJA backs creators with technology and trust so they can focus on content.',
        imageAlt: 'JAUTJA brand image',
      },
      globalTrust: {
        label: 'Global Trust & Certification',
        heading: 'Verified technology, global trust',
        patent: {
          label: 'Patent',
          title: 'Patent Registration',
          desc: 'JAUTJA\'s proprietary technology verified by domestic patent.',
          alt: 'Domestic patent registration',
        },
        trademark: {
          label: 'Trademark',
          title: 'Global Trademark Registration',
          desc: 'Brand assets protected by trademark registration in Korea, EU, China, and Japan.',
          alts: ['Korea trademark', 'EU trademark', 'China trademark', 'Japan trademark'],
        },
        certification: {
          label: 'Certification',
          title: 'Global Certification',
          desc: 'Safe, certified products with FCC (USA) and CE (Europe) certification.',
          alts: ['FCC certification', 'CE certification'],
        },
      },
      philosophy: {
        label: 'Philosophy',
        heading: 'Brand Philosophy',
        items: [
          { title: 'Creator-first', desc: 'We design equipment to be simple and reliable so broadcasters and creators can focus on content.' },
          { title: 'Technology & trust', desc: 'Quality verified by domestic patent and global certification. We aim for products you can rely on for years.' },
          { title: 'Pro sound anywhere', desc: 'Live broadcasting from the field with just a smartphone. JAUTJA makes it possible.' },
        ],
      },
      cta: {
        text: 'Want to know more about JAUTJA products?',
        button: 'View Products',
      },
    },
    shop: {
      hero: {
        label: 'Shop',
        title: 'SHOP',
        subtitle: 'From beginners to professionals—we guarantee the highest quality you can trust.',
      },
      gallery: {
        label: 'The Gallery',
        title: 'All Products',
        description: 'Discover the latest audio interfaces and mics. Sensible design and outstanding performance.',
        viewMore: 'View more',
      },
    },
    media: {
      hero: {
        label: 'Media',
        title: 'MEDIA',
        subtitle: 'Meet JAUTJA through press and video',
      },
      trust: {
        heading: 'Trust in broadcast equipment, through press and video',
        subtitle: 'JAUTJA is recognized by press and creators. We take care of your broadcast quality.',
      },
      press: {
        label: 'Press',
        readArticle: 'Read article',
      },
      videos: 'Videos',
    },
    footer: {
      description: 'JAUTJA supports your creative broadcast life. Experience a professional studio anywhere with our portable audio equipment.',
      contactTitle: 'Contact Us',
      address: '5F, 342 Gangnam-daero, Gangnam-gu, Seoul, Korea',
      phone: '0507-1319-2813',
      email: 'jautja@naver.com',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Get the latest product news and events by email.',
      emailPlaceholder: 'Email Address',
      join: 'JOIN',
      legal: 'Company: JAUTJA | CEO: Lee Jung-hee | Biz No: 115-87-02558 | Address: 5F, 342 Gangnam-daero, Gangnam-gu, Seoul | Tel: 0507-1319-2813',
      copyright: '© 2024 JAUTJA OFFICIAL. ALL RIGHTS RESERVED.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};

function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}

export function t(lang: Lang, key: string): unknown {
  return getNested(translations[lang] as Record<string, unknown>, key);
}

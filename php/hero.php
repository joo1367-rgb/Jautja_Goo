<?php
$tagline = 'THE STANDARD OF SOUND & VISION';
$heading1 = 'LIMITLESS';
$heading2 = 'BROADCASTING';
$description = '어디에도 없는 휴대용 오디오 인터페이스부터 방송용 이어폰, 고급 마이크까지 자웃자는 당신의 스튜디오를 위한 가장 완벽한 피스(Piece)를 제공합니다.';
$accentColor = '#E070B5';
$btnPrimary = '제품 라인업 확인';
$btnSecondary = '신제품 런칭 소식';
$bgImage = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1920';
?>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>자웃자 | LIMITLESS BROADCASTING</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans KR', sans-serif; }
    
    .hero {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #0a0a0a;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.25;
      filter: grayscale(30%);
    }
    
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 2rem 1.5rem;
      max-width: 720px;
    }
    
    .tagline {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 300;
      letter-spacing: 0.35em;
      color: rgba(255,255,255,0.8);
      padding: 0.5rem 1.25rem;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 999px;
      margin-bottom: 2.5rem;
    }
    
    .heading-wrap { margin-bottom: 2rem; }
    .heading1 {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #fff;
      text-transform: uppercase;
      line-height: 1.1;
    }
    .heading2 {
      font-size: clamp(3rem, 8vw, 5.5rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      line-height: 1.05;
    }
    
    .description {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,0.9);
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }
    
    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .btn {
      padding: 1rem 2rem;
      font-size: 0.95rem;
      font-weight: 600;
      border-radius: 999px;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
      font-family: inherit;
      text-decoration: none;
      display: inline-block;
    }
    .btn:hover { opacity: 0.9; transform: scale(1.02); }
    .btn-primary {
      background: <?php echo htmlspecialchars($accentColor); ?>;
      color: #fff;
      border: none;
    }
    .btn-secondary {
      background: transparent;
      color: #fff;
      border: 2px solid rgba(255,255,255,0.7);
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-bg">
      <img src="<?php echo htmlspecialchars($bgImage); ?>" alt="Studio">
    </div>
    
    <div class="hero-content">
      <span class="tagline"><?php echo htmlspecialchars($tagline); ?></span>
      
      <div class="heading-wrap">
        <h1 class="heading1"><?php echo htmlspecialchars($heading1); ?></h1>
        <h1 class="heading2" style="color: <?php echo htmlspecialchars($accentColor); ?>"><?php echo htmlspecialchars($heading2); ?></h1>
      </div>
      
      <p class="description"><?php echo htmlspecialchars($description); ?></p>
      
      <div class="buttons">
        <a href="#products" class="btn btn-primary"><?php echo htmlspecialchars($btnPrimary); ?></a>
        <a href="#news" class="btn btn-secondary"><?php echo htmlspecialchars($btnSecondary); ?></a>
      </div>
    </div>
  </section>
</body>
</html>

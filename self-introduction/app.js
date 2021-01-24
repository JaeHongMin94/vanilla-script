const charctors = [
  {
    id: 1,
    name: 'Ryan',
    motive: 'Lion',
    img:
      'https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg',
    text:
      '큰 덩치와 무뚝뚝한 표정으로 오해를 많이 사지만, 사실 누구보다도 여리고 섬세한 소녀감성을 지닌 반전 매력의 소유자! 원래 아프리카 둥둥섬 왕위 계승자였으나, 자유로운 삶을 동경해 탈출!',
  },
  {
    id: 2,
    name: 'Apeach',
    motive: 'Peach',
    img:
      'https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_209093_15544394573698905.jpg',
    text:
      '유전자 변이로 자웅동주가 된 것을 알고 복숭아 나무에서 탈출한 악동 복숭아 어피치! 섹시한 뒷태로 사람들을 매혹시키며, 성격이 매우 급하고 과격합니다.',
  },
  {
    id: 3,
    name: 'Muzi & Con',
    motive: 'Radish & Crocodile',
    img: 'https://image.yes24.com/momo/TopCate2231/MidCate002/223017924.jpg',
    text:
      '호기심 많은 장난꾸러기 무지의 정체는 사실 토끼 옷을 입은 단무지! 토끼 옷을 벗으면 부끄러움을 많이 탑니다. 단무지를 키워 무지를 만든 정체불명의 악어 콘! 이제는 복숭아를 키우고 싶어 어피치를 찾아 다닙니다.',
  },
  {
    id: 4,
    name: 'Frodo & Neo',
    motive: 'Dog & Cat',
    img:
      'https://news.imaeil.com/inc/photos/2015/06/27/2015062705410961639_l.JPG',
    text:
      '프로도와 네오는 카카오프렌즈 공식 커플로 알콩달콩 깨볶는 중! 부잣집 도시개 프로도는 사실 잡종. 태생에 대한 콤플렉스가 많습니다. 자기 자신을 가장 사랑하는 새침한 고양이 네오.',
  },
  {
    id: 5,
    name: 'Tube',
    motive: 'Duck',
    img:
      'https://i.pinimg.com/originals/57/b2/f4/57b2f4115a4157427377475ff4148525.jpg',
    text:
      '겁 많고 마음 약한 오리 튜브는 극도의 공포를 느끼면 미친 오리로 변신합니다. 작은 발이 콤플렉스이기 때문에 큰 오리발을 착용합니다. 미운 오리 새끼가 먼 친척입니다.',
  },
  {
    id: 6,
    name: 'Jay-G',
    motive: 'Hip-hop Singer',
    img:
      'https://lh3.googleusercontent.com/proxy/FxNqNdD1YN7VDQAVVFoh1L7kDoyfO1k9ItRXTr71e-gSMkzbnOmozOothH-jpB5NwQV9wiFzGdEYB5XZvbsiSRz3dtVwK592YcfYg1Nca1G6rcmhzTnQ0G4sdyhKV4TDZmCHDe-bwIjaGjUE841jP3zxyTf20Nn3bHxw9w3hEHlYJIxbT6AEqQvHqImRgYCIqcbXsDAZUVFqJ4wRlyWgB5xTveJ-T5j5buWOk0KQxdWB36LHHgD2-Z_5tlpOO3EgjLucSv2G6FgtNDggLv3S3YRSzE78DakxfkkZbkh0806PagKcpKzGFAbd73TnGHvQkNT1r_f6JfFwEUtIzMwk16U',
    text:
      '땅속 나라 고향에 대한 향수병이 있는 비밀요원 제이지! 사명의식이 투철하여 냉철해보이고 싶으나, 실은 어리버리합니다. 겉모습과 달리 알고보면 외로움을 많이 타는 여린 감수성의 소유자. 힙합 가수 Jay-Z의 열혈팬입니다.',
  },
];

const img = document.getElementById('charactorImg');
const author = document.getElementById('author');
const motive = document.getElementById('motive');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = charctors[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  motive.textContent = item.motive;
  info.textContent = item.text;
});

function showCharactor(charctor) {
  const item = charctors[charctor];
  img.src = item.img;
  author.textContent = item.name;
  motive.textContent = item.motive;
  info.textContent = item.text;
}

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) currentItem = charctors.length - 1;

  showCharactor(currentItem);
});

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > charctors.length - 1) currentItem = 0;

  showCharactor(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * charctors.length);
  showCharactor(currentItem);
});

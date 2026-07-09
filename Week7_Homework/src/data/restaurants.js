export const restaurants = [
  {
    id: 1,
    name: "떡볶이",
    category: "분식",
    rating: 4.9,
    image: "/src/assets/1.jpeg",
    menus: [
      { id: 101, name: "떡볶이", price: 4500, options: [{ name: "안 맵게", price: 0 }, { name: "덜 맵게", price: 0 }, { name: "맵게", price: 0 }, { name: "아주 맵게", price: 0 }] },
      { id: 102, name: "순대", price: 3500, options: [{ name: "기본", price: 0 }, { name: "내장 많이", price: 0 }, { name: "내장X", price: 0 }] },
      { id: 103, name: "튀김 세트", price: 5000, options: [{ name: "새우 튀김", price: 1000 }, { name: "고구마 튀김", price: 1000 }, { name: "야채 튀김", price: 1000 }] },
    ],
  },
  {
    id: 2,
    name: "김밥천국",
    category: "분식",
    rating: 4.6,
    image: "/src/assets/2.jpg",
    menus: [
      { id: 201, name: "참치김밥", price: 3500, options: [{ name: "기본", price: 0 }, { name: "마요네즈 추가", price: 500 }, { name: "치즈 추가", price: 500 }] },
      { id: 202, name: "치즈김밥", price: 4000, options: [{ name: "기본", price: 0 }, { name: "마요네즈 추가", price: 500 }, { name: "치즈 추가", price: 500 }] },
      { id: 203, name: "라면", price: 4000, options: [{ name: "기본", price: 0 }, { name: "치즈 추가", price: 500 }, { name: "떡 추가", price: 500 }] },
    ],
  },

  {
    id: 3,
    name: "즉석 부대찌개",
    category: "분식",
    rating: 4.4,
    image: "/src/assets/3.jpeg",
    menus: [
      { id: 301, name: "부대찌개 1인", price: 9000, options: [{ name: "순한맛", price: 0 }, { name: "보통맛", price: 0 }, { name: "매운맛", price: 0 }] },
      { id: 302, name: "부대찌개 2인", price: 17000, options: [{ name: "순한맛", price: 0 }, { name: "보통맛", price: 0 }, { name: "매운맛", price: 0 }] },
      { id: 303, name: "라면 사리", price: 1000, options: [{ name: "어묵 추가", price: 500 },{ name: "치즈 추가", price: 300 },{ name: "기본", price: 0 },] },
    ],
  },
  {
    id: 4,
    name: "핫도그",
    category: "분식",
    rating: 4.3,
    image: "/src/assets/4.jpeg",
    menus: [
      { id: 401, name: "치즈 핫도그", price: 2500, options: [{name: "기본", price: 0 },{name: "소스 많이", price: 500 }] },
      { id: 402, name: "감자 핫도그", price: 2500, options: [{name: "기본", price: 0 },{name: "소스 많이", price: 500 }] },
      { id: 403, name: "콤보 세트 4개", price: 9000, options: [{name: "기본", price: 0 },{name: "소스 많이", price: 500 }] },
    ],
  },
  {
    id: 5,
    name: "우동",
    category: "분식",
    rating: 4.6,
    image: "/src/assets/5.jpeg",
    menus: [
      { id: 501, name: "우동", price: 4500, options: [{name: "기본", price: 0 }, {name: "튀김 추가", price: 1000 }, {name: "계란 추가", price: 500 }] },
      { id: 502, name: "쫄면", price: 5000, options: [{name: "기본", price: 0 }, {name: "튀김 추가", price: 1000 }, {name: "계란 추가", price: 500 }] },
      { id: 503, name: "비빔우동", price: 5500, options: [{name: "기본", price: 0 }, {name: "튀김 추가", price: 1000 }, {name: "계란 추가", price: 500 }] },
    ],
  },

 {
    id: 6,
    name: "엽기 떡볶이",
    category: "분식",
    rating: 4.7,
    image: "/src/assets/6.jpeg",
    menus: [
      { id: 601, name: "엽기 떡볶이", price: 20000, options: [{ name: "안 맵게", price: 0 }, { name: "덜 맵게", price: 0 }, { name: "맵게", price: 0 }, { name: "아주 맵게", price: 0 }] },
      { id: 602, name: "치즈 떡볶이", price: 22000, options: [{ name: "안 맵게", price: 0 }, { name: "덜 맵게", price: 0 }, { name: "맵게", price: 0 }, { name: "아주 맵게", price: 0 }] },
      { id: 603, name: "로제 떡볶이", price: 24000, options: [{ name: "안 맵게", price: 0 }, { name: "덜 맵게", price: 0 }, { name: "맵게", price: 0 }, { name: "아주 맵게", price: 0 }] },
    ],
  },
  {
    id: 7,
    name: "칼국수",
    category: "분식",
    rating: 4.5,
    image: "/src/assets/7.jpeg",
    menus: [
      { id: 701, name: "칼국수", price: 9000, options: [{name: "기본", price: 0 }, {name: "면 곱빼기", price: 1000 }] },
      { id: 702, name: "콩국수", price: 8000, options: [{name: "기본", price: 0 }, {name: "면 곱빼기", price: 1000 }] },
      { id: 703, name: "냉면", price: 7800, options: [{name: "기본", price: 0 }, {name: "면 곱빼기", price: 1000 }] },
    ],
  },
  {
    id: 8,
    name: "청년 다방",
    category: "분식",
    rating: 4.4,
    image: "/src/assets/8.jpeg",
    menus: [
      { id: 801, name: "라볶이", price: 9500, options: [{name: "기본", price: 0 }, {name: "계란 추가", price: 500 }] },
      { id: 802, name: "치즈볼", price: 4000, options: [{name: "기본", price: 0 }, {name: "소스 추가", price: 500 }] },
      { id: 803, name: "계란말이", price: 7000, options: [{name: "기본", price: 0 }, {name: "소스 추가", price: 500 }] },
    ],
  } ]
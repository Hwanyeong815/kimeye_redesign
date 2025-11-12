const visualBanner = () => {
    const $txts = getAll('#visual .visual-txt');
    const $next = get('#visual .swiper-button-next');
    const $prev = get('#visual .swiper-button-prev');

    let cnt = 0,
        timer = null,
        interval = 3000;

    const banner = () => {
        $txts.forEach((txt) => txt.classList.remove('on'));
        if ($txts[cnt]) $txts[cnt].classList.add('on');
    };

    banner();

    if ($next) {
        $next.addEventListener('click', () => {
            cnt++;
            if (cnt > $txts.length - 1) cnt = 0;
            banner();
        });
    }
    if ($prev) {
        $prev.addEventListener('click', () => {
            cnt--;
            if (cnt < 0) cnt = $txts.length - 1;
            banner();
        });
    }
};

const youtubeListSlide = () => {
    const youtubeList = [
        {
            id: 1,
            imgurl: '../images/yotube_thum_0.jpg',
            date: '2025.07.09',
            videoTitle: '성형안과 의사가 알려주는 쌍커풀 재수술 Q&A',
            videoLink: 'https://www.youtube.com/embed/vhGe2aGIf44',
        },
        {
            id: 2,
            imgurl: '../images/yotube_thum_1.jpg',
            date: '2025.07.10',
            videoTitle: '스마트폰을 달고 사는 나한테 딱 맞는 백내장 인공수정체는?',
            videoLink: 'https://www.youtube.com/embed/hYJTQG99QTI',
        },
        {
            id: 3,
            imgurl: '../images/yotube_thum_2.jpg',
            date: '2025.07.11',
            videoTitle: '렌즈삽입술에 대한 모든 것! 라식, 라섹과 다른 점은?',
            videoLink: 'https://www.youtube.com/embed/w6zb_YNfCDo',
        },
        {
            id: 4,
            imgurl: '../images/yotube_thum_3.jpg',
            date: '2025.07.12',
            videoTitle: '황반변성 주사치료 받기 전후 유의사항',
            videoLink: 'https://www.youtube.com/embed/1Hv7lLi2g50',
        },
        {
            id: 5,
            imgurl: '../images/yotube_thum_4.jpg',
            date: '2025.07.13',
            videoTitle:
                '재준이는 모르는 알록달록한 세상, 과연 나는 볼 수 있을까? 집에서 해보는 색약 테스트!',
            videoLink: 'https://www.youtube.com/embed/ylGX_KMruyw',
        },
    ];

    let currentIndex = 0;

    const $youtubeSm = getAll('.con3 .youtube-sm li');
    const $youtubeLg = get('.youtube-lg');
    const $prev = get('.con3 .youtube-list  .btn-wrap .prev');
    const $next = get('.con3 .youtube-list  .btn-wrap .next');

    const render = () => {
        for (let i = 0; i < 2; i++) {
            const data = youtubeList[(currentIndex + i) % youtubeList.length];
            const sm = $youtubeSm[i];
            if (!sm) continue;
            const strong = sm.querySelector('strong');
            const img = sm.querySelector('img');
            const date = sm.querySelector('p');

            if (strong) strong.textContent = data.videoTitle;
            if (img) img.src = data.imgurl;
            if (date) date.textContent = data.date;
        }

        const mainData = youtubeList[(currentIndex + 2) % youtubeList.length];
        const video = $youtubeLg.querySelector('.img-wrap .video');
        const img = $youtubeLg.querySelector('.sub-wrap img');
        const h2 = $youtubeLg.querySelector('.sub-wrap h2');

        video.src = mainData.videoLink;
        // img.src = mainData.imgurl;
        h2.textContent = mainData.videoTitle;
    };
    render();

    $next.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % youtubeList.length;
        render();
    });

    $prev.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + youtubeList.length) % youtubeList.length;
        render();
    });
};

(() => {
    visualBanner();
    youtubeListSlide();
})();

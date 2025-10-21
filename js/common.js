const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const links = document.querySelectorAll('a[href="#"]');
    links.forEach((a) => {
        a.addEventListener('click', (e) => e.preventDefault());
    });
    // window.scrollTo({ top: 0, behavior: 'smooth' });
};
const getInit = () => {
    const getPage = (url, tag) => {
        const $container = get(tag);
        // 현재 문서에 해당 요소가 없으면 그냥 조용히 리턴!
        if (!$container) {
            return;
        }

        fetch(url)
            .then((res) => res.text())
            .then((html) => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const content = temp.querySelector(tag);

                // 불러온 HTML 안에 해당 요소가 있을 때만 추가하고, 없으면 이것도 조용히 패스!
                if (content) {
                    $container.appendChild(content);
                    navi();
                }
            })
            // fetch 실패해도 아무 메시지 없이 조용히 넘어감!
            .catch(() => {
                /* 에러 발생 시 아무것도 안 함 */
            });
    };

    getPage('sub/header.html', '#header');
    getPage('sub/footer.html', '#footer');
};

const navi = () => {
    const $header = get('#header');
    const $lis = getAll('#header .gnb li');
    const $menuWrap = get('#header .headerBody');
    const $subMenus = getAll('#header .subMenu');
    const $head = get('.headerHead');
    const $gnb = get('.gnb');

    const openMenu = () => {
        $head.classList.add('on');
        $menuWrap.classList.add('on');
        $gnb.classList.add('on');
    };
    const closeMenu = () => {
        $head.classList.remove('on');
        $menuWrap.classList.remove('on');
        $gnb.classList.remove('on');
        $subMenus.forEach((menu) => menu.classList.remove('on'));
    };
    const showSubMenu = (idx) => {
        $subMenus.forEach((menu) => menu.classList.remove('on'));
        $subMenus[idx]?.classList.add('on');
    };

    $header.addEventListener('mouseenter', openMenu);
    $header.addEventListener('mouseleave', closeMenu);

    $lis.forEach((li, idx) => {
        li.addEventListener('mouseenter', () => showSubMenu(idx));
    });
};

(() => {
    preventDefaultAnchor();
    getInit();
    // navi();
})();

/*
방법 1: JS로 .subMenuN의 높이를 측정해서 .headerBody 높이에 반영
function showSubMenu(n) {
    const subMenu = document.querySelector(`.subMenu${n}`);
    const headerBody = document.querySelector('.headerBody');
  
    // 보여줄 메뉴만 display: block 처리
    document.querySelectorAll('.subMenu').forEach(el => {
      el.style.display = 'none';
    });
    subMenu.style.display = 'block';
  
    // 서브메뉴 높이 측정해서 headerBody에 반영
    const subMenuHeight = subMenu.offsetHeight;
    headerBody.style.height = `${subMenuHeight + 20}px`; // + 여백
  }
  */

import { doctorsData } from './doctorsData.js';

const tabController = () => {
    const tabs = document.querySelectorAll('.ins-tab-area2 .tab-box');
    const con2 = document.querySelector('.con2');
    const con3 = document.querySelector('.con3');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // 탭 활성화 표시
            tabs.forEach((t) => t.classList.remove('on'));
            tab.classList.add('on');

            // 섹션 표시 전환
            if (index === 0) {
                con2.style.display = 'block';
                con3.style.display = 'none';
            } else if (index === 1) {
                con2.style.display = 'none';
                con3.style.display = 'block';
            }
        });
    });

    // 초기상태 (첫 번째 탭 활성화)
    tabs[0].classList.add('on');
    con2.style.display = 'block';
    con3.style.display = 'none';
};

const doctorsTable = () => {
    const tbody = get('.doctors-body');

    const renderDayCells = (schedule) =>
        ['월', '화', '수', '목', '금']
            .map((day) =>
                schedule[day]
                    ? `<td><img src="/images/icon/check.png" alt="진료일자" /></td>`
                    : `<td></td>`
            )
            .join('');

    doctorsData.forEach((doctor) => {
        const rowAM = document.createElement('tr');
        const rowPM = document.createElement('tr');

        rowAM.innerHTML = `
        <td rowspan="2" style="text-align: center">
          <img src="${doctor.img}" alt="${doctor.name}" width="50" /><br />
          ${doctor.name}
        </td>
        <td>오전</td>
        ${renderDayCells(doctor.schedule.오전)}
        <td rowspan="2"><p>${doctor.note || ''}</p></td>
      `;

        rowPM.innerHTML = `
        <td>오후</td>
        ${renderDayCells(doctor.schedule.오후)}
      `;

        tbody.appendChild(rowAM);
        tbody.appendChild(rowPM);
    });
};

const sickContent = () => {
    const boxes = document.querySelectorAll('.sick-all-wrap .box');

    boxes.forEach((box, index) => {
        const head = box.querySelector('.head');
        const display = box.querySelector('.box-display');
        const icon = head ? head.querySelector('img') : null;

        display.classList.remove('on');
        icon.setAttribute('src', '/images/sub1_institute/toggle-plus-btn.png');

        head.addEventListener('click', () => {
            boxes.forEach((otherBox) => {
                if (otherBox !== box) {
                    const otherDisplay = otherBox.querySelector('.box-display');
                    const otherIcon = otherBox.querySelector('.head img');
                    if (otherDisplay) otherDisplay.classList.remove('on');
                    if (otherIcon)
                        otherIcon.setAttribute('src', '/images/sub1_institute/toggle-plus-btn.png');
                }
            });
            // 클릭된 박스 토글
            const isOpen = display.classList.toggle('on');

            icon.setAttribute(
                'src',
                isOpen
                    ? '/images/sub1_institute/toggle-minus-btn.png'
                    : '/images/sub1_institute/toggle-plus-btn.png'
            );
        });
    });
};
const equipToggle = () => {
    const boxes = document.querySelectorAll('.con4 .equip .equip-box-all .equip-box');

    boxes.forEach((box) => {
        const txtLine = box.querySelector('.txt-line');
        const btn = txtLine.querySelector('button');
        const img = btn.querySelector('img');

        btn.addEventListener('click', () => {
            const isExpanded = txtLine.classList.toggle('expanded');
            if (isExpanded) {
                img.setAttribute('style', 'transform: rotate(180deg);'); // 회전
            } else {
                img.setAttribute('style', 'transform: rotate(0deg);'); // 원상
            }
        });
    });
};

(() => {
    tabController();
    doctorsTable();
    sickContent();
    equipToggle();
})();

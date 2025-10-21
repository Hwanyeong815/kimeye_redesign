import { doctorsData } from './doctorsData.js';

const doctorTable = () => {
    const $listWrap = document.querySelector('.doctor-list-wrap');
    $listWrap.innerHTML = ''; // 초기화

    doctorsData.forEach((doctor) => {
        const item = document.createElement('div');
        item.classList.add('doctor-item');

        // txt-line
        const txtLine = document.createElement('div');
        txtLine.classList.add('txt-line');

        const h3 = document.createElement('h3');
        h3.textContent = `${doctor.name} 의사`;

        const centerSpan = document.createElement('span');
        centerSpan.textContent = doctor.center;
        h3.appendChild(centerSpan);

        const strong = document.createElement('strong');
        strong.innerHTML = `예약 가능<span>(토)06:00~13:00</span>`;

        const tapDiv = document.createElement('div');
        tapDiv.classList.add('tap');

        const btnCenter = document.createElement('button');
        btnCenter.textContent = `${doctor.center}전문의`;

        const btnDetail = document.createElement('button');
        btnDetail.textContent = '상세보기 ';

        const plusImg = document.createElement('img');
        plusImg.src = '/images/icon/Plus.png';
        plusImg.alt = '';

        btnDetail.appendChild(plusImg);
        tapDiv.appendChild(btnCenter);
        tapDiv.appendChild(btnDetail);

        txtLine.appendChild(h3);
        txtLine.appendChild(strong);
        txtLine.appendChild(tapDiv);

        // img-line
        const imgLine = document.createElement('div');
        imgLine.classList.add('img-line');

        const docImg = document.createElement('img');
        docImg.src = doctor.img;
        docImg.alt = doctor.name;

        imgLine.appendChild(docImg);

        // doctor-item에 붙이기
        item.appendChild(txtLine);
        item.appendChild(imgLine);

        // 리스트에 추가
        $listWrap.appendChild(item);
    });
};

(() => {
    doctorTable();
})();

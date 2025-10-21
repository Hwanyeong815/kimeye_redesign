import { doctorsData } from './doctorsData.js';

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

(() => {
    doctorsTable();
})();

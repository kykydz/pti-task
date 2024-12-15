import React from 'react';

const tableData = [
  {
    no: 1,
    mataKuliah: 'Pengenalan Teknologi Informasi',
    jumlahHadir: '100%',
    nilaiTugas: 90,
    praResponsi: 90,
    responsi: 90,
    nilaiAkhir: 90,
  },
  {
    no: 2,
    mataKuliah: 'Algoritma dan Pemrograman Dasar',
    jumlahHadir: '100%',
    nilaiTugas: 90,
    praResponsi: 90,
    responsi: 90,
    nilaiAkhir: 90,
  },
  {
    no: 3,
    mataKuliah: 'Bahasa Inggris',
    jumlahHadir: '100%',
    nilaiTugas: 90,
    praResponsi: 90,
    responsi: 90,
    nilaiAkhir: 90,
  },
];

const PTI3 = () => {
  return (
    <center>
      <h1>TRANSKIP NILAI PRAKTIKUM</h1>
      <b>Nama : Rizky H Saputra</b> <br />
      <b>NIM : 232053001</b> <br />
      <p style={{ textAlign: 'right' }}>
        Tanggal: 10/12/2023 <br />
        Jurusan : Informatika <br />
        Semester : 1 <br />
      </p>
      <table>
        <tr>
          <td colspan="2">No.</td>
          <td>Mata Kuliah</td>
          <td>Jumlah Hadir</td>
          <td>Nilai Tugas</td>
          <td>Pra-Responsi</td>
          <td>Responsi</td>
          <td>Nilai Akhir</td>
        </tr>
        {tableData.map((data) => (
          <tr>
            <td colspan="2">{data.no}</td>
            <td>{data.mataKuliah}</td>
            <td>{data.jumlahHadir}</td>
            <td>{data.nilaiTugas}</td>
            <td>{data.praResponsi}</td>
            <td>{data.responsi}</td>
            <td>{data.nilaiAkhir}</td>
          </tr>
        ))}
        <tr>
          <td colspan="7">Rata-rata</td>
          <td>{calculateAverage(tableData)}</td>
        </tr>
      </table>
    </center>
  );
};

function calculateAverage(data) {
  const total = data.reduce((sum, item) => sum + item.nilaiAkhir, 0);
  return (total / data.length).toFixed(2);
}

export default PTI3;

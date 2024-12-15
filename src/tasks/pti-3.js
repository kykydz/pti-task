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
    <div className="container">
      <div className="text-center mt-5">
        <h1>TRANSKIP NILAI PRAKTIKUM</h1>
        <p>
          <strong>Nama :</strong> Rizky H Saputra <br />
          <strong>NIM :</strong> 232053001
        </p>
        <p className="text-end">
          <strong>Tanggal:</strong> 10/12/2023 <br />
          <strong>Jurusan :</strong> Informatika <br />
          <strong>Semester :</strong> 1
        </p>
        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col" colSpan="2">
                No.
              </th>
              <th scope="col">Mata Kuliah</th>
              <th scope="col">Jumlah Hadir</th>
              <th scope="col">Nilai Tugas</th>
              <th scope="col">Pra-Responsi</th>
              <th scope="col">Responsi</th>
              <th scope="col">Nilai Akhir</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.no}>
                <td colSpan="2">{data.no}</td>
                <td>{data.mataKuliah}</td>
                <td>{data.jumlahHadir}</td>
                <td>{data.nilaiTugas}</td>
                <td>{data.praResponsi}</td>
                <td>{data.responsi}</td>
                <td>{data.nilaiAkhir}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="7" className="text-end">
                <strong>Rata-rata</strong>
              </td>
              <td>{calculateAverage(tableData)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function calculateAverage(data) {
  const total = data.reduce((sum, item) => sum + item.nilaiAkhir, 0);
  return (total / data.length).toFixed(2);
}

export default PTI3;

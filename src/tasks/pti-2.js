import React, { useState } from 'react';

const PTI2 = () => {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [fasilitas, setFasilitas] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setJurusan(event.target.value);
  };

  const handleFasilitasChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFasilitas([...fasilitas, name]);
    } else {
      setFasilitas(fasilitas.filter((f) => f !== name));
    }
  };

  const handleSubmit = () => {
    alert(`Halo ${nama}!`);
  };

  return (
    <div className="container">
      <h1 className="text-center">FORM KEPUASAN MAHASISWA</h1>
      <form style={{ textAlign: 'left', display: 'inline-block' }}>
        <div className="mb-3 d-flex align-items-center">
          <div style={{ flex: '1' }}>
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
          </div>
          <div style={{ flex: '2' }}>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div style={{ flex: '1' }}>
            <label htmlFor="nama" className="form-label">
              Nama
            </label>
          </div>
          <div style={{ flex: '2' }}>
            <input
              type="text"
              className="form-control"
              id="nama"
              value={nama}
              onChange={handleNamaChange}
            />
          </div>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div style={{ flex: '1' }}>
            <label htmlFor="jurusan" className="form-label">
              Jurusan
            </label>
          </div>
          <div style={{ flex: '2' }}>
            <select
              className="form-select"
              id="jurusan"
              value={jurusan}
              onChange={handleJurusanChange}
            >
              <option value="">Pilih Jurusan</option>
              <option value="Informatika">Informatika</option>
              <option value="Bisnis Digital">Bisnis Digital</option>
              <option value="Statistika">Statistika</option>
              <option value="Teknik Lingkungan">Teknik Lingkungan</option>
              <option value="Geologi">Geologi</option>
              <option value="Teknik Mesin">Teknik Mesin</option>
              <option value="Teknik Industri">Teknik Industri</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fasilitas yang didapat:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="Lab komputer"
              checked={fasilitas.includes('Lab komputer')}
              onChange={handleFasilitasChange}
            />
            <label className="form-check-label" htmlFor="Lab komputer">
              Lab komputer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="Proyektor"
              checked={fasilitas.includes('Proyektor')}
              onChange={handleFasilitasChange}
            />
            <label className="form-check-label" htmlFor="Proyektor">
              Proyektor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="Parkiran"
              checked={fasilitas.includes('Parkiran')}
              onChange={handleFasilitasChange}
            />
            <label className="form-check-label" htmlFor="Parkiran">
              Parkiran
            </label>
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Kirim
      </button>
    </div>
  );
};

export default PTI2;

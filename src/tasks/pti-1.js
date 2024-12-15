import React from 'react';
import '../styles/App.css';
import logo from '../logo.svg';

const PTI1 = () => {
  return (
    <section
      className="App-task"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div className="container">
        <div className="profile-image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>BIODATA DIRI</h1>
          <form style={{ display: 'flex' }}>
            <div style={{ flex: '1' }}>
              <div className="mb-3">
                <label htmlFor="nama" className="form-label">
                  Nama
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="nim" className="form-label">
                  NIM
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="tempat-tgl-lahir" className="form-label">
                  Tempat / Tgl Lahir
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="semester" className="form-label">
                  Semester
                </label>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  value="Rizky H Saputra"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nim"
                  value="232053001"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="tempat-tgl-lahir"
                  value="Gimcheon / 15 Mei 2006"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  value="Pyengchon-dong"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="semester"
                  value="Ganjil RPL Semester 2/4"
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PTI1;

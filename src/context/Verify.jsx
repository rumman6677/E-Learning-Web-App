import React, { useState } from 'react';
import Navbar from '../context/Navbar';
import axios from 'axios';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

function Verify() {
  const [allData, setAllData] = useState([]);
  const [certificateId, setCertificateId] = useState('');
  const navigateTo = useNavigate();

  async function search(e) {
    e.preventDefault();

    try {
      const response = await axios.get(`${import.meta.env.REACT_APP_DB_URL}/findOne?certificateId=` + certificateId);

      if (response.status !== 200) {
        throw new Error('Invalid response from the server');
      }

      const allData = response.data.data?.[0];

      if (!allData || allData.certificateId === "") {
        setAllData();
      } else {
        if (allData.certificateId === certificateId) {
          navigateTo('/verify-details', { state: { certificateId } });
        }
      }
    } catch (error) { }
  }

  return (
    <div className='bg-[#141d2b] text-white '>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-[#0b121f] shadow-md rounded-lg border-2 border-[#04d9ff] p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <h1 className="text-4xl font-bold text-center mb-8">Penough Certificate Verification</h1>
          <form>
            <div className="mb-6">
              <input
                type="text"
                id="certificateId"
                value={certificateId}
                onChange={(e) => { setCertificateId(e.target.value) }}
                className="shadow appearance-none border rounded w-full py-5 px-4 text-lg text-white bg-[#0b121f] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type Certificate ID, For Instance: DCS101-1337XXX"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={search}
                type="submit"
                className="bg-[#04d9ff] text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Verify;

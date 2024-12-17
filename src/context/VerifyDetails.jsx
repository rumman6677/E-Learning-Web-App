import axios, { all } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/footer/Footer';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import PenoughLogo from "../assets/PENOUGHLOGO.png";
import Certificate_Seal from "../assets/penough-certified-seal.png";

const VerifyDetails = () => {
    const location = useLocation();
    const { certificateId } = location.state;
    const [allData, setAllData] = useState();

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.REACT_APP_DB_URL}/findOne?certificateId=` + certificateId)
                .then((res) => {
                    const allData = res.data?.data?.[0];
                    if (allData.certificateId === true) {
                        setAllData();
                    } else {
                        setAllData(allData);
                    }
                }, fail => {
                    Toast.fire({
                        icon: "error",
                        title: fail
                    });
                })
        } catch (error) {
            alert(error);
        }
    }, []);

    const courseDate = allData ? moment(allData?.date).format("D MMMM, YYYY") : "";

    // Print Functionality
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            {/* Navbar */}
            <Navbar />
            <div ref={componentRef} className='bg-[#141d2b] text-white'>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="bg-[#0b121f] shadow-md rounded-lg border-2 border-[#04d9ff] print:border-[#04d9ff] p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
                        <div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <img
                                        src={PenoughLogo}
                                        alt="Logo"
                                        className="hidden print:block w-44 mb-10 justify-center mx-auto"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={Certificate_Seal}
                                        alt="Logo"
                                        className="hidden print:block w-28 mb-10 justify-center mx-auto"
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-center mb-8">Certificate Verification Information</h1>
                            <div className='grid grid-cols-2 border border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Certificate ID</p>
                                <p className='md:pl-4 text-white print:pl-4'>{allData?.certificateId}</p>
                            </div>
                            <div className='grid grid-cols-2 border-r border-l border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Full Name</p>
                                <p className='md:pl-4 text-white print:pl-4'>{allData?.name}</p>
                            </div>
                            <div className='grid grid-cols-2 border-x border-t border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Course Name</p>
                                <p className='md:pl-4 text-white print:pl-4'>{allData?.courseName}</p>
                            </div>
                            <div className='grid grid-cols-2 border-x border-t border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Batch No</p>
                                <p className='md:pl-4 text-white print:pl-4'>{allData?.batch}</p>
                            </div>
                            <div className='grid grid-cols-2 border-x border-t border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Status</p>
                                <p className='md:pl-4 text-white print:pl-4'>{allData?.status}</p>
                            </div>
                            <div className='grid grid-cols-2 border border-[#04d9ff] print:border-cyan-700 py-1'>
                                <p className='border-r border-[#04d9ff] print:border-cyan-700 text-white md:pl-4 print:pl-4 font-bold'>Earned On</p>
                                <p className='md:pl-4 text-white print:pl-4'>{courseDate}</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-5' >
                            <Link to="/verify">
                                <button className="btn border-2 border-cyan-500 duration-500 hover:bg-cyan-500 py-3 px-4 rounded font-semibold print:hidden">Back To Search</button>
                            </Link>
                            <button onClick={handlePrint} className="btn border-2 border-cyan-500 duration-500 hover:bg-cyan-500 py-3 px-10 rounded font-semibold print:hidden">Print</button>
                        </div>
                        <div className='hidden print:block text-center mt-4'>
                            <p>This transcript is verified by Penough Academy.</p>
                            <p>For verification, please visit: https://academy.penough.com/verify</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='print:hidden'>
                <Footer />
            </div>
        </div>
    );
};

export default VerifyDetails;
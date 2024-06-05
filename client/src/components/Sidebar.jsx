import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../Context';
import { FaCopy } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { ImPhoneHangUp } from 'react-icons/im';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col md:flex-row bg-[#D9D9D9] p-2 rounded-lg w-full max-w-lg">
        <form className="flex flex-col" noValidate autoComplete="off">
          <div className="flex flex-col w-full md:flex-row">
            <div className="w-full p-5 md:w-1/2">
              <h6 className="text-lg mb-4 text-black font-bold">ACCOUNT INFO:</h6>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              {console.log(me)}
              <CopyToClipboard text={me}>
                <button type="button" className="w-full p-4 text-sm text-white bg-red-500 rounded flex items-center justify-center gap-2">
                  <FaCopy size={18} />
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <h6 className="text-lg mb-4 text-black font-bold">MAKE A CALL:</h6>
              <input
                type="text"
                placeholder="Enter a code or link"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  className="w-full p-4 text-sm text-red-500 bg-white rounded flex items-center justify-center gap-2"
                  onClick={leaveCall}
                >
                  <ImPhoneHangUp size={18} />
                  Hang Up
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full p-4 text-white bg-red-500 rounded flex items-center justify-center gap-2"
                  onClick={() => callUser(idToCall)}
                >
                  <IoCall size={20} />
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

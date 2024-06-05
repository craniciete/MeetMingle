import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-black font-bold">{call.name} is calling:</h1>
          <button
            className="w-full p-4 text-red-500 bg-white rounded flex items-center justify-center gap-2"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;

import React, { useContext, useState } from 'react';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, toggleVideo, toggleAudio } = useContext(SocketContext);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  const handleToggleVideo = () => {
    toggleVideo();
    setIsVideoEnabled((prev) => !prev);
  };

  const handleToggleAudio = () => {
    toggleAudio();
    setIsAudioEnabled((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row p-4 gap-8">
      {stream && (
        <div className="bg-[#b40101] w-full max-w-lg h-80 rounded-lg flex justify-center items-center p-4">
          <div className="relative w-full h-full">
            <h5 className="absolute top-4 left-4 text-xl bg-white bg-opacity-70 text-white py-1 px-4 rounded">{`${name}`}</h5>
            <video
              className="rounded-lg w-full h-full object-cover"
              playsInline
              muted
              ref={myVideo}
              autoPlay
            />
            <div className="absolute bottom-4 left-4 flex gap-4">
              <button onClick={handleToggleVideo} className="bg-white bg-opacity-70 text-white py-1 px-4 rounded">
                {isVideoEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
              </button>
              <button onClick={handleToggleAudio} className="bg-white bg-opacity-70 text-white py-1 px-4 rounded">
                {isAudioEnabled ? 'Mute' : 'Unmute'}
              </button>
            </div>
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="bg-[#b40101] w-full max-w-lg h-80 rounded-lg flex justify-center items-center p-4">
          <div className="relative w-full h-full">
            <h5 className="absolute top-4 left-4 text-xl text-white font-bold z-10">{`${call.name}`}</h5>
            <video
              className="rounded-lg w-full h-full object-cover"
              playsInline
              ref={userVideo}
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

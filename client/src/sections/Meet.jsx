import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Sidebar from '../components/Sidebar';
import Notifications from '../components/Notifications';

const Meet = () => {
  return (
    <section id='meet' className='min-h-screen flex justify-center items-center py-24'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-8'>
        <div className="mx-auto text-center text-white">
          <h2 className="text-6xl font-bold">MEET</h2>
          <p className="mt-4 sm:text-xl/relaxed"><strong>Instruction: </strong> To initiate a private call, please enter your name and copy your ID to the clipboard. Then, share this ID with the other user. The recipient will paste the provided ID, allowing the call to commence immediately.</p>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row p-4 gap-8 mt-12">
          <VideoPlayer />
          <Sidebar>
            <Notifications />
         </Sidebar>
        </div>


      </div>
    </section>
  );
}

export default Meet;

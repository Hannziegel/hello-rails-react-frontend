import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from './reducers/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetings);
  useEffect(() => {
    if (!greeting.length) dispatch(getGreetings());
  });
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div role="presentation" onClick={refreshPage} onKeyDown={refreshPage} className="p-12 max-w-sm mx-auto bg-cyan-700 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-white hover:scale-20 shadow-white flex items-center space-x-4 cursor-pointer">
        <h2 className="text-xl font-xl text-white">{greeting}</h2>
      </div>
    </div>
  );
};

export default Greeting;

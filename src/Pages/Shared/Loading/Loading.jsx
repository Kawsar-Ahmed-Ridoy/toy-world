import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
        <div
          className="spinner-border border-gray-700 animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
};

export default Loading;
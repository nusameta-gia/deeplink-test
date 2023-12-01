"use client"
import React, { useState } from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [urlFields, setUrlFields] = useState<string[]>(['']);

  const handleAddField = () => {
    setUrlFields([...urlFields, '']);
  };

  const handleUrlChange = (index: number, value: string) => {
    const updatedFields = [...urlFields];
    updatedFields[index] = value;
    setUrlFields(updatedFields);
  };

  const handleSubmit = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className='flex flex-col justify-center items-center pt-10 gap-4'>
      {urlFields.map((url, index) => (
        <div key={index} className='flex flex-row gap-3 items-center justify-center'>
          <input
            type="text"
            value={url}
            onChange={(e) => handleUrlChange(index, e.target.value)}
            placeholder="Enter Deeplink URL"
            className='rounded-xl px-3 py-2 text-black'
          />
          <a href={url} target='_blank' className='border rounded-xl border-white px-3 py-2 hover:bg-white hover:text-black'>
            Submit
          </a>
        </div>
      ))}
      <button onClick={handleAddField}>+ Add More</button>
    </div>
  );
};

export default Home;
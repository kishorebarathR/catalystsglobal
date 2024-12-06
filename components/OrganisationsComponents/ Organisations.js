import React from 'react'
import Image from 'next/image'
const  Organisations = () => {
  return (
    <div> 

<div className="flex flex-col md:flex-row items-center ">
      {/* Left Column - Logo */}
      <div className="flex-1 flex justify-center items-center text-white p-8 bg-purple-700 ">
        <div className="text-center">
          <h1 className="text-6xl font-bold">CMS</h1>
          <span className="block mt-2 text-sm">™</span>
        </div>
      </div>

      {/* Middle Column - Text */}
      <div className="flex-1 p-8 text-gray-700">
        <h2 className="text-2xl font-bold">
          Catalyst Management Services <br />
          <span className="text-sm font-light">(established in 1994)</span>
        </h2>
        <p className="mt-4">
          A private limited organisation which specializes in providing
          consulting and professional services. CMS partners to create social
          impact, guaranteeing results through development solutions and
          investments. The organisation commits to sustainable development that
          leads to investments in ideas, individuals and institutions, creating
          shared value and maximizing social returns.
        </p>
        <p className="mt-4">
          CMS solutions range from Design (strategy and planning), Evidence
          (research, evaluation and insights), Monitoring (systems,
          accountability and performance), Learning systems (accretion and
          application).
        </p>
        <a
          href="https://cms.org.in/"
          className="inline-block mt-6 px-4 py-2 border border-purple-700 text-purple-700 rounded hover:bg-purple-700 hover:text-white transition "
            target="_blank"
        >
          Visit Website
        </a>
      </div>

      {/* Right Column - Image */}
      <div className="flex-1">
        <Image
          src="/img/cms-image.jpg"
          alt="Person working in field"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
    </div>
    </div>
  )
}

export default  Organisations
import React, { useState, useRef } from 'react'
import InterviewProcess from 'components/Job/InterviewProcess'
import { StaticImage } from 'gatsby-plugin-image'

export const InterviewProcessOverview = () => {
  return (
    <div id="introduction" className="px-4 max-w-7xl mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="opacity-60 mb-2">Interview process</div>
            <h2 className="text-3xl xl:text-4xl font-bold mb-2">Interview Process</h2>
            <p className="max-w-md">We do 2-3 short interviews, then pay you to do some real-life (or close to real-life) work.</p>
          </div>

          <div className="lg:pr-12 lg:-ml-4 inline-block -rotate-1 lg:rotate-0">
            <StaticImage quality={90} placeholder="blurred" src="../../../images/sales/posthog-ae.png" width={872} height={476} alt="You in the interview process" className="w-full" />
            <p className="font-medium pl-4 mb-0 text-sm text-center">POV: We're excited to meet you!</p>

          </div>
        </div>
        <div>
          <InterviewProcess />
        </div>
      </div>
    </div >
  )
}

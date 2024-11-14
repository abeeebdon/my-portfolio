import React from 'react'
import { experience } from './Data'

const Experience = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-bold text-red-500">Experience</h2>
      <article>
        <h2 className="text-3xl font-bold mt-4">Work Experience</h2>
        <p className="text-2xl xl:w-[90%]  my-8">
          Throughout my career, I've had the privilege of working with a variety
          of companies in different fields, including engineering, social
          enterprise, agriculture, and real estate. These experiences have given
          me the real-world experience I needed to become a well-rounded web
          developer. Here are some of the most impactful companies I've worked
          with.
        </p>
        <div className=" mt-6 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap xl:flex-nowrap items-center justify-between text-[1.2rem] gap-6">
          {experience.map((data) => {
            return (
              <div
                key={data.id}
                className="hover:shadow-lg shadow w-full h-[300px] hover:shadow-blue-400 shadow-blue-400 p-6 flex flex-col gap-2 rounded-lg"
              >
                <p className="text">{data.date}</p>
                <h2 className="text-3xl font-bold">{data.heading}</h2>
                <p
                  className="text text-xl
                "
                >
                  {data.info}
                </p>
              </div>
            )
          })}
        </div>
      </article>
      {/* <article className="mt-20 pt-10">
        <h2 className="text-3xl font-bold ">Volunteering and Collaboration</h2>
        <div className=" mt-6 flex flex-col sm:flex-row flex-wrap xl:flex-nowrap items-center justify-between text-[1.2rem] gap-6">
          {experience.map((data) => {
            return (
              <div
                key={data.id}
                className="hover:shadow-lg shadow w-1/3 hover:shadow-blue-200 shadow-blue-200 p-6 flex flex-col gap-2 rounded-lg"
              >
                <p className="text-gray-500">{data.date}</p>
                <h2 className="text-3xl font-bold">{data.heading}</h2>
                <p
                  className="text-gray-300 text-xl
                "
                >
                  {data.info}
                </p>
              </div>
            )
          })}
        </div>
      </article> */}
    </section>
  )
}

export default Experience

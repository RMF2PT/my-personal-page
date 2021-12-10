import React from 'react'
import photo from './Photo.jpeg'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, my name is Ricardo Ferreira and
            <br className="hidden lg:inline-block" /> I love building web apps!
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a father of four amazing kids and the husband of one loving wife. I've been building several web apps that make the internet a better place for all of us. A better place for your business, your blog, your presence in the web.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center grayscale [clip-path:circle(70%_at_80%_40%)]"
            alt="hero"
            src={photo}
          />
        </div>
      </div>
    </section>
  )
}
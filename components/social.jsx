import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/mrpbennett">
        <BsGithub className="h-6 w-6 hover:text-green-500" />
      </a>
      <a href="https://www.linkedin.com/in/paulandrewbennett/">
        <BsLinkedin className="h-6 w-6 hover:text-green-500" />
      </a>
      <a href="mailto:pbennett.uk@gmail.com">
        <MdEmail className="h-6 w-6 hover:text-green-500" />
      </a>
    </div>
  )
}

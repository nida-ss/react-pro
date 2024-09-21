import React from 'react'

function card({username = "nida"}) {
    // console.log(props);
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:rounded- rounded-full mx-auto" src="https://i.pinimg.com/736x/36/33/76/363376620e02ae616c78a4472307e5f4.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center space-y-4">
        <blockquote>
            <p className="text-lg font-medium">
            Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.
            </p>
        </blockquote>
        <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
            </div>
        </figcaption>
        </div>
        </figure>
    </div>
  )
}
export default card
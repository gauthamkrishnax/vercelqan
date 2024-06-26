export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            QUESTION 2
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
  
        <div>
        <p className="text-blue-200 text-xl">
        How would you compare Next.js with another framework? Feel free to compare
with a framework of your choice.
          </p>  
  
          <p>
            One of the stack I love using in the recent time is svelte.js with astro. I love astro for its island architecture and performance. Astro is framework-agnostic, allowing you to use it with various frontend libraries.Astro optimizes for speed using static site generation (SSG) and partial hydration. It delivers fast initial load times. svelte also has an amazing developer experience.
            Next.js is a full-stack framework specifically built for React. One thing I love about next is that it offers both client-side and server-side functionality.
        </p>
  
        </div>
  
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
  
  <a
    href="/"
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    rel="noopener noreferrer"
  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      Back to Home{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
  </a>
        </div>
      </main>
    );
  }
  
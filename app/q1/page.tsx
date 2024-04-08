export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          QUESTION 1
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div>
      <p className="text-blue-200 text-xl">
        Describe how you solved a challenge that one of your previous teams faced.
How did you determine your solution was successful?
        </p>  

        <p>
        As part of my role as a technical consultant at Adobe, I was involved in an ongoing project that necessitated the implementation of a multi-repo solution. The primary objective was to ensure clear separation of concerns between the middleware and frontend. However, the challenge arose when we needed to enhance the developer experience, particularly when multiple developers were simultaneously working on different repositories. The project’s complexity further escalated due to unforeseen technical difficulties,
          We had to maintain different repos for stage and production too. Especially when there are hot fixes or new features after live it was difficult to avoid conflicts. The solution that I formulated was to follow a reverse branching technique. Use cherry-pick to pick the hotfix commit and directly push to production and create a cross repo pull request from top production layer to the development layer. Applying this required high collaboration with other developers and the team and using this strategy we were successfully able to minimize the conflict and hence the time and effort required.
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

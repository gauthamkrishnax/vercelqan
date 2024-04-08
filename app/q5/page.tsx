export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            QUESTION 5
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
  
        <div>
        <p className="text-blue-200 text-xl">
        Imagine that the customer from Question 4 responds with the following email.
“I’m so frustrated. I’ve been trying to make this work for hours and I just
can’t figure it out. It must be a platform issue so why don't you just fix it for
me instead of asking me questions.”
Write a reply to the customer addressing the concerns raised.
          </p>  

          <p> Dear [Client],</p>
          <p>
         

I apologize for the frustration you're experiencing, and I understand how challenging technical issues can be. Thank you for reaching out to us.

While I empathize with your situation, let me assure you that our team is committed to resolving any platform-related issues you encounter. However, in order to provide the most effective assistance, we need to gather some additional information. By asking questions, we aim to pinpoint the root cause and tailor our solution to your specific case.

Please bear with us as we work together to identify and address the issue. Our goal is to ensure a smooth experience for you, and I appreciate your patience.

If you have any further details or observations about the problem, please share them, and we'll do our best to expedite the resolution.

Thank you for your understanding, and I look forward to assisting you further.
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
  
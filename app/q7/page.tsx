export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            QUESTION 7
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
  
        <div>
        <p className="text-blue-200 text-xl">
        A customer, new to Next.js and Vercel, asks about overages regarding serverless
function execution. What would be the best way to help mitigate this?
          </p>  

          <p> Dear [Client],</p>
          <p>
          When dealing with serverless function execution in Next.js and Vercel, it’s essential to manage execution timeouts effectively to avoid overages. Here are some strategies to mitigate this:
          </p>
          <ol>
<li>
<p><strong>Increase Timeout Limits</strong>:</p>
<ul>
<li>By default, serverless functions have a maximum execution timeout (usually around 10 seconds).</li>
<li>Depending on your Vercel plan, you can increase this limit for paid plans.</li>
<li>In Next.js (version 13.5+), you can configure the timeout directly within your function code.</li>
</ul>
</li>
<li>
<p><strong>Override Maximum Duration Globally</strong>:</p>
<ul>
<li>If you want to set a maximum duration for all functions in your project, use&nbsp;<code>vercel.json</code>&nbsp;(valid for the App Router):</li>
</ul>
</li>
<li>
<p><strong>Consider Alternative Solutions</strong>:</p>
<ul>
<li>If your functions consistently hit the execution timeout, evaluate whether they can be optimized or split into smaller tasks.</li>
<li>For long-running processes, consider using other services like&nbsp;<strong>Firebase Cloud Functions</strong>&nbsp;or&nbsp;<strong>AWS Lambda</strong>.</li>
</ul>
</li>
</ol>
<p>Remember that efficient function design, proper testing, and monitoring are crucial. Choose the approach that best aligns with your project&rsquo;s requirements and performance goals.&nbsp;</p>
  
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
  
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            QUESTION 4
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
  
        <div>
        <p className="text-blue-200 text-xl">
        A customer has a project on Vercel and they want to redirect the /blog path to
another website. Write a reply to the customer.
          </p>  

          <p className="mb-1.5">
            Hi "Client",
            </p>

          <p>To redirect the&nbsp;<code>/blog</code>&nbsp;path on your Vercel project to another website, follow these steps:</p>
<ol>
<li>
<p><strong>Vercel Dashboard</strong>:</p>
<ul>
<li className="mx-2.5">Log in to your Vercel account and navigate to your project dashboard.</li>
</ul>
</li>
<li className="mx-2.5">
<p><strong>Project Settings</strong>:</p>
<ul>
<li className="mx-2.5">Click on your project to access its settings.</li>
</ul>
</li>
<li className="mx-2.5">
<p><strong>Routing Configuration</strong>:</p>
<ul>
<li className="mx-2.5">Under the &ldquo;Routing&rdquo; section, locate the &ldquo;Redirects&rdquo; or &ldquo;Rewrites&rdquo; option.</li>
<li className="mx-2.5">Add a new rule to handle the&nbsp;<code>/blog</code>&nbsp;path.</li>
</ul>
</li>
<li className="mx-2.5">
<p><strong>Specify the Redirect</strong>:</p>
<ul>
<li className="mx-2.5">Set the source path to&nbsp;<code>/blog</code>.</li>
<li className="mx-2.5">Choose the type of redirect:
<ul>
<li className="mx-2.5"><strong>Permanent (301)</strong>: If you want search engines to update their indexes.</li>
<li className="mx-2.5"><strong>Temporary (302)</strong>: If it&rsquo;s a temporary redirection.</li>
</ul>
</li>
<li className="mx-2.5">Enter the target URL (the other website where you want to redirect&nbsp;<code>/blog</code>).</li>
</ul>
</li>
<li className="mx-2.5">
<p><strong>Save Changes</strong>:</p>
<ul>
<li className="mx-2.5">Save your configuration.</li>
</ul>
</li>
<li className="mx-2.5">
<p><strong>Test the Redirect</strong>:</p>
<ul>
<li className="mx-2.5">Deploy your changes to Vercel.</li>
<li className="mx-2.5">Visit&nbsp;<code>https://your-vercel-project-url/blog</code>&nbsp;in your browser. It should automatically redirect to the specified target URL.</li>
</ul>
</li>
</ol>
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
  
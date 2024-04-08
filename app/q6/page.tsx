export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            QUESTION 6
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
  
        <div>
        <p className="text-blue-200 text-xl">
        A customer is just getting started with Vercel and has questions about
recommended options for third-party integrations for Monitoring or Logging.
Knowing that:
a. Vercel has in-house observability products,
b. Vercel likes to guide on processes, but
c. Vercel doesn’t like to steer customers towards one solution or another, but
demonstrates what the product can do.
How would you respond to the customer?
          </p>  
          <p>Hello [Client],</p>
          <p>
Thank you for choosing Vercel! I'm glad to hear that you're getting started with our platform. 

Vercel offers robust in-house observability tools that allow you to monitor your applications effectively. Our built-in features include real-time performance metrics, error tracking, and deployment insights. These tools are seamlessly integrated into the Vercel dashboard, making it easy for you to keep an eye on your projects without leaving our platform.

We believe in empowering our users by guiding them through best practices and processes. When it comes to monitoring and logging, we encourage you to explore our native solutions first. Familiarize yourself with our observability features, as they are designed to meet most use cases. Our documentation provides step-by-step instructions to help you set up and utilize these tools efficiently.


Recommended Approach will be to Start with Vercel's Observability Tools, Explore our built-in monitoring and logging features. You'll find them under the 
and Evaluate Your Needs, Consider your specific requirements. If our in-house tools meet your needs, great! If not, you can always explore third-party integrations.

Remember that our support team is here to assist you throughout your journey. Feel free to reach out if you have any further questions or need additional guidance.

Happy coding, and welcome to Vercel!
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
  
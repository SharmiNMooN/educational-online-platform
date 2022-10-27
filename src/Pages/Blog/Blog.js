const Blog = () => {
  return (
    <div className="container bg-light  mt-4 ">
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:1. What is CORS?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>CORS:</b>CORS stands for "Cross-Origin Resource Sharing" .
            <br />
            It allows us to relax the security applied to an API. This is done
            by bypassing the Access-Control-Allow-Origin headers, which specify
            which origins can access the API.
            <br />
            Cross-Origin Resource Sharing is an HTTP-header based mechanism
            implemented by the browser which allows a server or an
            API(Application Programming Interface) to indicate any origins
            (different in terms of protocol, hostname, or port) other than its
            origin from which the unknown origin gets permission to access and
            load resources. The cors package available in the npm registry is
            used to tackle CORS errors in a Node.js application.
          </p>
          <br />
          Let's understand using an example: As the CORS package is available in
          npm(node package manager) that Node.js third-party package, we must
          have Node.js installed in our local system. To verify type the
          following command in the terminal. "node -v"
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <b>
            Q:2. Why are you using firebase? What other options do you have to
            implement authentication?
          </b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>Using Firebase:</b>
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Release Apps Confidently.
            Cross-Platform Solutions. Monitor App Performance.
            <br />
            <b>Other options to implement authentication:</b>
            It provides backend services, easy-to-use SDKs, and ready-made UI
            libraries to authenticate users to your app. It supports
            authentication using passwords, phone numbers, popular federated
            identity providers like Google. TOP ALTERNATIVES OPTIONS TO FIREBASE
            AUTHENTICATION:
            <br />
            Auth0:A set of unified APIs and tools that instantly enables Single
            Sign On and user .<br />
            MongoDB:MongoDB stores data in JSON-like documents that can vary in
            structure, offering a dynamic, flexible schema. MongoDB was also
            designed for high availability and scalability, with built-in
            replication and auto-sharding. MongoDB is a tool in the Databases
            category of a tech stack.
            <br />
            JSON Web Token:JSON Web Token is an open standard that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JSON Web Token is a tool
            in the User Management and Authentication category of a tech stack.
            <br />
            Passport: It is authentication middleware for Node.js. Extremely
            flexible and modular, It can be unobtrusively dropped in to any
            Express-based web application. A comprehensive set of strategies
            support authentication using a username and password, Facebook,
            Twitter, and more. Passport is a tool in the User Management and
            Authentication category of a tech stack.
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:3. How does the private route work?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b> Private Routes:</b>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
            <br />
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. The current logged in user (authUser) is
            retrieved from Redux state with a call to the useSelector() hook.
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:4. What is Node? How does Node work?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>Node.js:</b>
            Node.js is an open-source, cross-platform JavaScript runtime
            environment and library for running web applications outside the
            client's browser. Ryan Dahl developed it in 2009, and its latest
            iteration, version 15.14, was released in April 2021. Developers use
            Node.js to create server-side web applications, and it is perfect
            for data-intensive applications since it uses an asynchronous,
            event-driven model. Now that we know what is Node, let's look at why
            it is so prevalent in web development.
            <br />
            <b>How does Node.js work?</b>
            NodeJs is built on Google Chrome's V8 engine, and for this reason
            its execution time is very fast and it runs very quickly. It is a
            used as backend service where javascript works on the server-side of
            the application. This way javascript is used on both frontend and
            backend. Chrome v8 engine which converts javascript code into
            machine code, it is highly scalable, lightweight, fast, and
            data-intensive.
            <br />
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
            <br />
            As NodeJs do not need to wait for an API to return data , so for
            building real time and data intensive web applications, it is very
            useful. It is totally asynchronous in nature that means it is
            totally non-blocking.
            <br />
            The loading time for an audio or video is reduced by NodeJs because
            there is better synchronization of the code between the client and
            server for having the same code base.
            <br />
            As NodeJs is open-source and it is nothing but a JavaScript
            framework , so for the developers who are already used to
            JavaScript, for them starting developing their projects with NodeJs
            is very easy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

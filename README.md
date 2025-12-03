<h1>Knowscope</h1>
<p>
  A learning management system (LMS) built using the <b>MERN stack</b> (<b>MongoDB</b>, <b>Express</b>, <b>React</b>, and <b>Node.js</b>).
</p>

<ul>
  <li>
    You may visit the deployed app here:<br>
    <a href="https://knowscope.vercel.app" target="_blank">
      <b>knowscope.vercel.app</b>
    </a>
  </li>
</ul>

<hr>

<h2>Features</h2>
<ul>
  <li>
    <b>Login/logout-based user authorization and authentication</b><br>
    Secure sign in and account registration with role-based access.
  </li><br>
  
  <li>
    <b>Course enrollment</b><br>
    Users can enroll in any course of their interest, watch course previews (if provided), and accomplish courses within their browser of choice.
  </li><br>
  
  <li><b>Course rating</b><br>
    Users can rate courses to express their satisfication of their overall learning experience, giving insight to potential enrollees whether they should enroll in a course or not.
  </li><br>

  <li><b>Search filtering</b><br>
    The LMS provides a search bar to help users look for a specific course through keywords.
  </li><br>
  
  <li><b>Payment processing integration</b><br>
    Through a fully functional checkout flow, users can purchase courses in a secure approach.
  </li><br>
  
  <li><b>'Educator' account type</b><br>
    Users may chose to become an Educator in the LMS, giving them access to view the Educator dashboard, add courses, view courses that they have created, as well view a list of all enrollees registered within the system. 
  </li><br>
  
  <li><b>Adding courses</b><br>
    As previously mentioned, Educators can have the ability to publish their own courses in the LMS. They can add as many lectures as they want to tackle the whole scope of a course. Educators can also set their own course pricing and discounts.
  </li><br>
  
  <li><b>Embedded YouTube lecture video</b><br>
    With Educators adding courses, embedding video content in their courses is mandatory to further supplement and enrich the learning experience of users. Educators can embed videos via YouTube URLs, and they can set them whether can be previewed by users before purchasing a cours or not.
  </li><br>
  
  <li><b>Responsive UI</b><br>
    Seamless experience in navigating throughout the app via desktop, tablet, and mobile layouts.
  </li>
</ul>

<hr>

<h2>Tech Stack</h2>
<table>
  <tr>
    <th><b>Name</b></th>
    <th><b>Details</b></th>
  </tr>

  <tr>
    <td>
      <b>Vite 7.2.4</b>
    </td>
    <td>Development environment</td>
  </tr>
  
  <tr>
    <td>
      <b>Express 5.1.0</b><br>
      <b>Node.js 22.20.0</b>
    </td>
    <td>Back-end</td>
  </tr>
  
  <tr>
    <td><b>Quill 2.0.3</b></td>
    <td>Rich text editor</td>
  </tr>

  <tr>
    <td><b>Multer 2.0.2</b></td>
    <td>File upload handling</td>
  </tr>

  <tr>
    <td><b>Cloudinary 2.8.0</b></td>
    <td>Media management API</td>
  </tr>

  <tr>
    <td><b><code>uniqid</code> 5.4.0</b></td>
    <td>Unique ID generation</td>
  </tr>
  
  <tr>
    <td><b>Stripe 20.0.0</b></td>
    <td>Payment processing</td>
  </tr>

  <tr>
    <td><b>Svix 1.42.0</b></td>
    <td>Webhook signature verification</td>
  </tr>

  <tr>
    <td><b>CORS 2.8.5</b></td>
    <td>Express middleware</td>
  </tr>

  <tr>
    <td>
      <b>MongoDB Atlas</b><br>
      <b>Mongoose 8.20.1</b>
    </td>
    <td>Database</td>
  </tr>

  <tr>
    <td><b>Axios 1.13.2</b></td>
    <td>Promise-based HTTP client</td>
  </tr>

  <tr>
    <td>
      <b>Clerk React SDK 5.56.2</b><br>
      <b>Clerk Express SDK 1.7.52</b>
    </td>
    <td>Authentication and user management SDK</td>
  </tr>

  <tr>
    <td>
      <b>React 19.2.0</b><br>
      <code>react-router-dom</code> <b>7.9.6</b><br>
      <b>Tailwind CSS 4.1.17</b><br>
      <b>React Typed 2.0.12</b><br>
      <b>React Fast Marquee 1.6.5</b><br>
      <b>Motion 12.23.24</b><br>
      <code>rc-progress</code> <b>4.0.0</b>
    </td>
    <td>UI</td>
  </tr>

  <tr>
    <td><b>React-Toastify 11.0.5</b></td>
    <td>Notifications</td>
  </tr>

  <tr>
    <td><b>Humanize Duration 3.33.1</b></td>
    <td>Human-readable time formatting</td>
  </tr>

   <tr>
    <td><code>react-youtube</code> <b>10.1.0</b></td>
    <td>Embedded YouTube player</td>
  </tr>
</table>

<hr>

<h2>Setup</h2>

<h3>Prerequisites</h3>
<ul>
  <li>
    Ensure you have <b>Node.js</b> installed.<br>
    Download Node.js (Windows Installer):<br>
    <a href="https://nodejs.org/en/download" target="_blank">Node.js — Download Node.js®</a>
  </li>
</ul>

<ul>
  <li>
    You may need <b>Postman</b> to test GET and POST requests made by the client-side, as well as responses retreived from APIs invoked within the app.<br><br>
    Download Postman (Windows 64-bit):<br>
    <a href="https://www.postman.com/downloads/" target="_blank">Download Postman | Get Started for Free</a>
  </li>
</ul>

<ul>
  <li>You must have an account for the following services:</li>
</ul>

<table>
  <tr>
    <th><b>Service</b></th>
    <th><b>Reasons why it's needed</b></th>
  </tr>
  
  <tr>
    <td>
      <b>
        <a href="https://dashboard.clerk.com/sign-in" target="_blank">Clerk</a>
      </b><br>
    </td>
    <td>
      <ul>
        <li>You need to obtain environment variables for the app's client-side and server-side so that Clerk's authentication and user management integration to work properly.</li>
        <li>It'll allow you to add/remove educator privileges to a registered account.</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>
      <b>
        <a href="https://account.mongodb.com/account/login" target="_blank">MongoDB</a>
      </b><br>
    </td>
    <td>
      <ul>
        <li>Gives you access and control to the app's cloud database.</li>
        <li>You need to obtain environment variables for the app's server-side, permitting MongoDB to store, delete, and update data processed in the app.</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>
      <b>
        <a href="https://dashboard.stripe.com/login" target="_blank">Stripe</a>
      </b><br>
    </td>
    <td>
      <ul>
        <li>Allows the app to integrate a full checkout flow for processing course purchases.</li>
        <li>You need to obtain environment variables for the app's server-side, giving Stripe access to implement its checkout flow.</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <b>
        <a href="https://cloudinary.com/users/login" target="_blank">Cloudinary</a>
      </b><br>
    </td>
    <td>
      <ul>
        <li>Allows the app to handle image content storage, optimization, and delivery when users request for them.</li>
        <li>You need to obtain environment variables for the app's server-side, allowing Cloudinary to manage image optimization and delivery once images are saved as URLs via string values in the MongoDB database.</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <b>
        <a href="https://vercel.com/login" target="_blank">Vercel</a>
      </b><br>
    </td>
    <td>
      <ul>
        <li>Allows the app to be deployed and accessed on the web.</li>
        <li>You need to deploy the folders <code>client</code> and <code>server</code> as separate projects.</li>
      </ul>
    </td>
  </tr>
</table>

<h3>Getting Started</h3>

<ul>
  <li><b>Running the project locally</b></li>
</ul>

<pre><code># Clone this repository
git clone https://github.com/andreiagbisit/knowscope.git
  
# Navigate into the client-side directory
cd client

# Navigate into the server-side directory
cd server
  
# Install dependencies
npm install
  
# Start the client-side
npm run dev

# Start the server-side
npm run server</code></pre>

<ul>
  <li>
    <code>.env</code> - <b>client-side</b><br>
    <b>(LOCAL)</b> - <i>put this file in the root of</i> <code>client</code><br>
    <b>(DEPLOYED)</b> - <i>Access your client-side's Vercel project and go to <b>Settings</b> > <b>Environment Variables</b> and add them in the fields <b>Key</b> and <b>Value</b></i>
  </li>
</ul>

<pre><code>VITE_CLERK_PUBLISHABLE_KEY=[publishable key]
VITE_CURRENCY = '[currency symbol]'
VITE_BACKEND_URL = http://localhost:[port number] (local) / [Vercel project link of the back-end] (deployed)</code></pre>

<ul>
  <li>
    <code>.env</code> - <b>server-side</b><br>
    <b>(LOCAL)</b> - <i>put this file in the root of</i> <code>server</code><br>
    <b>(DEPLOYED)</b> - <i>Access your server-side's Vercel project and go to <b>Settings</b> > <b>Environment Variables</b> and add them in the fields <b>Key</b> and <b>Value</b></i>
  </li>
</ul>

<pre><code>CURRENCY='[currency code]'

MONGODB_URI=[connection string]
  
CLERK_WEBHOOK_SECRET= '[webhook secret]'
CLERK_PUBLISHABLE_KEY=[publishable key]
CLERK_SECRET_KEY=[secret key]

CLOUDINARY_NAME = "[name]"
CLOUDINARY_API_KEY = "[API key]"
CLOUDINARY_SECRET_KEY = "[secret key]"

STRIPE_PUBLISHABLE_KEY=[publishable key]
STRIPE_SECRET_KEY=[secret key]
STRIPE_WEBHOOK_SECRET=[webhook secret]</code></pre>

<h3>Deployment</h3>

<ul>
  <li>
    <code>vercel.json</code> <b>configuration</b><br>
    Create two files named <code>vercel.json</code> then copy and paste the following code. Afterwards, place the files in the root of the folders <code>client</code> and <code>server</code>, according to their code content.
  </li>
</ul>

<ul>
  <li><code>vercel.json</code> - <b>client-side</b></li>
</ul>

<pre><code>  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/"
      }
    ]
  }</code></pre>

<ul>
  <li><code>vercel.json</code> - <b>server-side</b></li>
</ul>

<pre><code>{
    "version": 2,
    "builds": [
        {
            "src": "server.js",
            "use": "@vercel/node",
            "config": {
                "includeFiles": [
                    "dist/**"
                ]
            }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "server.js"
        }
    ]
}</code></pre>

<hr>

<h2>Clerk - set user as Educator</h2>

<ol>
  <li>
    <a href="https://dashboard.clerk.com/sign-in" target="_blank">Sign in</a> to your <b>Clerk</b> account.  
  </li>
  
  <li>On <b>Applications</b>, select the app that contains the users you want to configure.</li>
  <li>Select the <b>Users</b> tab.</li>
  <li>In the table under the <b>All</b> tab, pick the user you want to give Educator privileges to.</li>
  <li>Under the <b>Profile</b> tab of the selected user, navigate to <b>Metadata</b> > <b>Private</b> and click <b>Edit</b>.</li>
  <li>Within the provided area, paste the following:</li>
</ol>

<pre><code>
  "role": "educator"
  
</code></pre>

<hr>

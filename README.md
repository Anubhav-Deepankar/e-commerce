<h1 align="center">🛒 Full Stack E-Commerce Application</h1>

<p align="center">
A full-stack e-commerce web application where users can browse products,
add items to a cart, write reviews, and manage authentication.
Built using <b>Node.js, Express, MongoDB, and EJS</b>.
</p>

<p align="center">
<b>🚀 Live Demo</b><br>
<a href="https://e-commerce-m58a.onrender.com/" target="_blank">
https://e-commerce-m58a.onrender.com/
</a>
</p>

<hr>

<h2>🚀 Features</h2>

<ul>
<li>User authentication (Signup / Login)</li>
<li>Browse available products</li>
<li>Add products to cart</li>
<li>Write and manage product reviews</li>
<li>Secure routes using middleware</li>
<li>Flash messages for user feedback</li>
<li>Responsive UI with EJS templates</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<ul>
<li><b>Node.js</b> – Backend runtime</li>
<li><b>Express.js</b> – Server framework</li>
<li><b>MongoDB</b> – Database</li>
<li><b>Mongoose</b> – MongoDB ODM</li>
<li><b>EJS</b> – Server-side templating</li>
<li><b>CSS</b> – Styling</li>
<li><b>JavaScript</b> – Application logic</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
E-Commerce
│
├── public
│   └── css
│       ├── app.css
│       ├── home.css
│       └── star.css
│
├── routes
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   ├── productRoutes.js
│   └── reviewRoutes.js
│
├── views
│   ├── auth
│   │   ├── Login.ejs
│   │   └── Signup.ejs
│   │
│   ├── cart
│   │   └── cartPage.ejs
│   │
│   ├── layout
│   │   └── boilerplate.ejs
│   │
│   ├── partials
│   │   ├── flash.ejs
│   │   └── navbar.ejs
│   │
│   └── products
│       └── homepage.ejs
│
├── middleware.js
├── seed.js
├── index.js
├── package.json
├── package-lock.json
└── .env
</pre>

<hr>

<h2>⚙️ Installation & Setup</h2>

<h3>1️⃣ Clone the repository</h3>

<pre>
git clone https://github.com/Anubhav-Deepankar/E-Commerce.git
</pre>

<h3>2️⃣ Navigate to the project directory</h3>

<pre>
cd E-Commerce
</pre>

<h3>3️⃣ Install dependencies</h3>

<pre>
npm install
</pre>

<h3>4️⃣ Configure environment variables</h3>

<p>Create a <b>.env</b> file and add your MongoDB connection string:</p>

<pre>
DB_URL=your_mongodb_connection_string
</pre>

<h3>5️⃣ Run the application</h3>

<pre>
node index.js
</pre>

<p>The server will start and the application will run locally.</p>

<hr>

<h2>💡 Architecture Overview</h2>

<ul>
<li><b>Routes</b> handle API endpoints and page navigation.</li>
<li><b>Middleware</b> manages authentication and request validation.</li>
<li><b>Views</b> render dynamic pages using EJS templates.</li>
<li><b>MongoDB</b> stores user data, products, carts, and reviews.</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<b>Anubhav Deepankar</b><br>
GitHub:<br>
<a href="https://github.com/Anubhav-Deepankar">
https://github.com/Anubhav-Deepankar
</a>
</p>

<hr>

<p align="center">
⭐ If you like this project, consider giving it a <b>star</b> on GitHub!
</p>

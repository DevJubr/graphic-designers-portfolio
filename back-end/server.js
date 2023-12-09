const Express = require("express");
const Path = require("path");

const App = Express();

App.use(Express.static(Path.join(__dirname, "../dist")));

App.get("*", (req, res) => {
  res.sendFile(Path.resolve(__dirname, "../", "dist", "index.html"));
});

App.listen(5000, () => {
  console.log("server runing on port 5000");
});

module.exports = App;

// function sendEmail(name, email, message) {
//   // Use useEffect to trigger email sending on button click
//   useEffect(() => {
//     const mailToLink = `mailto:jubayerrahman203@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`;
//     window.location.href = mailToLink;
//   }, []); // Empty array ensures only one email is sent

//   // Return JSX for your button or form submit component
//   return (
//     <button onClick={() => sendEmail(name, email, message)}>Send Email</button>
//   );
// }

// // Use the sendEmail function within your React component
// function MyComponent() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendEmail = () => {
//     sendEmail(name, email, message);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button onClick={handleSendEmail}>Send Email</button>
//     </div>
//   );
// }

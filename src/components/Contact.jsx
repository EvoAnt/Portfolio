const sendEmail = () => {
    window.location.href = "mailto:Anthony0824@bellsouth.net";
  };

const Contact = () => {
  return (
    <div id="Contact" className="my-10 flex flex-col justify-center items-center h-96 shadow-md shadow-purple-500">
        <h1 className="text-4xl underline underline-offset-4 mb-5">Get In Touch With Me</h1>
        <p className="text-purple-500 font-semibold mb-5">Looking for new opportunities</p>

       <button
      className="bg-black hover:bg-purple-500 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={sendEmail}
    >
      Contact Me
    </button>
    </div>
  )
}

export default Contact
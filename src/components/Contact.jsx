const sendEmail = () => {
    window.location.href = "mailto:Anthony0824@bellsouth.net";
  };

const Contact = () => {
  return (
    <div id="Contact" className="my-20 flex flex-col justify-center items-center h-96 shadow-md shadow-purple-500">
        <h1 className="text-4xl underline underline-offset-4 mb-5">Contact <span className="text-purple-500">Me</span></h1>
        <p className="text-purple-500 font-semibold mb-5">Looking for new opportunities</p>

       <button
      className="bg-black hover:bg-purple-500 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline"
      onClick={sendEmail}
    >
      Contact
    </button>
    </div>
  )
}

export default Contact
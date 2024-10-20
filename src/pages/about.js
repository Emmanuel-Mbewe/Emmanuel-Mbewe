import Head from 'next/head';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Head>
        <title>About Emmanuel</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Learn more about Emmanuel." />
      </Head>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg flex p-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/images/Emmanuel.jpg" // Update this to the path of your image in the public folder
            alt="Emmanuel"
            className="h-48 w-48 rounded-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="ml-6">
          <h1 className="text-3xl font-semibold">Emmanuel Mbewe</h1>
          <p className="mt-2 text-gray-600">
            Hello! I am Emmanuel, a passionate computer scientist and educator. 
            I am currently teaching at Mtendere Secondary School in Dedza. Here, I teach Mathematics and Computer Studies (From 3). 
            <br></br> <br></br> I also focus on enhancing educational outcomes through technology as I am into mentorship program where 
            I am mentoring forms 3 and 4 computer studies students to embrace new technologies. 
            <br></br> <br></br>I aspire to make a positive impact in the field of education and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

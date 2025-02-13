import Head from 'next/head';
import { useState } from 'react';

const Cv = () => {
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Curriculum Vitae</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Emmanuel Binalison Mbewe</h2>
        <p>
          Lisasadzi Full Primary School<br />
          Private Bag 40, Kasungu<br />
          <strong>Phone:</strong> (+265) 885 550 566 / (+265) 996 808 428<br />
          <strong>Email:</strong> emmanuelmbewe180@gmail.com
        </p>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Personal Profile</h3>
        <p>
        A self-motivated teacher and computer scientist with a Bachelor of Education in Computer Science. 
        I have experience in teaching Mathematics and Computer Studies, mentoring students, and using technology in education. 
        I also have four years of experience in tech, working on different projects while I was a student. 
        I also continuously work on programming and graphic design projects. 
        My skills include web development, cybersecurity, graphic design, and programming. 
        </p>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Biodata</h3>
        <ul className="list-disc list-inside">
          <li><strong>Title:</strong> Mr.</li>
          <li><strong>Full Name:</strong> Emmanuel Binalison Mbewe</li>
          <li><strong>Nationality:</strong> Malawian</li>
          <li><strong>District of Origin:</strong> Kasungu</li>
          <li><strong>Traditional Authority:</strong> Kaomba</li>
          <li><strong>Village:</strong> Bondo</li>
          <li><strong>Current District of Residence:</strong> Nkhoma, Lilongwe</li>
          <li><strong>Date of Birth:</strong> 09th December 1998</li>
          <li><strong>Gender:</strong> Male</li>
          <li><strong>Marital Status:</strong> Single</li>
          <li><strong>Religion:</strong> Christian</li>
          <li><strong>Language Proficiency:</strong> Chichewa, English</li>
        </ul>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <ol className="list-decimal list-inside">
          <li><strong>Bachelor of Education in Computer Science</strong> – University of Malawi, Zomba (2019 – 2024, Pending Graduation)</li>
          <li><strong>Malawi School Certificate of Education</strong> – Chamvwabvi Community, Kasungu (2016 – 2018)</li>
        </ol>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Tech Experience</h3>
        <div>
          <ul className="list-disc list-inside">
            <li>Co-developed the Malawi Education Enhancement Platform (MEEP), improving education in Malawi, presented at EdTech@UNIMA 2024. – 2024</li>
            <li>Partnered with Physics students to implement an automated solar-based irrigation system; developed the Android application. – 2024</li>
            <li>Created the Campus Food Sharing mobile app, promoting food sustainability and sharing among students. – 2023</li>
            <li>Collaborated on the Agricultural Information System project, integrating technology for agricultural data management. – 2023</li>
            <li>Developed the Exam Past Paper Repository, enhancing student access to past exam materials. – 2022</li>
            <li>Cybersecurity Awareness: Trained students on online safety and security best practices. – 2025</li>
          </ul>
        </div>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Teaching Experience</h3>
        <div>
          <p><strong>1. Student Teacher</strong> – Mtendere Secondary School (2024/2025 Academic Year)</p>
          <ul className="list-disc list-inside">
            <li>Preparing schemes of work, lesson plans, and lab manuals.</li>
            <li>Delivering lessons and managing classroom dynamics.</li>
            <li>Mentoring ICT club students.</li>
            <li>Administering and marking assessments.</li>
          </ul>

          <p className="mt-4"><strong>2. Peer and Micro Teaching – University of Malawi (2021 – 2023)</strong></p>
          <ul className="list-disc list-inside">
            <li>Practiced teaching with fellow students in a controlled environment</li>
            <li>Received feedback to improve lesson delivery and classroom management</li>
          </ul>

          <p className="mt-4"><strong>3. Private Tutor (Part-Time)</strong> – 2019 – present</p>
          <ul className="list-disc list-inside">
            <li>Preparing lesson plans and content.</li>
            <li>Delivering personalized lessons.</li>
            <li>Administering and marking assessments.</li>
            <li>Teaching Mathematics, Computer Science, Physics, Chemistry, and Biology</li>
            <li>Helping students improve their grades with personalized learning</li>
            <li>Training students in coding, basic cybersecurity, graphic design and web development</li>
          </ul>
        </div>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Certifications</h3>
        <ul className="list-disc list-inside">
          <li>AI Career Essentials (ALX AiCE) – May 2024</li>
          <li>DHIS2 Certification Series – December 2023</li>
          <li>Project DPro – March 2024</li>
          <li>MEAL DPro – November 2023</li>
        </ul>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Personal Competencies and Skills</h3>
        <ul className="list-disc list-inside">
          <li>Teamwork and collaboration</li>
          <li>Strong communication and interpersonal skills</li>
          <li>Problem-solving abilities</li>
          <li>Technological proficiency</li>
          <li>Commitment to continuous learning</li>
        </ul>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Hobbies</h3>
        <ul className="list-disc list-inside">
          <li>Reading and writing</li>
          <li>Coding</li>
          <li>Hiking and outdoor activities</li>
          <li>Volunteering</li>
        </ul>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">References</h3>
        
          The Head Teacher <br></br>
            Mtendere Secondary School. <br></br>
            Phone: (+265) 999 687 401 <br></br><br></br>

          The Teacher <br></br>
          Likangala Secondary School. <br></br>
          Phone: (+265) 882 349 952 <br></br><br></br>

          The Lecturer <br></br>
          University of Malawi. <br></br>
          Phone: (+265) 991 45 95 52 <br></br><br></br>
      </div>
    </div>
  );
};

export default Cv;

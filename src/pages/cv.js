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
          A self-motivated educator with expertise in computer science, mathematics, educational technology, and classroom management. Experienced in teaching Mathematics and Computer Studies, mentoring students, and contributing to educational advancements. Adept at using innovative teaching methods and technical skills to create engaging learning environments.
        </p>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800">Biodata</h3>
        <ul className="list-disc list-inside">
          <li><strong>Surname:</strong> Mbewe</li>
          <li><strong>First Name:</strong> Emmanuel</li>
          <li><strong>Middle Name:</strong> Binalison</li>
          <li><strong>Title:</strong> Mr.</li>
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

        <h3 className="text-lg font-semibold text-gray-800">Professional Experience</h3>
        <div>
          <p><strong>1. Student Teacher</strong> – Mtendere Secondary School (2024/2025 Academic Year)</p>
          <ul className="list-disc list-inside">
            <li>Preparing schemes of work, lesson plans, and lab manuals.</li>
            <li>Delivering lessons and managing classroom dynamics.</li>
            <li>Mentoring ICT club students.</li>
            <li>Administering and marking assessments.</li>
          </ul>

          <p className="mt-4"><strong>2. Assistant Teacher</strong> – Likangala Secondary School (2023)</p>
          <ul className="list-disc list-inside">
            <li>Encouraging creativity and innovation in students.</li>
            <li>Maintaining teaching materials.</li>
            <li>Monitoring students' academic progress.</li>
          </ul>

          <p className="mt-4"><strong>3. Private Tutor (Part-Time)</strong> – 2019–2024</p>
          <ul className="list-disc list-inside">
            <li>Preparing lesson plans and content.</li>
            <li>Delivering personalized lessons.</li>
            <li>Administering and marking assessments.</li>
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

import React from 'react';
import logo from './MQ-Logo-V2.png';
import './App.css';

function App() {
  return (
    <div className= "App">
      <div className="App-logo">
        <img src={logo}  alt="logo" />
      </div>
      <div className="task-content">
        <h1>Welcome to the Frontend Interview</h1>
        <h4>Hint: If you are not able to solve some parts of the task please skip the
        part and continue on. We ♥ Typescript.</h4>
        <h2>Task 1a - Introduction (Applicant Profile)</h2>
        <p>
          Create a JSON file which shall answer the following questions:
          <ul>
          <ol>1. Name</ol>
          <ol>2. List down the Programming Languages that you have used before and map them in the following order:</ol>
            <ul>
              <ol> Familiar: Can make things work by collaging code snippets together from Stack Overflow and other external references </ol>
              <ol>Proficient: Occasional reference to Stack Overflow and external references, but have good understanding of what the code is doing</ol>
              <ol>Excellent: Can code without Stack Overflow and minimal reference to documentation</ol>
            </ul>
          <ol>3. What are some of your skillsets? You may showcase existing projects that you have been working on, and GitHub profile (if any).</ol>
          <ol>4. Tell us why we should consider your application?</ol>
          </ul>
          Refer the sample JSON object below:
          <pre>
            <code>
            {`
              {
                "name": "Jude",
                "programming_languages": [{
                  "familiar": "Python",
                  "proficient": "PHP, JavaScript",
                  "excellent": "Java, C#"
                }]
              }
            `}
            </code>
          </pre>
          Hint: The sample JSON file is present in the src folder, named as "applicant_profile.json"
        </p>
        <h2>Task 1b - Components (React)</h2>
        <p>
          Implement a Master Detail component which renders a list of items on the
          left and a detail view on the right. When the user clicks on a list item
          the render function of the detail view should be called with the
          correspondig payload from the above created JSON file. The component should provide the following api:
          <pre>
            <code>
              {`
                <MasterDetail>
                  <MasterDetail.Item payload={{content: "Jude"}}>Name</MasterDetail.Item>
                  <MasterDetail.Item payload={{content: "Python"}}>Programming Languges - Familiar</MasterDetail.Item>
                  <MasterDetail.Detail>
                    {(payload) => payload.content)}
                  </MasterDetail.Detail>
                </MasterDetail>
              `}
            </code>
          </pre>
          Optional: You can add more informatio in JSON and add styles to make it prettier.
        </p>
        <h2>Task 2 - Javascript (Logic & Testing)</h2>
        <p>
          Implement a function which takes a arbitary nested JS Object and do the following transformations:
          <ul>
            <li>
              add +7 to each Number within in Object (eg:{" "}
              <span
                style={{
                  fontStyle: "italic",
                  margin: "0 5px",
                  display: "inline-block",
                }}
              >
                x: 3 =&gt; x: 10
              </span>
              )
            </li>
            <li>
              If a string is PALINDROME add 'XYZ' to each String within the Object, else add 'ABC' (eg:{" "}
              <div
                style={{
                  fontStyle: "italic",
                  margin: "0 5px",
                  display: "inline-block",
                }}
              >
                y: 'abc' =&gt; y: 'abc ABC', z: 'aba' =&gt; y: 'abc XYZ'
              </div>
              )
            </li>
            <li>The object should keep its structure!</li>
            <li>Write test scripts for the functions!</li>
          </ul>
          See a rough example structure below:
          <pre>
            <code>
              {`
                // initial object
                {
                  a: 123,
                  b: 'abc'
                  c: [1, 2, 3]
                  d: 'madam'
                }

                // resulting object
                {
                  a: 130,
                  b: 'abc ABC'
                  c: [8, 9, 10]
                  d: 'madam XYZ'
                }
              `}
            </code>
          </pre>
        </p>
        <h2>Task 3 - Routing (React)</h2>
        <p>
          Implement routing function which allows navigation for the above 2 tasks/components in a more effective way.
          Explain what has been performed for routing in the Task 3 output page.
        </p>
      </div>
      <div className="final-instructions">
        <h2>Best of Luck 🚀</h2>
        <pre> 
          {`
            Render the components inside this <App /> component or provide guidelines if rendered in custom pages. 
            Usage of advanced concepts and best practices will fetch extra points!!
          `}
          </pre>
      </div>
    </div>
  );
}

export default App;

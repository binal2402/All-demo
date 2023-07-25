var data = {
  "students": [{
      "studentname": "Rohit Kumar",
      "grade": "A",
      "student": [{
          "SNo": "1",
          "Subject": "Maths",
          "Concept": "Numbers"
      }, {
          "SNo": "2",
          "Subject": "Maths",
          "Concept": "Number System"
      }]
  }, {
      "studentname": "Archer",
      "grade": "A++",
      "student": [{
          "SNo": "1",
          "Subject": "Stack Overflow",
          "Concept": "Ruling"
      }, {
          "SNo": "2",
          "Subject": "Stack Overflow",
          "Concept": "Being a boss"
      }, {
          "SNo": "3",
          "Subject": "Stack Overflow",
          "Concept": "Answering your question"
      }]
  }]
};

var html = "<table width='100%' border='0' cellspacing='0' cellpadding='0' height='90%'>";

for (var i = 0, il = data.students.length; i < il; i++) {

  html += "<tr valign='top' align='center'>";
  html += "<td>";

  // add the student information
  html += "<table width='95%'>";
  html += "<tr valign='top' align='center'>";
  html += "<td>Student Name: " + data.students[i].studentname + "</td>";
  html += "<td>Grade: " + data.students[i].grade + "</td>";
  html += "</tr>";
  html += "</table>";

  html += "<table class='data-table table1'>";
  html += "<thead>";
  html += "<tr>";
  html += "<th>SNo.</th>";
  html += "<th>Subject</th>";
  html += "<th>Concept</th>";
  html += "</tr>";
  html += "</thead>";
  html += "<tbody>";

  // add the subject information
  for (var j = 0, jl = data.students[i].student.length; j < jl; j++) {
      html += "<tr>";
      html += "<td>" + data.students[i].student[j].SNo + "</td>";
      html += "<td>" + data.students[i].student[j].Subject + "</td>";
      html += "<td>" + data.students[i].student[j].Concept + "</td>";
      html += "</tr>";
  }

  html += "</tbody>";
  html += "</table>";
  html += "</td>";
  html += "</tr>";
}

html += "</table>";

document.getElementById("student-table-container").innerHTML = html;
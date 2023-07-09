
// ...........รัยค่าinput เเละ select
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = Array.from(document.querySelectorAll("#form input"));
  const divs = Array.from(document.querySelectorAll("div"));
  const selectElements = [
    "company_job",
    "employment_job",
    "mr_mrs",
    "blood_group",
    "NATIONALITY",
    "RELIGION",
    "SERVICE",
    "STATUS_Single",
    "FATHER_status",
    "MOTHER_status",
    // "EMERGENCY_mobile",
    "khow_works",
    "SPEAKING_eng",
    "READING_eng",
    "WRITING_eng",
    "SPEAKING_thai",
    "READING_thai",
    "WRITING_thai",
    "SPEAKING_chin",
    "READING_chin",
    "WRITING_chin",
    // "SPEAKING_OTHER",
    // "READING_OTHER",
    // "WRITING_other",
    "COMPANY_Yes_no",
    "spouse_name",
    "PHONE_spouse",
    "APPLICATION",
    "COMPANY_name",
    "spouse_name_disabled",
    "PHONE_spouse_disabled",
    "APPLICATION_disabled",
    "COMPANY_name_disabled",
  ];

  checkRequired(inputs, divs);
  checkSele(selectElements);

});

// เช็ค ฟีว select
function checkSele(selectElements) {
  selectElements.forEach(function (elementId) {
    const element = document.getElementById(elementId);

    if (element.value === '1') {
      element.style.borderColor = "#2ecc71";
    }
    if (element.value === '0') {
      element.style.borderColor = "var(--error-color)";
    }



    if (
      element.id === "spouse_name_disabled" ||
      element.id === "PHONE_spouse_disabled" ||
      element.id === "APPLICATION_disabled" ||
      element.id === "COMPANY_name_disabled"
    ) {
      element.style.borderColor = "";
    }
  });
}


// เช็ค input
function checkRequired(inputArr, divs) {

  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input);
    } else {
      showSuccess(input);
    }
  });
  divs.forEach(function (div) {
    if (
      div.id === "spouse_name_disabled" ||
      div.id === "PHONE_spouse_disabled" ||
      div.id === "APPLICATION_disabled" ||
      div.id === "COMPANY_name_disabled"
    ) {
      clearError(div);

      showNone(div);
    }
  }
  )
}




document.getElementById("khow_works").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let divContainer = document.querySelector(".myDIV");

  if (maritalStatus === "1") {
    divContainer.style.display = " block";  // Show the divContainer
  } else {
    divContainer.style.display = "none";   // Hide the divContainer
  }
});

// ..........ปิด-เปิดกล่อง
document.getElementById("STATUS_Single").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("spouse_name");
  let spousePhoneInput = document.getElementById("PHONE_spouse");
  let APPLICATIONInput = document.getElementById("APPLICATION");
  let COMPANY_nameInput = document.getElementById("COMPANY_name");

  if (maritalStatus === "สมรส") {
    spouseNameInput.removeAttribute('disabled');
    spousePhoneInput.removeAttribute('disabled');
    APPLICATIONInput.removeAttribute('disabled');
    COMPANY_nameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
    spousePhoneInput.setAttribute('disabled', '');
    APPLICATIONInput.setAttribute('disabled', '');
    COMPANY_nameInput.setAttribute('disabled', '');
  }
});
document.getElementById("HAD").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("DISEASE1");


  if (maritalStatus === "2") {
    spouseNameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
  }
});
document.getElementById("HAD").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("DISEASE1");


  if (maritalStatus === "2") {
    spouseNameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
  }
});
document.getElementById("hospital_day").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("DISEASE2");


  if (maritalStatus === "2") {
    spouseNameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
  }
});
document.getElementById("HAD_UNDERGONE").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("DISEASE3");


  if (maritalStatus === "2") {
    spouseNameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
  }
});

// .... เปิด-เปิด เช็คบล็อค
document.getElementById("id_car").addEventListener("change", function (car1) {
  var checkbox = car1.target;
  var numcarInput = document.getElementById("numcar");

  if (checkbox.checked) {
    numcarInput.removeAttribute('disabled');
  } else {
    numcarInput.setAttribute('disabled', '');
  }
});
document.getElementById("id_car2").addEventListener("change", function (car2) {
  var checkbox = car2.target;
  var numcarInput = document.getElementById("numcar2");

  if (checkbox.checked) {
    numcarInput.removeAttribute('disabled');
  } else {
    numcarInput.setAttribute('disabled', '');
  }
});

// ....................................................................

//checkRequired fields
function checkRequired(inputArr, B2) {
  inputArr.forEach(function (input) {
    if (input.disabled || input.id === 'formFile6' || input.id === 'formFile7' || input.id === 'formFile8' || input.id === 'formFile9' || input.id === 'formFile10' || input.id === 'OTHER_languahes') {
      return;
    }
    if (input.value.trim() === '') {
      showError(input);
    } else {
      showSuccess(input);
    }

  });
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Show input error messages
function showError(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control_gknn error';
}

//show success colour
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control_gknn success';
}

// ...........Testadd
function removeFromLocalStorage(key, value) {
  // ตรวจสอบว่า localStorage มีอยู่แล้วหรือไม่
  if (localStorage) {
    // อ่านค่าที่มีอยู่ใน localStorage
    var existingData = localStorage.getItem(key);

    if (existingData) {
      // แปลงค่าใน localStorage จากสตริงเป็นอาเรย์
      var dataArray = JSON.parse(existingData);

      // ค้นหาและลบค่าในอาเรย์
      var index = dataArray.indexOf(value);
      if (index !== -1) {
        dataArray.splice(index, 1);

        // เชื่อมต่อค่าใหม่เป็นสตริงและเก็บลงใน localStorage
        var newData = JSON.stringify(dataArray);
        localStorage.setItem(key, newData);
      }
    }
  } else {
    console.log("ไม่สนับสนุน localStorage ในเบราว์เซอร์นี้");
  }
}


function addToLocalStorage(key, value) {
  // ตรวจสอบว่า localStorage มีอยู่แล้วหรือไม่

  if (localStorage) {
    // อ่านค่าที่มีอยู่ใน localStorage
    var existingData = localStorage.getItem(key);

    if (existingData) {
      // แปลงค่าใน localStorage จากสตริงเป็นอาเรย์
      var dataArray = JSON.parse(existingData);


      if (dataArray.length < 3) {
        // ตรวจสอบว่าอาเรย์ยังไม่เต็ม ก่อนที่จะเพิ่มค่าเข้าไปในอาเรย์
        dataArray.push(value);

        // เก็บค่าที่อัปเดตลงใน localStorage
        localStorage.setItem(key, JSON.stringify(dataArray));
      } else {
        console.log("ไม่สามารถเพิ่มค่าเข้า localStorage ได้ เพราะอาเรย์เต็มแล้ว");
      }
    } else {
      // ถ้าไม่มีค่าอยู่แล้ว จะสร้างอาเรย์ใหม่และเพิ่มค่าเข้าไปในอาเรย์
      var dataArray = [value];

      // เก็บค่าใหม่ลงใน localStorage
      localStorage.setItem(key, JSON.stringify(dataArray));
    }
  } else {
    console.log("ไม่สนับสนุน localStorage ในเบราว์เซอร์นี้");
  }
}
//   ..................FormMax-3
// เปิด-เปิดการเช็คบล็อกสำหรับ id_car2
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from1');
  const todoList1 = document.getElementById('todo-list');
  window.todoItems1 = [];
  window.clickCount1 = 0;

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount1 < 3) {
      const todoItem = document.createElement('div');

      const html = `
          <div class="row pt-4 px-4" id="XD-${clickCount1}">
            <h6 class="col-10">TRAINING, OTHER</h6>
            <button class="btn btn-outline-medeze col-1" onclick="deleteXD(${clickCount1})">Delete</button>
          </div>
          <div class="row p-4">
            <div class="col-4">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="Record" value="" aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="Record2" value="" aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>ระยะเวลาการฝึกอบรม</label>
              <h6>DURATION OF COURSE</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="Record3" value="" aria-describedby="addon-wrapping">
              </div>
            </div>
          </div>`;

      todoItem.innerHTML = html;
      window.todoItems1.push(todoItem);
      todoList1.appendChild(todoItem);

      clickCount1++;
    }
  });
});

function deleteXD(index) {
  const todoList1 = document.getElementById('todo-list');
  const todoItem = window.todoItems1[index];

  if (todoItem && todoItem.parentNode === todoList1) {
    todoList1.removeChild(todoItem);
    window.todoItems1.splice(index, 1);
    window.clickCount1--;
  }
}



// 
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from2');
  const todoList1 = document.getElementById('todo-list1');
  window.todoItems1 = [];
  window.clickCount1 = 0;

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount1 < 3) {
      const todoItem = document.createElement('div');

      const html = `
      <div class="row pt-4 px-4" id="XD-${clickCount1}">
      <h6 class="col-10">TRAINING, OTHER</h6>
      <button class="btn btn-outline-medeze col-1" onclick="deleteTodo1(${clickCount1})">Delete</button>
    </div>
          <div class="row p-4">
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>สถานที่ประกอบการ</label>
              <h6>COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_1" value=" " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>ตำแหน่ง</label>
              <h6>POSITION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3" value=" " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>วันที่เริ่มงาน</label>
              <h6>START DATE</h6>
              <div class="input-group flex-nowrap">
              <input type="datetime-local" name="birthdaytime" class="form-control"
              id="birthdaytime_F"
              onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
            <label>วันที่สิ้นสุด</label>
            <h6>FINISH DATE</h6>
            <div class="input-group flex-nowrap">
            <input type="datetime-local" name="birthdaytime" class="form-control"
            id="birthdaytime_L"
            onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-4">
          <label>เงินเดือน</label>
          <h6>SALARY</h6>
          <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3" value=" " aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4">
        <label>สาเหตุที่ออก</label>
        <h6>REASON FOR LEAVING</h6>
        <div class="input-group flex-nowrap">
          <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_4" value=" " aria-describedby="addon-wrapping">
        </div>
      </div>
          </div>`;

      todoItem.innerHTML = html;
      window.todoItems1.push(todoItem);
      todoList1.appendChild(todoItem);

      clickCount1++;
    }
  });
});

function deleteTodo1(index) {
  const todoList1 = document.getElementById('todo-list1');
  const todoItem = window.todoItems1[index];

  if (todoItem instanceof Node) {
    todoList1.removeChild(todoItem);
    window.todoItems1.splice(index, 1);
    window.clickCount1--;
  }
}
// ..............
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('addTrainingRecord');
  const todoList = document.getElementById('todo-Record');
  window.todoItems = [];
  window.clickCount = 0;

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    if (clickCount < 2) {
      const todoItem = document.createElement('div');

      const html = `
        <div class="row pt-4 px-4" id="Record-${clickCount}">
          <h6 class="col-10">TRAINING, OTHER</h6>
          <button class="col-1 btn-outline-medeze btn" onclick="deleteTodo(${clickCount})">Delete</button>
        </div>
        <div class="row p-3">
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>วุฒิการศึกษา </label>
            <h6>DEGREE RECEIVED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sda" value=" " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>สถาบันการศึกษา</label>
            <h6>INSTITUTE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad2" value=" " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>สาขาวิชา</label>
            <h6>SUBJECT STUDIED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad3" value=" " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>จบปีการศึกษา (ปี) </label>
            <h6>END OF EDUCATION (YEAR)</h6>
            <div class="input-group flex-nowrap">
            <input type="datetime-local" name="birthdaytime" class="form-control"
            id="end_EDUCATION "  onkeydown="preventEnter(event)">
            </div>
          </div>
        </div>
        `;

      todoItem.innerHTML = html;
      window.todoItems.push(todoItem);
      todoList.appendChild(todoItem);

      clickCount++;
    }
  });
});

function deleteTodo(index) {
  const todoItemsContainer = document.getElementById('todo-Record');
  const todoItem = todoItemsContainer.children[index];
  todoItemsContainer.removeChild(todoItem);
  clickCount = 0;
}

// ..........
document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-WhoWorks');
  window.todoItems = [];
  window.clickCount = 0;

  function addTrainingItem() {
    if (clickCount < 3) {
      const todoItem = document.createElement('div');
      todoItem.id = `XD-${clickCount}`;
      todoItem.className = 'myDIV';

      const html = `
          <div class="card-body">
            <div class="p-sm-4 row">
              <div class="col-12 mb-4">
                <label>โปรดระบุ</label>
                <span style="color: red;">*</span>
                <h6>PLEASE FILL</h6>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label>ชื่อ - นามสกุล</label>
                    <h6>FULLNAME</h6>
                    <div class="input-group flex-nowrap">
                      <input type="text" class="form-control" placeholder="ชื่อ - นามสกุล"
                        aria-label="Username" value=""
                        id="job-friend-name" aria-describedby="addon-wrapping"
                        onkeydown="preventEnter(event)">
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <label>ความสัมพันธ์</label>
                    <h6>RELATIONSHIP</h6>
                    <div class="input-group flex-nowrap">
                      <input type="text" class="form-control" placeholder="ความสัมพันธ์"
                        aria-label="Username" value=""
                        id="job-friend-relationship" aria-describedby="addon-wrapping"
                        onkeydown="preventEnter(event)">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      todoItem.innerHTML = html;
      window.todoItems.push(todoItem);
      todoList.appendChild(todoItem);

      clickCount++;
    }
  }

  window.addTrainingItem = addTrainingItem;
});

function handleKnowWorksChange() {
  const knowWorksSelect = document.getElementById('khow_works');
  const value = knowWorksSelect.value;

  if (value === '1') {
    addTrainingItem();
  } else {
    clearTrainingItems();
  }
}

function clearTrainingItems() {
  const todoList = document.getElementById('todo-WhoWorks');
  todoList.innerHTML = '';
  window.todoItems = [];
  window.clickCount = 0;
}
// ......................................เสริม........................................

function preventEnter(event) {
  if (event.keyCode === 13) {
    // 13คือรหัสคีบอด 
    event.preventDefault();
  }
}
function validateThaiInput(event) {
  const input = event.target;
  const thaiPattern = /^[\u0E00-\u0E7F\s]+$/; // รูปแบบของภาษาไทย

  if (!thaiPattern.test(input.value)) {
    input.value = input.value.replace(/[^\u0E00-\u0E7F\s]+/g, '');
  }
}

function validateEnglishInput(event) {
  const input = event.target;
  const englishPattern = /^[A-Za-z\s]+$/; // รูปแบบของภาษาอังกฤษ

  if (!englishPattern.test(input.value)) {
    input.value = input.value.replace(/[^A-Za-z\s]+/g, '');
  }
}

// ...........อายุ
function calculateAge(birthday) {
  var today = new Date(); //วันปัจจุบัน
  var birthDate = new Date(birthday); //
  var age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

document.getElementById("birthdaytime").addEventListener("change", function(event) {
  var birthdayInput = event.target;
  var age = calculateAge(birthdayInput.value);
  document.getElementById("age_me").value = age + " ปี";
});

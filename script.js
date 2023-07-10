
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
    "EMERGENCY_mobile",
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
    divContainer.style.display = " block";  
  } else {
    divContainer.style.display = "none";  
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
let clickCount3 = 0;

document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from1');
  const todoList1 = document.getElementById('todo-list');
  const todoItems1 = [];

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount3 < 3) {
      const todoItem3 = document.createElement('div');
      const todoItemId = `XD-${clickCount3 + 1}`;
      clickCount3++;
      todoItem3.id = todoItemId;
      const html = `
          <div class="row pt-4 px-4" id="XD-${todoItemId}">
            <h6 class="col-10">TRAINING, OTHER</h6>
            <button class="btn btn-outline-medeze col-1" onclick="deleteXD('${todoItemId}')">Delete</button>
          </div>
          <div class="row p-4">
            <div class="col-4">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD1${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-4">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD2${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-4">
              <label>ระยะเวลาการฝึกอบรม</label>
              <h6>DURATION OF COURSE</h6>
              <div class="input-group flex-nowrap">
              <input type="date" name="birthdaytime" class="form-control"
              id="XD3${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
          </div>`;

      todoItem3.innerHTML = html;
      todoItems1.push(todoItemId);
      todoList1.appendChild(todoItem3);
    }
  });
});

function deleteXD(todoItemId) {
  const todoItem3 = document.getElementById(todoItemId);
  const todoItemsContainer = todoItem3.parentNode;
  todoItemsContainer.removeChild(todoItem3);
  clickCount3--;
}



// 
let clickCount1 = 0;

document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from2');
  const todoList1 = document.getElementById('todo-list1');

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount1 < 3) {
      const todoItem = document.createElement('div');
      const todoItemId = `sad-${clickCount1 + 1}`;
      clickCount1++;
      todoItem.id = todoItemId;

      const html = `
          <div class="row pt-4 px-4" id="XD-${todoItemId}">
            <h6 class="col-10">TRAINING, OTHER</h6>
            <button class="btn btn-outline-medeze col-1" onclick="deleteTodo1('${todoItemId}')">Delete</button>
          </div>
          <div class="row p-4">
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>สถานที่ประกอบการ</label>
              <h6>COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_1${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>ตำแหน่ง</label>
              <h6>POSITION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>วันที่เริ่มงาน</label>
              <h6>START DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_F${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>วันที่สิ้นสุด</label>
              <h6>FINISH DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_L${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>เงินเดือน</label>
              <h6>SALARY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping oninput="numberOnly(this.id)"  minlength="0" maxlength="6" pattern="[0-9]{10}"  onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
              <label>สาเหตุที่ออก</label>
              <h6>REASON FOR LEAVING</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_4${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
          </div>`;

      todoItem.innerHTML = html;
      todoList1.appendChild(todoItem);
    }
  });
});

function deleteTodo1(todoItemId) {
  const todoItem = document.getElementById(todoItemId);
  const todoItemsContainer = todoItem.parentNode;
  todoItemsContainer.removeChild(todoItem);
  clickCount1--;
}

// ..............
let clickCount = 0;
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('Record_form1');
  const todoList = document.getElementById('todo-Record');

  let todoItems = [];
  let count_numid = 0;

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault(); 

    if (clickCount < 2) {
      const todoItem = document.createElement('div');
      count_numid++;
      clickCount++;
      // todoItem.setAttribute('id', `Record-${count_numid}`);
      todoItem.id = `Record-${count_numid}`;
      console.log(clickCount);
      const html = `
        <div class="row pt-4 px-4">
          <h6 class="col-10">TRAINING, OTHER</h6>
          <button class="col-1 btn-outline-medeze btn" onclick="deleteTodo(${count_numid})">Delete</button>
     
        <div class="row p-3">
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>วุฒิการศึกษา</label>
            <h6>DEGREE RECEIVED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sda-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>สถาบันการศึกษา</label>
            <h6>INSTITUTE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad2-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>สาขาวิชา</label>
            <h6>SUBJECT STUDIED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad3-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>จบปีการศึกษา (ปี)</label>
            <h6>END OF EDUCATION (YEAR)</h6>
            <div class="input-group flex-nowrap">
              <input type="date" name="birthdaytime" class="form-control" id="end_EDUCATION-${count_numid}" onkeydown="preventEnter(event)">
            </div>
          </div>
        </div>
        </div>
      `;
      todoItem.innerHTML = html;
      todoList.appendChild(todoItem);
    } 
    // low2(clickCount);
  });
});
function deleteTodo(index) {
  const todoItem = document.getElementById(`Record-${index}`);
  const todoItemsContainer = todoItem.parentNode;
  todoItemsContainer.removeChild(todoItem);
  clickCount--;
  console.log(clickCount);

}
// function low2(clickCount) {
//   console.log(clickCount);
//   if (clickCount<2) {
//     console.log('XD');
//     Record_form1.disabled = true;
//   } else{
//     console.log("asd");
//     Record_form1.disabled = false;

//   }
// }




// ..........
document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-WhoWorks');
  todoItems = [];
  clickCount = 0;

  function addTrainingItem() {
    if (clickCount < 2) {
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
      todoItems.push(todoItem);
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
  odoItems = [];
  clickCount = 0;
}
// // ......................................เสริม........................................

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
function numberOnly(elementId) {
  return true;
  // const inputElement = document.getElementById(elementId);
  // // inputElement.addEventListener('input', function(event) {
  //   let inputValue = event.target.value;
  //   const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
  //   console.log(event.target.value = sanitizedValue)
  // // });
  
  // // inputElement.addEventListener('keydown', function(event) {
  //   const keyCode = event.keyCode || event.which;
  //   if ((keyCode < 48 || keyCode > 57) 
  //   // && keyCode !== 8 
  //   // && keyCode !== 9 
  //   // && keyCode !== 37 
  //   // && keyCode !== 39 
  //   && keyCode !==96 
  //   && keyCode !== 97 
  //   && keyCode !==98  
  //   && keyCode !==99  
  //   && keyCode !==100
  //   && keyCode !==101&& keyCode !==102&& keyCode !==103&& keyCode !==104&& keyCode !==105) {
  //     event.preventDefault();
  //   }
  // });
}
function validateFileSize(event) {
  const fileInput = event.target;
  const files = fileInput.files;

  if (files.length > 0) {
    const maxSize = 2 * 1024 * 1024; // 2MB  https://stackoverflow.com/questions/5697605/limit-the-size-of-a-file-upload-html-input-element
    const fileSize = files[0].size;
    if (fileSize > maxSize) {
      alert('File size exceeds the maximum limit of 2MB.');
      fileInput.value = ''; 
    }
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
// ตัวเเปร
const form = document.getElementById("form");
const num =document.getElementById('EMERGENCY_mobile');
const num2 =document.getElementById('PHONE_spouse');

const num3 =document.getElementById('mobile_me');
const num4 =document.getElementById('POSITION_MOBILE');
const num5 =document.getElementById('POSITION_MOBILE2');
const num6 =document.getElementById('numcar');
const num7 =document.getElementById('numcar2');

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


const inputElements = [
  'salary_monny',
  'fullname_th',
  "start_job",
  "fullname_eng",
  "nick_name",
  "birthdaytime",
  "id_card_me",
  "height_me",
  "kg_me",
  "mobile_me",
  "email_me",
  "CHILDREN",
  "FATHER_name",
  "FATHER_occ",
  "FATHER_age",
  "MATHER_name",
  "MATHER_occ",
  "MATHER_age",
  "EMERGENCY_name",
  "EMERGENCY_mobile",
  "EMERGENCY_relationship",
  "PERSONAL_name",
  "RELATIONSHIP_personal",
  "POSITION_name",
  "POSITION_MOBILE",
  "PERSONAL_name2",
  "COMPANY_name1",
  "COMPANY_name2",
  "POSITION_MOBILE2",
  "RELATIONSHIP_personal2",
  "POSITION_name2",
  "formFile1",
  "formFile2",
  "formFile3",
  "formFile4",
  "formFile5",
];
const selectElements2 = [
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
  "COMPANY_Yes_no",
];
// ...........รัยค่าinput เเละ select textarea
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputs = Array.from(document.querySelectorAll("#form input"));
  const divs = Array.from(document.querySelectorAll("div"));
  const textareaC = document.getElementById("ADDRESS_me");

  // const textareaC2 = document.getElementById("CURRICULAR_ACTIVITIES");
  validateForm(selectElements2, inputElements)
  checkRequired(inputs, divs);
  checkSele(selectElements);
  handleElementValue(textareaC);
  checkEmail(inputElements[10]);
  nummm(num,num2,num3,num4,num5);
console.log(nummm);

});
//  ...


// เช็คtextarea
function handleElementValue(textareaC) {
  if (textareaC.value !== '') {
    textareaC.style.borderColor = "var(--succes-color)";
  }
  if (textareaC.value === '') {
    textareaC.style.borderColor = "var(--error-color)";
  }
}

// เช็ค ฟีว select
function checkSele(selectElements) {
  selectElements.forEach(function (elementId) {
    const element = document.getElementById(elementId);

    if (element.value === '1' || element.value === 'รู้จัก' ) {
      element.style.borderColor = "var(--succes-color)";
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

// ..........ปิด-เปิดกล่อง
document.getElementById("STATUS_Single").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;

  let spouseNameInput = document.getElementById("spouse_name");
  let spousePhoneInput = document.getElementById("PHONE_spouse");
  let APPLICATIONInput = document.getElementById("APPLICATION");
  let COMPANY_nameInput = document.getElementById("COMPANY_name");
  const  one1= document.getElementById("spouse_name_disabled");
  const two2 = document.getElementById("PHONE_spouse_disabled");
  const therr3 = document.getElementById("APPLICATION_disabled");
  const For4 = document.getElementById("COMPANY_name_disabled");

  if (maritalStatus === "สมรส") {
    spouseNameInput.removeAttribute('disabled');
    spousePhoneInput.removeAttribute('disabled');
    APPLICATIONInput.removeAttribute('disabled');
    COMPANY_nameInput.removeAttribute('disabled');

  } else {
    spouseNameInput.setAttribute('disabled', '');
    one1.className = 'form-control_gknn';
    spousePhoneInput.setAttribute('disabled', '');
    two2.className = 'form-control_gknn';
    APPLICATIONInput.setAttribute('disabled', '');
    therr3.className = 'form-control_gknn';
    COMPANY_nameInput.setAttribute('disabled', '');
    For4.className = 'form-control_gknn';
    spouseNameInput.value = '';
    spousePhoneInput.value = '';
    APPLICATIONInput.value = '';
    COMPANY_nameInput.value = '';
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
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.disabled || input.id === 'formFile6' || input.id === 'formFile7' || input.id === 'formFile8' || input.id === 'formFile9'
     || input.id === 'formFile10' || input.id === 'OTHER_languahes'|| input.id === 'facebook_me' || input.id ==='EMERGENCY_mobile'| input.id ==='email_me') {
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



// function addToLocalStorage(key, value) {
//   // ตรวจสอบว่า localStorage มีอยู่แล้วหรือไม่

//   if (localStorage) {
//     // อ่านค่าที่มีอยู่ใน localStorage
//     var existingData = localStorage.getItem(key);

//     if (existingData) {
//       // แปลงค่าใน localStorage จากสตริงเป็นอาเรย์
//       var dataArray = JSON.parse(existingData);


//       if (dataArray.length < 3) {
//         // ตรวจสอบว่าอาเรย์ยังไม่เต็ม ก่อนที่จะเพิ่มค่าเข้าไปในอาเรย์
//         dataArray.push(value);

//         // เก็บค่าที่อัปเดตลงใน localStorage
//         localStorage.setItem(key, JSON.stringify(dataArray));
//       } else {
//         console.log("ไม่สามารถเพิ่มค่าเข้า localStorage ได้ เพราะอาเรย์เต็มแล้ว");
//       }
//     } else {
//       // ถ้าไม่มีค่าอยู่แล้ว จะสร้างอาเรย์ใหม่และเพิ่มค่าเข้าไปในอาเรย์
//       var dataArray = [value];

//       // เก็บค่าใหม่ลงใน localStorage
//       localStorage.setItem(key, JSON.stringify(dataArray));
//     }
//   } else {
//     console.log("ไม่สนับสนุน localStorage ในเบราว์เซอร์นี้");
//   }
// }
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
            <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER-${clickCount3}</h6>
            <div class="col-12 d-flex justify-content-end mb-4">
            <button class="btn btn-outline-medeze col-auto" onclick="deleteXD('${todoItemId}')">Delete</button>
            </div>
          </div>
          <div class="row p-4 border-bottom">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD1${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD2${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
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
          <div class="row pt-4 px-4 " id="XD-${todoItemId}">
            <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER-${clickCount1}</h6>
            <div class="col-12 d-flex justify-content-end mb-4">
            <button class="btn btn-outline-medeze col-auto" onclick="deleteTodo1('${todoItemId}')">Delete</button>
            </div>
          </div>
          <div class="row p-4 border-bottom">
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>สถานที่ประกอบการ</label>
              <h6>COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_1${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>ตำแหน่ง</label>
              <h6>POSITION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4">
              <label>วันที่เริ่มงาน</label>
              <h6>START DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_F${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>วันที่สิ้นสุด</label>
              <h6>FINISH DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_L${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>เงินเดือน</label>
              <h6>SALARY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping" oninput="numberOnly(this.id)"  minlength="0" maxlength="6"  onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
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
        <div class="row pt-4 px-4 border-bottom">
          <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER-${clickCount}</h6>
          <div class="col-12 d-flex justify-content-end mb-4">
          <button class="col-auto btn-outline-medeze btn" onclick="deleteTodo(${count_numid})">Delete</button>
          </div>
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
  clickCount_Yes_No = 0; 

  function addTrainingItem() {
    if (clickCount_Yes_No < 3) {
      const todoItem = document.createElement('div');
      todoItem.id = `XD-${clickCount_Yes_No}`;
      todoItem.className = 'myDIV';

      const html = `
          <div class="card-body border-top">
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

      clickCount_Yes_No++;
    }
  }

  window.addTrainingItem = addTrainingItem;
});

function handleKnowWorksChange() {
  const knowWorksSelect = document.getElementById('khow_works');
  const value = knowWorksSelect.value;

  if (value === 'รู้จัก') {
    addTrainingItem();
  } else {
    clearTrainingItems();
  }
}

function clearTrainingItems() {
  const todoList = document.getElementById('todo-WhoWorks');
  todoList.innerHTML = '';
  todoItems = [];
  clickCount_Yes_No = 0;
}
// // ......................................เสริม........................................

// function preventEnter(event) {
//   if (event.keyCode === 13) {
//     // 13คือรหัสคีบอด 
//     event.preventDefault();
//   }
// }
function preventEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}


function NotNumber(event) {
  var input = event.target.value;
  var nonNumericInput = input.replace(/[0-9]/g, '');
  event.target.value = nonNumericInput;
}

function NOOOO(event) {
  var input = event.target.value;
  var nonNumericInput = input.replace(/[+@!~`%$&*"':;?/><?\\|=()#^,]/g, '');
  event.target.value = nonNumericInput;
}

function validateEnglishInput(event) {
  const input = event.target;
  const englishPattern = /^[A-Za-z\s]+$/; // ภาษาอังกฤษ

  if (!englishPattern.test(input.value)) {
    input.value = input.value.replace(/[^A-Za-z\s]+/g, '');
  }
}
function validateThaiInput(event) {
  const input = event.target;
  const thaiPattern = /^[\u0E00-\u0E7F\s]+$/; // ภาษาไทย

  if (!thaiPattern.test(input.value)) {
    input.value = input.value.replace(/[^\u0E00-\u0E7F\s]+/g, '');
  }
}
function numberOnly(elementId) {
  const inputElement = document.getElementById(elementId);
  // inputElement.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');   //พิมได้เเค่0-9
    event.target.value = sanitizedValue

    const keyCode = event.keyCode || event.which;   //บล็อคเเบบโค้ด keyb
    if ((keyCode < 48 || keyCode > 57) 
    && keyCode !== 8 
    // && keyCode !== 9 
    && keyCode !== 37 
    && keyCode !== 39 
    && keyCode < 96 || keyCode > 105 ){
      event.preventDefault();
    }
  // });
}
function validateFileSize(event) {    //  บล็อคไม่ให้ไฟล์เกิน
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

// function printOnlyThai(inputValue) {
//   var thaiRegex = /^[ก-๙\s]+$/;
//   if (typeof inputValue === 'string' && thaiRegex.test(inputValue)) {
//     console.log(inputValue);
//   } else {
//     console.log('Invalid input. Only Thai language is allowed.');
//   }
// }


function calculateAge(birthday) {
  var today = new Date(); //วันปัจจุบัน
  var birthDate = new Date(birthday); //
  var age = today.getFullYear() - birthDate.getFullYear(); // ...........อายุ
  return age;
}

document.getElementById("birthdaytime").addEventListener("change", function(event) {
  var birthdayInput = event.target;
  var age = calculateAge(birthdayInput.value);
  document.getElementById("age_me").value = age + " ปี";//ใส่ตัวเเปลที่ได้ลงในid  birthdaytime ในhtml
});


function validateForm(selectElements2, inputElements) {
  const isSelectValid = selectElements2.every(function (elementId) {
    const element = document.getElementById(elementId);
    if (element.value === '0') {
      // console.log(element);
      return false; // ไม่ส่งฟอร์ม
    }
    return true;
  });
  // console.log(isSelectValid);
  
  const isDivsValid = inputElements.every(function (div) {
    const input = document.getElementById(div);
    if (!input || !input.value || input.value.trim() === '') {
      // console.log(input);
      return false; // ไม่ส่งฟอร์ม
    }
    return true;
  });
  // console.log(isDivsValid);

  if (!isSelectValid || !isDivsValid) {
    alert("โปรดใส่คำตอบให้ครบ");
    return false; // ไม่ส่งฟอร์ม
  } else {
    alert("บันทึกสำเร็จ");
  }

  return true; // ส่งฟอร์มได้เมื่อทั้ง selectElements และ divs ถูกต้องทั้งหมด
}

function checkEmail(emailgknn) {
  const email = document.getElementById(emailgknn)
  const formControl = email.parentElement;
  console.log(email);
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com]{2,}$/;
  console.log(regex.test(email.value.trim()));
  if(!regex.test(email.value.trim())) {
    formControl.className = 'form-control_gknn error';
    // console.log("error: " + email.value);
  }else {
    formControl.className = "form-control_gknn success";
    // console.log("success: " + email.value);
  }
}
// เช็ค เบอร์
function nummm(num, num2 , num3, num4,num5) {
console.log(num2.disabled );

  const num_length = num.value.length
  const formControl = num.parentElement;
  const num_length2 = num2.value.length
  const formControl2 = num2.parentElement;
  const num_length3 = num3.value.length
  const formControl3 = num3.parentElement;
  const num_length4 = num4.value.length
  const formControl4 = num4.parentElement;
  const num_length5 = num5.value.length
  const formControl5 = num5.parentElement;
  const num_length6 = num6.value.length
  const formControl6 = num6.parentElement;
  const num_length7 = num7.value.length
  const formControl7 = num7.parentElement;
    if(num_length<10){
      formControl.className = 'form-control_gknn error';
    }else{
      formControl.className = 'form-control_gknn success';
    }
  if(num2.disabled){
    formControl2.className = 'form-control_gknn';
  }else if(num_length2<10){
      formControl2.className = 'form-control_gknn error';
    }else{
      formControl2.className = 'form-control_gknn success';
    }
    if(num_length3<10){
      formControl3.className = 'form-control_gknn error';
    }else{
      formControl3.className = 'form-control_gknn success';
    }
    if(num_length4<10){
      formControl4.className = 'form-control_gknn error';
    }else{
      formControl4.className = 'form-control_gknn success';
    }
    if(num_length5<10){
      formControl5.className = 'form-control_gknn error';
    }else{
      formControl5.className = 'form-control_gknn success';
    }
    
    if(num6.disabled){
      formControl6.className = 'form-control_gknn';
    }else if(num_length6<10){
        formControl6.className = 'form-control_gknn error';
      }else{
        formControl6.className = 'form-control_gknn success';
      }
      if(num7.disabled){
        formControl7.className = 'form-control_gknn';
      }else if(num_length7<10){
          formControl7.className = 'form-control_gknn error';
        }else{
          formControl7.className = 'form-control_gknn success';
        }
  }
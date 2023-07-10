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
        "SPEAKING_OTHER",
        "READING_OTHER",
        "WRITING_other",
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
    checkRequired(inputs , divs);
    checkSele(selectElements);
});

function checkSele(selectElements) {
    selectElements.forEach(function (elementId) {
        const element = document.getElementById(elementId);
        
        if ( element.value === '1' ) {
            element.style.borderColor = "#2ecc71";
        }
        if ( element.value === '0' ) {
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



function checkRequired(inputArr , divs) {
    
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
  
  function checkRequired(inputArr , divs) {
    
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
            clearError(div.id);
          
            //showNone(div);
          }
      }
      )
  }
  
  function clearError(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('success');
    element.classList.remove('error');
  }
  
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control_gknn error';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control_gknn success';
}


const toggleInputDisabled = (elementId, disabled) => {
    const input = document.getElementById(elementId);
    input.disabled = disabled;
};

// ปิด-เปิดกล่องสำหรับ STATUS_Single
document.getElementById("STATUS_Single").addEventListener("change", function (event) {
    const maritalStatus = event.target.value;
    toggleInputDisabled("spouse_name", maritalStatus !== "สมรส");
    toggleInputDisabled("PHONE_spouse", maritalStatus !== "สมรส");
    toggleInputDisabled("APPLICATION", maritalStatus !== "สมรส");
    toggleInputDisabled("COMPANY_name", maritalStatus !== "สมรส");
});

// ปิด-เปิดกล่องสำหรับ HAD
document.getElementById("HAD").addEventListener("change", function (event) {
    const maritalStatus = event.target.value;
    toggleInputDisabled("DISEASE1", maritalStatus === "2");
});

// ปิด-เปิดกล่องสำหรับ hospital_day
document.getElementById("hospital_day").addEventListener("change", function (event) {
    const maritalStatus = event.target.value;
    toggleInputDisabled("DISEASE2", maritalStatus === "2");
});

// ปิด-เปิดกล่องสำหรับ HAD_UNDERGONE
document.getElementById("HAD_UNDERGONE").addEventListener("change", function (event) {
    const maritalStatus = event.target.value;
    toggleInputDisabled("DISEASE3", maritalStatus === "2");
});

// เปิด-เปิดการเช็คบล็อกสำหรับ id_car
document.getElementById("id_car").addEventListener("change", function (event) {
    const checkbox = event.target;
    toggleInputDisabled("numcar", !checkbox.checked);
});

// เปิด-เปิดการเช็คบล็อกสำหรับ id_car2
document.addEventListener('DOMContentLoaded', function() {
  const btn_from = document.getElementById('btn_from1');
  const todoList = document.getElementById('todo-list');
  window.todoItems = []; 
  window.clickCount = 0; 

  btn_from.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (clickCount < 3) {
      const todoItem = document.createElement('div');

      const html = `
        <div class="row pt-4 px-4" id="XD-${clickCount}">
          <h6 class="col-10">TRAINING, OTHER</h6>
          <button class="col-1" onclick="deleteTodo1(${clickCount})">Delete</button>
        </div>
        <div class="row p-4">
          <div class="col-4">
            <label>สถาบัน/บริษัท</label>
            <h6>INSTITUTE/COMPANY</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sda" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-4">
            <label>รายละเอียด</label>
            <h6>DESCRIPTION</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad2" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-4">
            <label>ระยะเวลาการฝึกอบรม</label>
            <h6>DURATION OF COURSE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad3" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
        </div>`;

      todoItem.innerHTML = html;
      window.todoItems.push(todoItem);
      todoList.appendChild(todoItem);

      clickCount++; 
    }
  });
});
function deleteTodo1(index) {
  const todoList = document.getElementById('todo-list');
  const todoItem = window.todoItems[index];

  todoList.removeChild(todoItem); 
  window.todoItems.splice(index, 1); 
  window.clickCount--; 
}

document.addEventListener('DOMContentLoaded', function() {
  const btn_from1 = document.getElementById('btn_from2');
  const todoList = document.getElementById('todo-list1');
  window.todoItems = []; 
  window.clickCount = 0; 

  btn_from1.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    if (clickCount < 3) {
      const todoItem = document.createElement('div');

      const html = `
        <div class="row pt-4 px-4" id="XD-${clickCount}">
          <h6 class="col-10">TRAINING, OTHER</h6>
          <button class="col-1" onclick="deleteTodo(${clickCount})">Delete</button>
        </div>
        <div class="row p-4">
          <div class="col-4">
            <label>สถาบัน/บริษัท</label>
            <h6>INSTITUTE/COMPANY</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sda" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-4">
            <label>รายละเอียด</label>
            <h6>DESCRIPTION</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad2" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-4">
            <label>ระยะเวลาการฝึกอบรม</label>
            <h6>DURATION OF COURSE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad3" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
            </div>
          </div>
        </div>`;

      todoItem.innerHTML = html;
      window.todoItems.push(todoItem);
      todoList.appendChild(todoItem);

      clickCount++; 
    }
  });
});

function deleteTodo(index) {
  const todoItemsContainer = document.getElementById('todo-list1');
  const todoItem = todoItemsContainer.children[index];
  todoItemsContainer.removeChild(todoItem); 
  clickCount=0; 
}



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
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sda-${count_numid}" value="" aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>สถาบันการศึกษา</label>
            <h6>INSTITUTE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad2-${count_numid}" value="" aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>สาขาวิชา</label>
            <h6>SUBJECT STUDIED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad3-${count_numid}" value="" aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>จบปีการศึกษา (ปี)</label>
            <h6>END OF EDUCATION (YEAR)</h6>
            <div class="input-group flex-nowrap">
              <input type="datetime-local" name="birthdaytime" class="form-control" id="end_EDUCATION-${count_numid}" onkeydown="preventEnter(event)">
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




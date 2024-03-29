// console.log("동작");
const tbody = document.querySelector("tbody");
const btnGroup = document.querySelector("#btn-group");
// 방명록 등록
// POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value === 0) {
    alert("이름, 방명록 모두 작성하세요");
    return;
  }
  if (form.name.value.length > 7) {
    alert("이름은 6글자 이하 ");
    return;
  }
  axios({
    method: "post",
    url: "/visitors",
    data: {
      id: form.id.value,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((response) => {
    console.log(response.data);
    //{id:?,name:?,comment:?,}
    const { data } = response;
    const html = `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td>
            <button type="button" onclick="editVisitor(${data.id})">수정</button>
        </td>
        <td>
            <button type="button" onclick="deleteVisitor(this,${data.id})">삭제</button>
        </td>
    </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", html);
    // js기본 문법 마지막에 요소 추가
  });
}
// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
  axios({
    method: "delete",
    url: "/visitors",
    data: {
      id: id,
    },
  }).then((res) => {
    console.log(res.data);
    //실제 요소 지우기
    //remove
    // btn.parentElement.parentElement.remove();

    //closet()
    //특정 선택자를 가진 가장 가까운 조상 요소를 찾음
    btn.closest(`#tr_${id}`).remove();
  });
}
// GET /visitor/:id
function editVisitor(id) {
  console.log(id);
  axios({
    method: "get",
    url: `/visitors/${id}`,
  }).then((res) => {
    const { data } = res;
    console.log(data);
    const form = document.forms["visitor-form"];
    form.name.value = data.name;
    form.comment.value = data.comment;
  });
  const html = `
  <button type="button" onclick="editDo(${id})">수정</button>
  <button type="button" onclick="editCancel()">취소</button>
  `;
  btnGroup.innerHTML = html;
}

// 방명록 수정
// PATCH /visitor
// 수정을 위한 입력창으로 변경
// 수정 버튼을 누르면 기존 데이터가 인풋의 벨류로 들어가게끔
// => 한개의 데이터 조회가 필요하다
function editDo(id) {
  const form = document.forms["visitor-form"];
  axios({
    method: "patch",
    url: "/visitors",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    // 프론트에서 데이터 변경 비동기 처리
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    console.log(res.data);
    // alert(res.data);
  });
}
// 취소 버튼을 누르거나, 수정이 끝난 후 실행
function editCancel() {
  const form = document.forms["visitor-form"];
  form.name.value = "";
  form.comment.value = "";

  btnGroup.innerHTML = `
  <button type="button" onclick="createVisitor()">방명록 등록</button>
  `;
}

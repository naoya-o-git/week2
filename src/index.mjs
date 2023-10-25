import "./styles.css";

const onClickAdd = () =>{
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value="";
  createIncompleteList(inputText);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // p生成
  const p = document.createElement("p");
  p.innerText = text;
  // button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText="完了"
  completeButton.addEventListener("click", () => {
    // 親タグをリストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 削除したものをリストに追加
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.textContent = null;
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成
    const p = document.createElement("p");
    p.innerText = text;
    // button(戻す)
    const backButton = document.createElement("button");
    backButton.innerText="戻す"
    backButton.addEventListener("click", () => {
      // リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    // 子要素設定
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);
    // リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText="削除"
  deleteButton.addEventListener("click", () => {
    // 親タグをリストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
  // 子要素設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}
// create Post 

let createPostModal = document.getElementById("create-post");
let createPostName = document.getElementById("create-name");
let createPostTitle = document.getElementById("create-title");
let createPostAvatar = document.getElementById("create-avatar");
let createPostURL = document.getElementById("create-postURL");
let createPostBody = document.getElementById("create-body");
let createPostbtn = document.querySelector(".create-butn");

// Edit post

let editPostModal = document.getElementById("ubdate-post");
let editPostName = document.getElementById("edit-name");
let editPostTitle = document.getElementById("edit-title");
let editPostAvatar = document.getElementById("edit-avatar");
let editPostURL = document.getElementById("edit-postURL");
let editPostbody = document.getElementById("edit-body");
let editPostbtn = document.querySelector(".edit-butn");

document.querySelector("#post-cont").addEventListener("click", () => {
    createPostModal.style.display = "block";
});

document.querySelectorAll(".close-btn").forEach(closeContent => {
    closeContent.addEventListener("click", () => {
        createPostModal.style.display = "none";
        editPostModal.style.display = "none";
    });
});
createPostbtn.addEventListener("click", () => {
    if (createPostAvatar.value === "" || createPostName.value === "" || createPostTitle.value === "" || createPostBody.value === "" || createPostURL === "") {
        alert("Fill The All Input!")
    } else {

        let cont = document.querySelector(".js-post")
        let postRow =
            `
     <div class="post">
      <div class="post-header">
        <img src="${createPostAvatar.value}" alt="Avatar" onerror="this.src='assets/profile.jpg';">
       <div>
         <h6>${createPostName.value}</h6>
         <small>${new Date().toLocaleString()}</small>
      </div>
       </div>
        <p class="post_title">${createPostTitle.value}</p>
        <div class="post-image">
        <img src="${createPostURL.value}" alt="Uploaded Image" onerror="this.src='assets/profile.jpg';">
        </div>
        <p class="post-body">${createPostBody.value}</p>
        <div class="actions">
            <button class="edit-btn" onclick="editPost(this)">Edit</button>
            <button class="delete-btn" onclick="deletePost(this)">Delete</button>
        </div>
        </div>
        `
        createPostName.value = "";
        createPostTitle.value = "";
        createPostBody.value = "";
        createPostURL.value = "";
        createPostAvatar.value = "";

        createPostModal.style.display = "none";
        cont.innerHTML += postRow
    }
})

function editPost(button) {
    // let postBtn = button.querySelector(".post");
    let postBtn = button.closest(".post")
    let postName = postBtn.querySelector("h6").innerText;
    let postTitle = postBtn.querySelector(".post_title").innerText;
    let postBody = postBtn.querySelector(".post-body").innerText;
    let postAvatar = postBtn.querySelector(".post-header img").src;
    let postImage = postBtn.querySelector(".post-image img").src;

    editPostName.value = postName;
    editPostTitle.value = postTitle;
    editPostbody.value = postBody;
    editPostAvatar.value = postAvatar;
    editPostURL.value = postImage;
    // console.log(editPostName.value);

    editPostModal.style.display = "block";

    editPostbtn.addEventListener("click", () => {
        if (editPostName === "" || editPostTitle === "" || editPostbody === "" || editPostAvatar === "" || editPostURL === ""){
            alert("Fill The All Input")
        } else {
            postBtn.querySelector("h6").innerText = editPostName.value;
            postBtn.querySelector(".post_title").innerText = editPostTitle.value;
            postBtn.querySelector(".post-body").innerText = editPostbody.value;
            postBtn.querySelector(".post-header img").src = editPostAvatar.value;
            postBtn.querySelector(".post-image img").src = editPostURL.value;
        }
        editPostModal.style.display = "none";
    })
}

function deletePost(button) {
    let post = button.closest(".post");
    post.remove();
}

// async function postFun() {
//     const URL = await fetch("https://66f91c912a683ce97310eea0.mockapi.io/api/vi/posts");
//     const URLData = await URL.json()
//     console.log(URLData);

//     return URLData
// }

// postFun().then((URLData) =>{
// let container = document.getElementById("cont")
//     URLData.forEach(ele =>{
//         let rowss = ` <div class="post">
//     <div class="post">
//         <div class="post-header">
//             <img src="${ele.avatar}" width="100px" alt="Avatar">
//             <div>
//                 <h3>${ele.name}</h3>
//                 <small>${new Date().toLocaleString()}</small>
//             </div>
//         </div>
//         <p>${ele.body}</p>
//         <div class="actions">
//             <button class="edit-btn" onclick="editPost(1)">Edit</button>
//             <button class="delete-btn" onclick="deletePost(1)">Delete</button>
//         </div>
//     </div>
// </div> `
// container.innerHTML += rowss
//     })
// })



//  <h2>posts</h2>
{/* <div class="post">
    <div class="post">
        <div class="post-header">
            <img src="nav-logo.png" alt="Avatar">
            <div>
                <h3>Muhammad Saqib (Developer)</h3>
                <small>9/29/2024, 10:30 AM</small>
            </div>
        </div>
        <p>This is the post body content.</p>
        <div class="actions">
            <button class="edit-btn" onclick="editPost(1)">Edit</button>
            <button class="delete-btn" onclick="deletePost(1)">Delete</button>
        </div>
    </div>
</div>  */}
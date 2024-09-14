// var urlForId = "https://jsonplaceholder.typicode.com/users";
// var urlForPost = "https://jsonplaceholder.typicode.com/posts";
// let allcont = document.getElementById("main");
//     let cont2 = document.getElementById("main2")

// async function fetchingUser() {
//     let fetchingApi = await fetch(urlForId)
//     let fetchingPosts = await fetch(urlForPost);
//     let post = await fetchingPosts.json();
//     console.log(post);


//     let user = await fetchingApi.json();
//     console.log(user);
//     for(let i = 0; i < user.length; i++){
//         // if(userId==)
//         const userIds = document.createElement("h2")
//         userIds.innerText = `User ID: ${user[i].id}`

//         for (let j = 0; j < post.length; j++){
//             const postIds = document.createElement("h2")
//             postIds.innerText = `User : ${post[j].title}`

//             cont2.appendChild(postIds)
//         }
//         allcont.appendChild(userIds)
//     }

//     // user.forEach(idGet => {
//     //     const id1 = document.createElement("h2")
//     //     id1.innerText= `User ID: ${idGet.id}`

//     //     const id2 = document.createElement("h2")
//     //     id2.innerText= `User Name: ${idGet.name}`
//     //     allcont.appendChild(id1)
//     //     allcont.appendChild(id2)
//     // });
//     //return user;

// }

// fetchingUser()
// // let allinone = fetchingUser()
// // allinone.then((msg) => {
// //     console.log(msg);

// //     let allcont = document.getElementById("main");
// //     msg.forEach(allId => {

// //         const userid = document.createElement("h2");
// //         userid.textContent = `Ùsers ID: ${allId.id}`

// //         const userName = document.createElement("h3")
// //         userName.textContent = `User Name! ${allId.name}`

// //         allcont.appendChild(userid);
// //         allcont.appendChild(userName)

// //     });

//     // msg.forEach(postId => {
//     //     const postid = document.createElement("h3");
//     //     postid.textContent = `Post Id! ${postId.title}`

//     //     allcont.appendChild(postid)
//     // })

// // }).catch((error) => {
// //     console.log(error);

// // });




// // async function fetchingPost() {
// //     let fetchingPosts = await fetch(urlForPost);
// //     // console.log(fet);
// //     let post = await fetchingPosts.json();
// //     return post;
// // }
// // let abc = fetchingPost()

// // abc.then((msg) => {
// //     console.log(msg);
// //     let cont2 = document.getElementById("main2")
// //     msg.forEach(allPst => {
// //         const post1 = document.createElement("h4")
// //         post1.textContent = `Posts ${allPst.userId}`

// //         const post2 = document.createElement("h4")
// //         post2.textContent = `Posts ${allPst.title}`
// //         cont2.appendChild(post1)
// //         cont2.appendChild(post2)
// //     });
// // });



let container = document.getElementById("cont")
async function fetchData() {
    let userUrl = await fetch("https://jsonplaceholder.typicode.com/users");
    let postUrl = await fetch("https://jsonplaceholder.typicode.com/posts");

    let users = await userUrl.json()
    let posts = await postUrl.json()
    console.log(posts);

    return { users, posts };

}

fetchData().then(({ users, posts }) => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        const userCard = document.createElement("div");
        userCard.classList.add("post-cards");

        const userId = document.createElement("h2")
        userId.innerText = `User Id: ${user.id}`
        userCard.appendChild(userId)

        const userName = document.createElement("h2")
        userName.innerText = `User Name: ${user.name}`
        userCard.appendChild(userName)

        for (let j = 0; j < posts.length; j++) {
            let post = posts[j]

            if (post.userId === user.id) {
                const postId = document.createElement("h4");
                postId.innerText = `Post: ${post.id}`
                userCard.appendChild(postId)

                const postTitle = document.createElement("h4");
                postTitle.innerText = `Title: ${post.title}`
                userCard.appendChild(postTitle)

                const postBody = document.createElement("h4");
                postBody.innerText = `Body: ${post.body}`
                userCard.appendChild(postBody)

            };

            container.appendChild(userCard)

        };
    };
}).catch((error) => {
    alert("Fetching Error!", error);

});
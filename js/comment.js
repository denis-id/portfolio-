document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentsList.innerHTML = "";
        comments.forEach((comment, index) => renderComment(comment, index));
    }

    //  Phone: ${comment.phone}
    function renderComment(comment, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>Comment as:</h2>
            <strong>${comment.name} (${comment.age})</strong> 
            <br> 
            <i class="fa-regular fa-envelope"></i>: ${comment.email} 
            <br>
            <small>Posted on: ${comment.time}</small>
            <br>
            <hr>
            <br>
            Your Comments: 
            <br>
            <strong style="color: #030303;">${comment.text}</strong>
            <br>
            <button onclick="likeComment(${index})" style="color: #006eff;"><i class="fa-regular fa-thumbs-up"></i> Like ${comment.likes || 0}</button> |
            <button onclick="deleteComment(${index})" style="color: red;"><i class="fa-solid fa-trash"></i> Delete</button>
            <br>
            <button onclick="editComment(${index})"><i class="fa-solid fa-pen-to-square"></i> Edit</button> |
            <button onclick="replyToComment(${index})" style="color: #000000;"><i class="fa-solid fa-comment-dots"></i> Reply</button>
            <ul id="replies-${index}"></ul>
            <hr>
        `;
        commentsList.appendChild(li);
        loadReplies(index, comment.replies || []);
    }


    function saveComment(event) {
        event.preventDefault();

        const email = document.getElementById("emailInput").value;
        const name = document.getElementById("nameInput").value;
        const age = document.getElementById("ageInput").value;
        // const phone = document.getElementById("phoneInput").value;
        const text = document.getElementById("commentInput").value;
        const time = new Date().toLocaleString();
// phone
        const newComment = { email, name, age, text, time, likes: 0, replies: [] };
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));

        renderComment(newComment, comments.length - 1);
        commentForm.reset();
        loadComments();
    }

    window.deleteComment = function (index) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(comments));
        loadComments();
    };

    window.editComment = function (index) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const comment = comments[index];
        
        document.getElementById("emailInput").value = comment.email;
        document.getElementById("nameInput").value = comment.name;
        document.getElementById("ageInput").value = comment.age;
        // document.getElementById("phoneInput").value = comment.phone;
        document.getElementById("commentInput").value = comment.text;
        deleteComment(index);

        comments.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(comments));
        loadComments();
    };

    window.likeComment = function (index) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments[index].likes = (comments[index].likes || 0) + 1;
        localStorage.setItem("comments", JSON.stringify(comments));
        loadComments();
    };

    window.replyToComment = function (index) {
        const replyText = prompt("Enter your reply:");
        if (replyText) {
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments[index].replies = comments[index].replies || [];
            comments[index].replies.push(replyText);
            localStorage.setItem("comments", JSON.stringify(comments));
            loadComments();
        }
    };

    function loadReplies(index, replies) {
        const replyList = document.getElementById(`replies-${index}`);
        replyList.innerHTML = "";
        replies.forEach(reply => {
            const li = document.createElement("li");
            li.textContent = reply;
            replyList.appendChild(li);
        });
    }

    window.addEventListener("load", loadComments);
    commentForm.addEventListener("submit", saveComment);

    // Dynamic Copyright Notice
    const footer = document.createElement("footer");
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "10px";
    footer.style.marginTop = "20px";
    footer.style.fontSize = "18px";
    footer.innerHTML = `&copy; ${new Date().getFullYear()} Denis Arya Buana - Portfolio | All Rights Reserved.`;
    document.body.appendChild(footer);
});


// function addComment(replyToIndex = null) {
//     let commentInput = document.getElementById("commentInput");
//     let commentText = commentInput.value.trim();
    
//     if (commentText === "") return; 

//     let comments = JSON.parse(localStorage.getItem("comments")) || [];

//     let comment = {
//         name: "Gideon Alex",
//         text: commentText,
//         time: new Date().toLocaleString(),
//         likes: 0,
//         replies: []
//     };

//     if (replyToIndex !== null) {
//         comments[replyToIndex].replies.push(comment);
//     } else {
//         comments.push(comment);
//     }

//     localStorage.setItem("comments", JSON.stringify(comments));

//     display_comments();
//     commentInput.value = ""; 
// }

// function editComment(index, replyIndex = null) {
//     let comments = JSON.parse(localStorage.getItem("comments")) || [];
//     let newText = prompt("Edit your comment:", replyIndex !== null ? comments[index].replies[replyIndex].text : comments[index].text);

//     if (newText) {
//         if (replyIndex !== null) {
//             comments[index].replies[replyIndex].text = newText;
//         } else {
//             comments[index].text = newText;
//         }

//         localStorage.setItem("comments", JSON.stringify(comments));
//         display_comments();
//     }
// }

// function deleteComment(index, replyIndex = null) {
//     let comments = JSON.parse(localStorage.getItem("comments")) || [];

//     if (replyIndex !== null) {
//         comments[index].replies.splice(replyIndex, 1);
//     } else {
//         comments.splice(index, 1);
//     }

//     localStorage.setItem("comments", JSON.stringify(comments));
//     display_comments();
// }

// function likeComment(index, replyIndex = null) {
//     let comments = JSON.parse(localStorage.getItem("comments")) || [];

//     if (replyIndex !== null) {
//         comments[index].replies[replyIndex].likes += 1;
//     } else {
//         comments[index].likes += 1;
//     }

//     localStorage.setItem("comments", JSON.stringify(comments));
//     display_comments();
// }

// function display_comments() {
//     let commentsList = document.getElementById("commentsList");
//     commentsList.innerHTML = "";

//     let comments = JSON.parse(localStorage.getItem("comments")) || [];
    
//     comments.forEach((comment, index) => {
//         let commentElement = document.createElement("div");
//         commentElement.classList.add("comment");
//         commentElement.innerHTML = `
//             <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="User Avatar" class="avatar">
//             <div class="comment-content">
//                 <strong>${comment.name}</strong>
//                 <p>${comment.text}</p>
//                 <div class="comment-meta">${comment.time} | ❤️ ${comment.likes}</div>
//                 <div class="comment-actions">
//                     <button onclick="likeComment(${index})" class="like-btn">Like</button>
//                     <button onclick="editComment(${index})">Edit</button>
//                     <button onclick="deleteComment(${index})">Delete</button>
//                     <button onclick="replyToComment(${index})">Reply</button>
//                 </div>
//                 <div id="replies-${index}"></div>
//             </div>
//         `;

//         commentsList.appendChild(commentElement);

//         let repliesContainer = document.getElementById(`replies-${index}`);
//         comment.replies.forEach((reply, replyIndex) => {
//             let replyElement = document.createElement("div");
//             replyElement.classList.add("comment");
//             replyElement.innerHTML = `
//                 <img src="profile-placeholder.jpg" alt="User Avatar" class="avatar">
//                 <div class="comment-content">
//                     <strong>${reply.name}</strong>
//                     <p>${reply.text}</p>
//                     <div class="comment-meta">${reply.time} | ❤️ ${reply.likes}</div>
//                     <div class="comment-actions">
//                         <button onclick="likeComment(${index}, ${replyIndex})">Like</button>
//                         <button onclick="editComment(${index}, ${replyIndex})">Edit</button>
//                         <button onclick="deleteComment(${index}, ${replyIndex})">Delete</button>
//                     </div>
//                 </div>
//             `;
//             repliesContainer.appendChild(replyElement);
//         });
//     });
// }

// function replyToComment(index) {
//     let commentInput = document.getElementById("commentInput");
//     commentInput.value = `@Replying to comment ${index + 1} `;
//     addComment(index);
// }

// window.addEventListener('load', display_comments);
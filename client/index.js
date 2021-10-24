//Get user form
const getUserForm = document.getElementById("getuser-form");
getUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userId = new FormData(e.target).get("user-id");
    const user = await getUser(userId);
    if (user && user.id && user.username && user.score) {
        const userElement = document.createElement("div");
        userElement.style.display = "flex";
        userElement.style.flexDirection = "column";
        userElement.style.marginBottom = "1rem";
        userElement.innerHTML = `
        <span>ID: ${user.id}</span>
        <span>Username: ${user.username}</span>
        <span>Score: ${user.score}</span>
        `;
        const gotUserEl = document.getElementById("gotten-user");
        console.log(gotUserEl.children[1]);
        if (gotUserEl.children.length > 1) {
            gotUserEl.removeChild(gotUserEl.children[1]);
        }
        gotUserEl.appendChild(userElement);
        gotUserEl.style.display = "flex";
        gotUserEl.style.flexDirection = "column";
    } else {
        const userElement = document.createElement("div");
        userElement.style.display = "flex";
        userElement.style.flexDirection = "column";
        userElement.style.marginBottom = "1rem";
        userElement.innerHTML = `
        <span>Failed to get user</span>
        `;
        const gotUserEl = document.getElementById("gotten-user");
        console.log(gotUserEl.children[1]);
        if (gotUserEl.children.length > 1) {
            gotUserEl.removeChild(gotUserEl.children[1]);
        }
        gotUserEl.appendChild(userElement);
        gotUserEl.style.display = "flex";
        gotUserEl.style.flexDirection = "column";
    }
});
//create user form
const create = document.getElementById("create-user-form");
create.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("user-name");
    const userscore = formData.get("user-score");
    createUser({
        username: username,
        score: userscore,
    });
});
//update user form
const updateForm = document.getElementById("update-user-form");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("user-name");
    const userscore = formData.get("user-score");
    updateUser({
        username: username,
        score: userscore,
    });
});
//delete user form
const deleteForm = document.getElementById("delete-user-form");
deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("user-name");
    deleteUser(username);
});

//top users form
const usersForm = document.getElementById("get-users-form");
usersForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const users = await getUsers();
    if (users) {
        const table = document.getElementById("top-users-table");
        const tableBody = document.getElementById("top-users-table-body");
        while (tableBody.lastChild) {
            tableBody.removeChild(tableBody.lastChild);
        }
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const entry = document.createElement("tr");
            entry.innerHTML = `
                <td>${i + 1}</td>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.score}</td>
            `;
            tableBody.append(entry);
        }
        table.style.display = "table";
    }
});

//
//
// API Handler
//
//

const baseUrl = "http://localhost:1338";
const userUrl = baseUrl + "/user";
const commonHeader = {
    mode: "cors",
    headers: {
        "content-type": "application/json",
    },
};
async function getUser(username = -1) {
    const response = await fetch(userUrl + `?username=${username}`, {
        ...commonHeader,
    });
    if (response.ok) {
        const json = await response.json();
        return json;
    }
    return null;
}

async function getUsers() {
    const response = await fetch(userUrl + `s`, {
        ...commonHeader,
        method: "GET",
    });
    if (response.ok) {
        const json = await response.json();
        return json;
    }
    return null;
}

async function createUser(data = {}) {
    const response = await fetch(userUrl, {
        ...commonHeader,
        method: "POST",
        body: JSON.stringify(data),
    });
    console.log(commonHeader);
    console.log(data);
    return response.ok;
}

async function updateUser(data = {}) {
    const response = await fetch(userUrl, {
        ...commonHeader,
        method: "PUT",
        body: JSON.stringify(data),
    });
    return response.ok;
}

async function deleteUser(username = -1) {
    const response = await fetch(userUrl + `?username=${username}`, {
        ...commonHeader,
        method: "DELETE",
    });
    return response.ok;
}

//Get user form
// const getByIdButton = document.getElementById("getuser-button");
// getByIdButton.addEventListener("click", (e) => {
//   console.log(e.currentTarget);
//   GET();
// });
const getUserForm = document.getElementById("getuser-form");
getUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userId = new FormData(e.target).get("user-id");
    const user = await getUser(userId);
    if (user) {
        document.getElementById("gotten-user").innerHTML = `
        <span>${user.id}</span>
        <span>${user.name}</span>
        <span>${user.score}</span>
        `;
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
        name: username,
        score: userscore,
    });
});
//update user form
//delete user form

// API Handler

const baseUrl = "http://localhost:1338";
const commonHeader = {
    mode: "no-cors",
};
async function getUser(id = -1) {
    const response = await fetch(baseUrl + `?id=${id}`, {
        ...commonHeader,
    });
    const json = await response.json();
    return json;
}

async function getUsers() {
    const response = await fetch(baseUrl + `s`, {
        ...commonHeader,
    });
    const json = await response.json();
    return json;
}

async function createUser(data = {}) {
    const response = await fetch(baseUrl + url, {
        ...commonHeader,
        method: "POST",
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

async function updateUser(id = -1, data = {}) {
    const response = await fetch(baseUrl + `?id=${id}`, {
        ...commonHeader,
        method: "PUT",
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

async function deleteUser(id = -1) {
    const response = await fetch(baseUrl + `?id=${id}`, {
        ...commonHeader,
        method: "DELETE",
    });
    const json = await response.json();
    return json;
}

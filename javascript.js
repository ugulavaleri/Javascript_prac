const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
];

const list = document.getElementById("ul");
const container = document.getElementById("container");
container.setAttribute("class", "container");
list.setAttribute("class", "list");
for (let index = 0; index < users.length; index++) {
    const element = users[index];
    const createLi = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = element.first_name;
    link.setAttribute("href", element.avatar);
    link.classList.add("link");
    list.appendChild(createLi);
    createLi.appendChild(link);
    const image = document.createElement("img");
    const email = document.createElement("a");
    const name = document.createElement("p");
    const surname = document.createElement("p");
    const div = document.createElement("div");
    link.addEventListener("mouseover", () => {
        image.setAttribute("src", element.avatar);
        email.textContent = element.email;
        name.textContent = element.first_name;
        surname.textContent = element.last_name;
        createLi.appendChild(image);
        createLi.appendChild(email);
        createLi.appendChild(name);
        createLi.appendChild(surname);
    });
    link.addEventListener("mouseout", () => {
        image.remove();
        email.remove();
        name.remove();
        surname.remove();
    });
}

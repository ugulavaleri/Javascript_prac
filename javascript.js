const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        age: 28,
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        age: 33,
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        age: 40,
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        age: 18,
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        age: 65,
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        age: 32,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
];
// homework

const userList = document.getElementById("user-list");
for (let index = 0; index < users.length; index++) {
    const element = users[index];
    const Name = (document.createTextNode = element.first_name);
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    userList.appendChild(item);

    const img = document.createElement("img");
    img.setAttribute("src", element.avatar);
    img.setAttribute("class", "avatar");
    item.appendChild(img);
    const name = document.createElement("p");
    name.setAttribute("class", "name");
    name.textContent = Name;
    item.appendChild(name);

    // 1.
    const Deletebutton = document.createElement("button");
    Deletebutton.textContent = "Delete";
    Deletebutton.style.fontSize = "11px";
    item.appendChild(Deletebutton);
    // 2.
    const infoButton = document.createElement("button");
    infoButton.textContent = "Info";
    infoButton.style.fontSize = "11px";
    item.appendChild(infoButton);

    Deletebutton.addEventListener("click", () => {
        item.remove();
    });
    infoButton.addEventListener("click", () => {
        const email = document.createElement("p");
        email.textContent = element.email;
        email.style.fontSize = "11px";
        item.appendChild(email);
    });
}

// make motions after hover cursor.

// const list = document.getElementById("ul");
// const container = document.getElementById("container");
// container.setAttribute("class", "container");
// list.setAttribute("class", "list");
// for (let index = 0; index < users.length; index++) {
//     const element = users[index];
//     const createLi = document.createElement("li");
//     const link = document.createElement("a");
//     link.textContent = element.first_name;
//     link.setAttribute("href", element.avatar);
//     link.classList.add("link");
//     list.appendChild(createLi);
//     createLi.appendChild(link);
//     const image = document.createElement("img");
//     const email = document.createElement("a");
//     const name = document.createElement("p");
//     const surname = document.createElement("p");
//     const div = document.createElement("div");

//     link.addEventListener("mouseover", () => {
//         image.setAttribute("src", element.avatar);
//         email.textContent = element.email;
//         name.textContent = element.first_name;
//         surname.textContent = element.last_name;
//         createLi.appendChild(image); // ამატებს სულ ბოლოში.
//         createLi.appendChild(email);
//         createLi.appendChild(name);
//         createLi.appendChild(surname);
//     });
//     link.addEventListener("mouseout", () => {
//         image.remove();
//         email.remove();
//         name.remove();
//         surname.remove();
//     });
// }

/*----------------------------------------------------------------------------------*/
// sorts by age.
// const finder = users.sort((a, b) => a.age - b.age);
// console.log(finder);
/*----------------------------------------------------------------------------------*/
// appear and delete text by click.

// const textContent = (document.createTextNode = "this is mafia"); // it just creates text.
// const tryIt = document.getElementById("try");
// const appearBtn = document.getElementById("appearBtn");
// const deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.textContent = "delete";
// appearBtn.textContent = "appear";

// appearBtn.addEventListener("click", () => {
//     tryIt.style.position = "absolute";
//     tryIt.style.position = "absolute";
//     tryIt.style.border = "1px solid black";
//     tryIt.style.display = "inline-block";
//     tryIt.style.padding = "5px";
//     tryIt.style.backgroundColor = "lightpink";

//     tryIt.innerHTML = textContent;
// });
// deleteBtn.addEventListener("click", () => {
//     tryIt.style.border = "none";
//     tryIt.style.backgroundColor = "transparent";
//     tryIt.innerHTML = "";
// });

/*----------------------------------------------------------------------------------*/
// insertBefore

// const appendOper = document.getElementById("appendOper");
// const firstpara = appendOper.getElementsByTagName("p")[2];
// appendOper.style.display = "inline-block";
// const child = document.createElement("p");
// // appendOper.appendChild(child);   // ამატებს (გამოაჩენს) დაბლა.
// // child.innerHTML = "this is text!";
// // appendOper.insertBefore(child, appendOper.firstChild); // ამატებს (გამოაჩენს) ზემოთ.
// child.innerHTML = "this is text!";
// appendOper.insertBefore(child, firstpara); // დასვავს 2 ინდექსზე.

/*----------------------------------------------------------------------------------*/
// traversal techniique

// const box = document.getElementById("traversal_technique");
// const element = box.lastElementChild; // მთლიანი ბოლო ლისტი გახდება ვარდისფერი
// // const element = box.firstElementChild; // მთლიანი პირველი ლისტი გახდება ვარდისფერი
// element.style.backgroundColor = "lightpink";

// const box = document.getElementById("traversal_technique");
// const eachUl = document.getElementById("fruits");
// const parent = eachUl.parentElement; // მოვნიშნეთ ერთერთი(შესაბამისად ყველასი. სიბლინგები არიან) ლისტის მშობელი.
// parent.style.backgroundColor = "lightpink"; // სამივე ul გახდება ვარდისფერი(ანუ მშობელი რა).

// const eachUl = document.getElementById("fruits"); // შუა ლისტი.
// // const element = eachUl.nextElementSibling; // შუას ქვემოთა გახდება ვარდისფერო
// const element = eachUl.previousElementSibling; // შუას ზემოთა გახდება ვარდისფერო
// element.style.backgroundColor = "lightpink";

// const eachUl = document.getElementById("fruits"); // შუა ლისტი.
// const element = eachUl.lastElementChild; // შუა ლისტის ბოლო ნაწილი გახდება ვარდისფერი.
// // const element = eachUl.firstElementChild; // შუა ლისტის პირველი ნაწილი გახდება ვარდისფერი.
// element.style.backgroundColor = "lightpink";

// const eachUl = document.getElementById("fruits"); // შუა ლისტი.
// const element = eachUl.children[2]; // შუა ლისტის მეორე ინდექსი (ტექსტის ნაწილი) გახდება ვარდისფერი.
// const element = Array.from(eachUl.children); // children haven't foreach method. now 'element' is array.
// element.forEach((child) => (child.style.backgroundColor = "lightpink"));

// const box = document.getElementById("traversal_technique"); --> შეგვიძლია ამის საშუალებით სამივე ლისტი ცალცალკე გავავარდისფროთ.

// const newArr = Array.from(eachUl.children); --> იგივეა რაც ზედა კოდი.
// newArr.forEach((element) => {
//     element.style.backgroundColor = "lightpink";
// });

// Selectors:

// .lastElementChild
// .firstElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.childre) it is method. x.from(.childre) doesn't works.

/*----------------------------------------------------------------------------------*/

// const isArray = document.getElementById("isArray");      --> ამას ვერ მოვექცევით მასივივით, იმიტომ რომ ერთზე მეტი id არ უნდა იყოს. არ აქვს სიგრძე.
// const isArray = document.getElementsByClassName("isArray"); --> მასივია ჩვეულებრივი. აქვს სიგრძეც.
// const isArray = document.getElementsByName("isArray"); --> მასივია ჩვეულებრივი.
// const isArray = document.querySelectorAll(".isArray"); // --> მასივია ჩვეულებრივი.

// isArray[0].style.backgroundColor = "lightpink"; // ანუ ამით ყველაფერი კი წამოიღე, რასაც კლასი isArray აქვს,
// მაგრამ საჭიროა მივუთითოთ თუ რომელ ინდექსზე გვინდა მოქმედებების ჩატარება. ინდექსის გარეშე ერორია.

// for (let index = 0; index < isArray.length; index++) {   --> ეს და ამის ქვევითა კოდი იდენტურია. და ორივე პარაგრაფს ავარდისფრებს.
//     const element = isArray[index];
//     isArray[index].style.backgroundColor = "lightpink";
// }

// const updatedArray = Array.from(isArray);
// updatedArray.forEach((e) => (e.style.backgroundColor = "lightpink"));

// console.log(isArray.length);

/*----------------------------------------------------------------------------------*/
// removeChild

// const isArray = document.getElementById("isArray-box");
// // isArray.removeChild(isArray.firstElementChild); // removes first child of parent.

// while (isArray.firstChild !== "") {
//     // same as 'isArray.firstChild' in logic. easy logic.
//     isArray.removeChild(isArray.firstChild);
// }
// isArray.replaceChild(isArray.lastElementChild, isArray.firstElementChild); -> syntax: isArray.replaceChild( newChild,child )
// console.log(isArray);

/*----------------------------------------------------------------------------------*/
// nodeName
// const isArray = document.getElementById("isArray-box");
// const element = isArray.firstChild.nodeName;
// console.log(element);

/*----------------------------------------------------------------------------------*/

// let getSiblings = function (e) {
//     // for collecting siblings
//     let siblings = [];
//     // if no parent, return no sibling
//     if (!e.parentNode) {
//         return siblings;
//     }
//     // first child of the parent node
//     let sibling = e.parentNode.firstChild;
//     // collecting siblings
//     while (sibling) {
//         if (sibling.nodeType === 1 && sibling !== e) {
//             siblings.push(sibling);
//         }
//         sibling = sibling.nextSibling;
//     }
//     return siblings;
// };

// const variable = document.querySelector(".current");

// let siblings = getSiblings(variable);
// siblingText = siblings.map((e) => e.innerHTML);
// console.log(siblingText);

/*----------------------------------------------------------------------------------*/

const api = document.getElementById("api");

const data = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 20) {
            setInterval(() => {
                const paragraph = document.createElement("p");
                paragraph.style.fontSize = "15px";
                paragraph.textContent = "this is API";
                api.appendChild(paragraph);
            }, 2000);
        } else {
            setTimeout(() => {
                const paragraph = document.createElement("p");
                paragraph.style.fontSize = "15px";
                paragraph.textContent = "this is API2";
                api.appendChild(paragraph);
            }, 2000);
        }
    });
};

// setInterval(() => {
//     const paragraph = document.createElement("p");
//     paragraph.style.fontSize = "15px";
//     paragraph.textContent = "this is API";
//     api.appendChild(paragraph);
// }, 2000);

// data(22);

/*----------------------------------------------------------------------------------*/

const element = document.getElementById("events");
element.style.width = "100px";
element.style.height = "100px";
element.style.backgroundColor = "blue";

const doSome = () => {
    element.style.backgroundColor = "red";
};

const doSomeElse = () => {
    element.style.backgroundColor = "blue";
};

// element.onclick = doSome; // დაკლიკვაზე
// element.onmouseover = doSome; // კურსორის გადატარებაზე.
// element.onmouseout = doSomeElse; // კურსორის მოშორებაზე
// element.onmousedown = doSome;        // როცა ღილაკს დავაჭერთ (და გავაჩერებთ)
// element.onmouseup = doSomeElse;      // როცა ღილაკს ავუშვებთ

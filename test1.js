var users = [
    { name: 'Dong', gender: 'male' },
    { name: 'Trung Anh', gender: 'male' },
    { name: 'Trang', gender: 'female' },
    { name: 'Chi', gender: 'female' }
];



function render(container, listUser) {
    var htmlItem = listUser.map((user) => {
        return `<li class="list-item"> ${user.name} </li>`;
    });
    var strItem = htmlItem.join('\n');
    document.getElementById(container).innerHTML = strItem;
}

String.prototype.equalIgnoreCase = function (str) {
    if (typeof str === 'string') {
        return this.toUpperCase() === str.toUpperCase();
    }
}

function listFilter(container, listUser) {
    var option = document.getElementById(container);
    if (option.value != 'null') {
        let listFilted = listUser.filter((user) => {
            return option.value.equalIgnoreCase(user.gender);
        });
        // console.log(listFilted);
        return listFilted;
    }
    return listUser;
}


setInterval(() => {
    render('userList', listFilter('genderFilter', users));
}, 100);

var x=[1,100,90,6,2,4,5,3];

console.log(x.sort((a,b)=>{
    return a-b;
}));

var a=11,b=20;

for(let i=0;i<10;i++){
    console.log(Math.random()*(b-a)+a);
}
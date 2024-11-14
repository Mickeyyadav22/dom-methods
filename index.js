let createTable = document.createElement("table")
console.log(createTable);
document.body.appendChild(createTable)

createTable.style.border = "1px solid black"
createTable.style.fontSize = "25px"

let sno = document.createElement("th")
createTable.appendChild(sno)
sno.innerText = "S. No"
sno.style="color:blue;"
let UserName = document.createElement("th")
createTable.appendChild(UserName)
UserName.innerText = "Username"
UserName.style="color:blue;"
let city = document.createElement("th")
createTable.appendChild(city)
city.innerText = "City"
city.style="color:blue;"
let state = document.createElement("th")
createTable.appendChild(state)
state.innerText = "State"
state.style="color:blue;"

let sno_arr=[1,2,3,4,5];
let UserName_arr = ["UserName 1","userName 2","userName3","userName4","userName5"];
let city_arr = ["HYD","VSKP","VZM","SKML","RJY"];
let state_arr = ["Telangana","Andhra","Andhra","Andhra","Andhra"];


for(i = 0;i<sno_arr.length;i++){
    let t_row = document.createElement("tr")
    createTable.appendChild(t_row)
    let t_data = document.createElement("td")
    t_row.appendChild(t_data)

    t_row.innerText = sno_arr[i]



    let user_data = document.createElement("td")
    t_row.appendChild(user_data);
    user_data.innerText = UserName_arr[i]

    let city_data= document.createElement("td")
    t_row.appendChild(city_data)
    city_data.innerText = city_arr[i]

    let state_data = document.createElement("td")
    t_row.appendChild(state_data)
    state_data.innerText = state_arr[i]

}

console.log(createTable);

// function

function heading(){
    let username=prompt("enter user name:-")
    let p=document.getElementsByTagName("h1")[0]
    p.innerText=`${username}`   
}
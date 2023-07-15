/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let newArr = arr.map((element, index) => {
        if (element.profession === "developer") {
            return arr[index];
        }
    })

    // use filter because map show array of length 3 with last index is undefined
    newArr = newArr.filter((element, index) => {
        if (element != undefined) {
            return newArr[index];
        }
    })
    console.log(newArr);
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let newArr = [];
    arr.forEach((element, index) => {
        if (element.profession === "developer") {
            newArr.push(arr[index]);
        }
    })
    console.log(newArr);
}

function addData() {
    //Write your code here, just console.log
    arr.push(
        { id: 4, name: "susan", age: "20", profession: "intern" }
    );
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((element, index) => {
        if (element.profession === "admin") {
            arr.splice(index, index);
        }
    })
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "messi", age: "36", profession: "football" },
        { id: 5, name: "virat", age: "34", profession: "cricketer" },
        { id: 6, name: "neeraj", age: "25", profession: "javelin" },
    ]
    arr = arr.concat(newArr);
    console.log(arr);
}
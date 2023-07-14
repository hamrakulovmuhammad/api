let arr1 = []
let arr2 = []
let arr3 = []

let BASE_URL = 'http://localhost:5050'
fetch(BASE_URL + '/cars')
    .then(res => res.json())
    .then(data => reload(data))

let box = document.querySelector('.box')
let flexBox = document.querySelector('.year_one')
let two = document.querySelector('.year_two')
let others = document.querySelector('.others_year')
let h3 = document.querySelectorAll('h3')

let show1 = 4
let show2 = 4
let show3 = 4
function reload(arr) {
    console.log(arr);
    for (let i of arr) {
        let box = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let button = document.createElement('button')


        box.classList.add('box')
        button.classList.add('button')
        h2.innerHTML = `${i.car}`
        p.innerHTML = `VIN:${i.car_vin}`
        p2.innerHTML = `Year:${i.car_model_year}`
        button.innerHTML = 'Подаобнее'


        box.append(h2, p, p2, button)


        if (i.car_model_year >= 2020 && arr1.length !== show1) {
            flexBox.append(box)
            arr1.push(i)
        }
        else if (i.car_model_year >= 2013 && arr2.length !== show2) {
            two.append(box)
            arr2.push(i)
        }
        else if (i.car_model_year < 2013 && arr3.length !== show3) {
            others.append(box)
            arr3.push(i)
        }
    }

    h3.forEach(btn => {
        btn.onclick = () => {
            show1 = 12
            show2 = 12
            show3 = 12
            reload(arr1)
            reload(arr2)
            reload(arr3)
        }
    })
}


let comp = [{
        id: 1,
        img: 'https://aztech.az/wp-content/uploads/2022/06/ASUS-TUF-Gaming-A15-FA507-4.png',
        cpu: 'intel core i7',
        ram: 16,
        rom: 512,
        price: 1500
    },
    {
        id: 2,
        img: 'https://ifixindia.in/wp-content/uploads/2018/09/macbook-air-png-transparent-background-6.png',
        cpu: 'M2',
        ram: 16,
        rom: 512,
        price: 1300

    }
]

const cards = document.querySelector('.cards')
const loguot = document.querySelector('.logout')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const header = document.querySelector('header')
const addcomp = document.querySelector('.addbtn')
const allInput = document.querySelectorAll('input')

function ubdate() {
    cards.innerHTML=''

    for (let computer of comp) {
        cards.innerHTML += `                    <div class="card">
        <button id='${computer.id}' class='delete'>x</button>
    <img src="${computer.img}" alt="Asus">
    <div class="info">
        <p>CPU:${computer.cpu}</p>
        <p>RAM: ${computer.ram}GB</p>
        <p>SSD: ${computer.rom}GB</p>
        <p>Price: ${computer.price}$</p>
    </div>
    <button class="det">Details</button>
</div>
`
        for (let input of allInput) {
            input.value = ''
        }
    }
}

ubdate()

function addComps(){
    // e.prevetDefault()
    let newComputer={
        id: computer.at(-1).id+1,
        img:allInput[0].value,
        cpu: allInput[1].value,
        ram: allInput[2].value,
        rom: allInput[3].value,
        price:allInput[4].value
    }
    comp.push(newComputer)
    ubdate()
}
function deleteComp(id){
    comp=comp.filter(comp=>comp.id!==id)
    ubdate()
}
header.addEventListener('click', (e) => {
    if (e.target.id === 'log') {
        login.style.display = 'none'
        register.style.display = 'none'
        loguot.style.display = 'inline'
    }
    if (e.target.innerHTML === 'Log out') {
        login.style.display = 'inline'
        register.style.display = 'inline'
        loguot.style.display = 'none'
    }

})
function handleClick(e){
    if(e.target.innerHTML==='x'){
       deleteCopm(Number(e.target.id))
    }
}

addcomp.addEventListener('click', () => {
    addComps()
})
cards.addEventListener('click',handleClick)
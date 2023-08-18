const accrodins = document.querySelectorAll('.accordian');
console.log(accrodins);

// accrodins.forEach((item)=>{
//     // console.log(item.innerText)
//     console.log(item.lastChild)
// })

accrodins.forEach(acco=>{

    const icon = document.querySelector('.icon');
    const ans = document.querySelector('.answer');
    icon.addEventListener('click',()=>{


        if (icon.classList.contains('active')) {
            icon.classList.remove('active')
            ans.classList.remove('show-containt')
        }
        else  {
            icon.classList.add('active')
            ans.classList.add('show-containt')
        }
    })
})


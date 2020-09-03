let count = 0;

let value = document.querySelector('#value');
let btus = document.querySelectorAll('.btu');
btus.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else{
            count = 0
        }
        if (count == 0){
            value.style.color = 'white';
        }
        else if (count > 0){
            value.style.color = '#1adba1';
        }
        if (count < 0){
            value.style.color = '#f75454';
        }
        value.textContent = count;
    });
});
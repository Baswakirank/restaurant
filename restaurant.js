let b=document.querySelector('button')
b.addEventListener('click',show)
function show()
{
    let item=prompt("enter ur item for order")
    if((item=='Pizza')||(item=='Burger')||(item=='French_Fries')||(item=='Paneer_Tikka'))
    {
        prompt('eneter ur adress')
        let p=prompt('enter ur pincode')
        let d=prompt('enter ur number')
        if((p.length==6)&&(d.length==10))
        {

        
        alert('ur order is on the way!!')
        alert('Thanks for visiting our website')
        }
        else{
            alert('Please enter valid Mobile no & Pincode  ')
        }
    }

    
    else
    {
        alert('ur order is not available.We will get it soon....')
    }
}
    

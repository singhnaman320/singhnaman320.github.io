let details=document.getElementsByClassName("skill-ed");
let content=document.getElementsByClassName("contents");

opentab=(name)=>{
    for(detail of details){
        detail.classList.remove("active");
    }
    for(con of content){
        con.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("active-tab");
}


let sidemenu=document.getElementById("sidemenu");

openmenu=()=>{
sidemenu.style.right="0";
}

closemenu=()=>{
    sidemenu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwotSquEReIcg899fxVdOaOCaplhjnh0suOXSRouMn5kc6w-DpPDmOk13bhkY6PnkQ5pQ/exec';
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully";
        setTimeout(()=>{
            msg.innerHTML="";
        },5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })

    document.getElementById("res").addEventListener("click",resume_fun);
    function resume_fun() {
    //window.location.href = "https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=share_link";
    window.open("https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=sharing", '_blank');

    }

    document.getElementById("res1").addEventListener("click",resume1_fun);
    function resume1_fun() {
    //window.location.href = "https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=share_link";
    window.open("https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=sharing", '_blank');
    
    }

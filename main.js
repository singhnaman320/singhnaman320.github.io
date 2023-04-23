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

    document.getElementById("resume-button-1").addEventListener("click",resume_fun);
    function resume_fun() {
    //window.location.href = "https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=share_link";
    window.open("https://1drv.ms/b/s!AjVEmfDOaqo9hiFqnTQmr9w8u1rb?e=3yeSZ7", '_blank');

    }

    document.getElementById("resume-button-2").addEventListener("click",resume1_fun);
    function resume1_fun() {
    //window.location.href = "https://drive.google.com/file/d/1_kuCzH24NVL_wiE3UkilIi1mXk2Y0Yw2/view?usp=share_link";
    window.open("https://1drv.ms/b/s!AjVEmfDOaqo9hiFqnTQmr9w8u1rb?e=3yeSZ7", '_blank');
    
    }



  window.addEventListener("scroll",function(){
    
    let nav=this.document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
  })
   
  let container=  document.getElementById("skill_container");
   
  let skill_arr=[
      "./images/java.png",
      "./images/springboot.png",
      "./images/hibernate.png",
      "./images/sql.jpg",
      "./images/js.png",
      "./images/html.png",
      "./images/css.png",
      "./images/aws.png",
      "./images/railway.png",
      "./images/netlify.png"
  ];
  let skill_name=[
      "Java",
      "SpringBoot",
      "Hibernate",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
      "AWS",
      "Railway",
      "Netlify"
  ]
  let count=0;
  AppendSkills=(arr)=>{
  container.innerHTML=null;
      arr.forEach((ele)=>{
          let div= document.createElement("div");
          let img=document.createElement("img");
          img.src=ele;
          let name=document.createElement("h2");
          name.innerText=skill_name[count];
          name.style.color="white";
          count++;
          div.append(img,name);
          container.append(div);
      })
  }
  
  window.addEventListener("load",()=>{
      AppendSkills(skill_arr);
  })

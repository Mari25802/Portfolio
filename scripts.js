document.getElementById('download').addEventListener('click',()=>{
    const link=document.createElement('a');
    link.href="https://mari25802.github.io/Portfolio/resume.pdf"
    link.download="resume.pdf"
    link.click();
})

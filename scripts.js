document.getElementById('download').addEventListener('click',()=>{
    const link=document.createElement('a');
    link.href="https://mari25802.github.io/Portfolio/mariselvam_resume.pdf"
    link.download="mariselvam_resume.pdf"
    link.click();
})

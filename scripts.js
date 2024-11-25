// document.getElementById('download').addEventListener('click',()=>{
//     const link=document.createElement('a');
//     link.href="http://127.0.0.1:5500/resume.pdf"
//     link.download="resume.pdf"
//     link.click();
// })

document.getElementById('download').addEventListener('click',()=>{
    const link=document.createElement("a")
    link.href="http://127.0.0.1:5500/resume.pdf"
    link.download="resume.pdf"
    link.click();
})
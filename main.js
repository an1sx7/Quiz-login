function send(){
  let name=document.getElementById('txt').value
  let pass=document.getElementById('pass').value
  let gen=document.getElementById('gender').value
  let age=document.getElementById('num').value
  localStorage.setItem('user',name)
  localStorage.setItem('pass',pass)
  localStorage.setItem('gender',gen)
  localStorage.setItem('age',age)
  console.log('user')
  console.log('pass')
  console.log('gender')
  console.log('age')
}


fetch(`http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2`)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
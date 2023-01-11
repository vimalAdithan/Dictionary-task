var btn=document.querySelector('.btn');
var answer=document.querySelector('span')
btn.addEventListener('click',()=>{
    var data=document.querySelector('input').value;
    var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then(res=>{
        var meaning=res[0].meanings[0].definitions[0].definition;
        answer.innerText=meaning;
    })
    .catch(rej=>{
        answer.innerText='enter a valid word';
    })
})
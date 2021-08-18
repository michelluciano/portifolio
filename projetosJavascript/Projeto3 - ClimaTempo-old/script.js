document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    console.log(input);

    if(input !== ''){
        showWarning('Carregando...');

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=01639770dcff4631957df2cf719d2c8a&units=metric&lang=pt_br`;
        
        let results = await fetch(url);
        let json = await results.json();

        /*console.log(json);*/
        
        if(json.cod == 200){

        }else{
            showWarning('Não encontramos esta localização')
        }
    }else{

    }
});

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}
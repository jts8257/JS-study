let Body = {
    SetColor:function(color){ 
        document.querySelector('body').style.color=color;},
    SetBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color}
}

let Link ={
    SetColor:function(color){
    let a_list = document.querySelectorAll('a');
    let i=0;
        while(i<a_list.length){
            a_list[i].style.color=color;
            i++;}
    }
}


function darkDayHandler(self){
    if(self.value==='Dark-mode'){
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value= 'Day-mode';
        Link.SetColor('powderblue')
    } else{
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value = 'Dark-mode';
        Link.SetColor('blue')
        }
    }
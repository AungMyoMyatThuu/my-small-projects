words = [
    'Go','Come','Eat','Work','Live','Stay','Do','Make','Walk','See',
    'Hear','Smell','Think','Look','Speak','Tell','Tell lie','Tell true','Talk about','Talk back',
    'Teach','Learn','Slap','Make a salad','Make a joke','Make a fun','Peek','Mutter','Feel','Swim'
]
tranWords = [
    'သွားသည်','လာသည်','စားသည်','အလုပ်လုပ်သည်','နေထိုင်သည်','တည်းခိုသည်','ပြုလုပ်သည်','ပြုလုပ်သည်။ ဆောင်ရွက်သည်','လမ်းလျှောက်သည်','မြင်သည်',
    'ကြားသည်','အနံ့ရသည်','တွေးသည်','ကြည့်သည်','ဘာသာစကားပြောသည်','ပြောပြသည်','လိမ်ပြောသည်','အမှန်အတိုင်းပြောသည်','အကြောင်းပြောသည်','ပြန်ခံပြောသည်',
    'သင်ပေးသည်','သင်ယူသည်','ပါးရိုက်သည်','အသုပ်သုပ်သည်','စနောက်သည်','ဟာသလုပ်သည်','ချောင်းကြည့်သည်','တတွတ်တွတ်ပြောသည်','ခံစားသည်','ရေကူးသည်'
]
let reload = document.getElementById('reload');
let translateWord = document.getElementById('translate');
let randomWord = document.getElementById('word');
let ramdomNum = document.getElementById('num');
let random;

reload.onclick=()=>{
    random = Math.floor(Math.random() * words.length);
    randomWord.value = words[random];
    ramdomNum.value = random + 1;
    console.log(words[random])
}
translateWord.onclick=()=>{
    if(random == undefined){
        randomWord.placeholder = "စကားလုံးများပြောင်းရန် Random button ကိုနှိပ်ပါ။";
    }
    else{
        randomWord.value = tranWords[random] + '။'
    }
}

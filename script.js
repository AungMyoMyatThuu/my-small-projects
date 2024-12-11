words = [
    'Go','Come','Eat','Work','Live','Stay','Do','Make','Walk','See',
    'Hear','Smell','Think','Look','Speak','Tell','Tell lie','Tell true','Talk about','Talk back',
    'Teach','Learn','Slap','Make a salad','Make a joke','Make a fun','Peek','Mutter','Feel','Swim',
    'Sing','Fight','Beat','Bite','Lose','Catch','Catch on','Hide','Help','Ride',
    'Steal','Wear','Grow','Throw','Shake','Jump','Try','Cry','Smile','Fly',
    'Fry','Love','Hate','Like','Want','Need','Dare','Plan','Miss','Remember'
]
tranWords = [
    'သွားသည်','လာသည်','စားသည်','အလုပ်လုပ်သည်','နေထိုင်သည်','တည်းခိုသည်','ပြုလုပ်သည်','ပြုလုပ်သည်။ ဆောင်ရွက်သည်','လမ်းလျှောက်သည်','မြင်သည်',
    'ကြားသည်','အနံ့ရသည်','တွေးသည်','ကြည့်သည်','ဘာသာစကားပြောသည်','ပြောပြသည်','လိမ်ပြောသည်','အမှန်အတိုင်းပြောသည်','အကြောင်းပြောသည်','ပြန်ခံပြောသည်',
    'သင်ပေးသည်','သင်ယူသည်','ပါးရိုက်သည်','အသုပ်သုပ်သည်','စနောက်သည်','ဟာသလုပ်သည်','ချောင်းကြည့်သည်','တတွတ်တွတ်ပြောသည်','ခံစားသည်','ရေကူးသည်',
    'သီချင်းဆိုသည်','တိုက်ခိုက်သည်','ရိုက်နှက်သည်','သွားဖြင့်ကိုက်သည်','ဆုံးရှုံးသည်','ဖမ်းသည်','ခေတ်စားသည်','ဖုံးထာသည်။ပုန်းကွယ်သည်','ကူညီသည်','စီးသည်',
    'ခိုးယူသည်','ဝတ်ဆင်သည်','ကြီးထွားသည်','လွင့်ပစ်သည်','လှုပ်ခါသည်','ခုန်သည်','ကြိုးစားသည်','ငိုသည်','ပြုံးသည်','ပျံသန်းသည်',
    'အကြော်ကြော်သည်','ချစ်သည်','မုန်းသည်','ကြိုက်နှစ်သက်သည်','လိုချင်သည်','လိုအပ်သည်','ရဲဝင့်သည်','စီစဉ်သည်။အစီအစဉ်','ပျောက်ဆုံးသည်။လွဲချော်သည်','သတိရသည်'
]
console.log(words.length , tranWords.length)
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

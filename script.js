//create stop waTCH
const hr=min=sec=ms=0;
const hour=document.querySelector('#hour');
const minute=document.querySelector('#minute');
const second=document.querySelector('#second');
const millisecond=document.querySelector('#millisecond');
const startBtn=document.querySelector('.start');
const stopBtn=document.querySelector('.stop');
const resetBtn=document.querySelector('.reset');

//buttons event listener
let myInterval;
startBtn.addEventListener('click',()=>{
    myInterval=setInterval(setTimer,10);
})
stopBtn.addEventListener('click',()=>{
    clearInterval(myInterval);

})
resetBtn.addEventListener('click',()=>{
    clearInterval(myInterval);
    ms="00";
    sec="00";
    min="00";
    millisecond.innerText=ms;
    second.innerText=sec;
    minute.innerText=min;
    
})


function setTimer(){
    ms++;
    if(ms){
       let milli= ms<10 ? "0"+ ms: ms;
        millisecond.innerText=milli;
    }
    if(ms>99){
        sec++;
        ms="00";
        sec=sec<10 ? "0"+sec: sec;
        second.innerText=sec;
    }
    if(sec>59){
        sec=0;
        min++;
        min=min<10 ? "0"+min: min;
        minute.innerText=min;
    }
    if(min>59){
        hr++;
        min="00";
        hr=hr<10 ? "0"+hr: hr;
        hour.innerText=hr;
    }
    
}
//Change background images

const mainImg=document.querySelector('#main-bg');
const smallImgs=document.querySelectorAll('.small-bg');

smallImgs.forEach(img=>{
    img.addEventListener('click',(e)=>{
        mainImg.src=e.target.src;
    })
})

//Generate random quotes
const quoteBtn=document.querySelector('.quote-btn');
const quote=document.querySelector('#quote');

const quotes=['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela','The way to get started is to quit talking and begin doing. -Walt Disney',"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Job",'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron","Life is what happens when you're busy making other plans. -John Lennon","Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa","When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt","Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead","Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson","The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt","Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison","Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison","The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama",'"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',' alone cannot change the world, but I can cast a stone across the water to create many ripples. -Mother Teresa',"If you really look closely, most overnight successes took a long time. -Steve Jobs",'Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill'];



quoteBtn.addEventListener('click',()=>{
    let randomNum=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[randomNum];
});
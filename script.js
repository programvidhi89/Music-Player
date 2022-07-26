const music = document.querySelector('audio');
const play = document.getElementById('play');
const img = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let progress = document.getElementById('progress');
let duration1 = document.getElementById('duration');
let current_time = document.getElementById('current-time');
let progress_div = document.getElementById('progress-div');
const songs = [
{
	name: "Pent Straight",
	title:"Pent Straight",
	artist: "Gurnaam Bhullar",
	// image: "music4"
	image:"https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}
,
{
	name: "Rozana",
	title:"Rozana",
	artist: "Naam Shabana",
	// image: "music1"
	image:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}
,
{
	name: "Pasoori",
	title:"Pasoori",
	artist: "Shae Gill",
	// image:"music2"
	image:"https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}
,
{
	name: "Chaand Baaliyan",
	title:"Chaand Baaliyan",
	artist: "Aditya A",
	// image:"music3"
	image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}


]
let isPlaying = false;
//for play function
const playMusic = ()=>{
	isPlaying = true;
    music.play();

    play.classList.replace('fa-play','fa-pause');
    img.classList.add('animation');
};
//for pause function
const pauseMusic =  ()=>{
	isPlaying =false;
    music.pause();

    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('animation');
};

play.addEventListener('click',()=>{
	if(isPlaying){
		pauseMusic();
	}else{
		playMusic();
	}
});
// changing the music  data
const loadSong = (songs)=>{
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = `D:/Users/DELL/Downloads/${songs.name}.mp3`;
// img.src = "D:/Users/DELL/Downloads/" + songs.image + ".jpg";
img.src = songs.image;
}
let songIndex = 0;
// loadSong(songs[2]);
const nextSong = ()=>{
	songIndex = (songIndex + 1) % songs.length ;

	loadSong(songs[songIndex]);
	playMusic();

}
const prevSong = ()=>{
	
		songIndex = (songIndex - 1 + songs.length ) % songs.length ;
		loadSong(songs[songIndex]);
		playMusic();
	
}

// progress js work

music.addEventListener('timeupdate',(event)=>{
		
		const{currentTime,duration} = event.srcElement;

		let progress_time = (currentTime/duration)*100;

		progress.style.width = `${progress_time}%`;
		// music duration update
		let min_duration = Math.floor(duration/60);
		let sec_duration = Math.floor(duration % 60);
		let tot_duration = `${min_duration}:${sec_duration}`;
		if(duration){
			duration1.textContent = `${tot_duration}`;
		}
		// current duration update
		let min_current = Math.floor(currentTime/60);
		let sec_current = Math.floor(currentTime % 60);
		
		if(sec_current<10){
			sec_current = `0${sec_current}`;

}
           let tot_current = `${min_current}:${sec_current}`;
			current_time.textContent = `${tot_current}`;
		
		

		
});
// progress onclick functionallity
progress_div.addEventListener('click',(event)=>{
	const{duration} = music;
	//const duration = music.duration;
	let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;
	
	music.currentTime = (move_progress);
});

//if music en call nextSong function

music.addEventListener('ended',nextSong);


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);
// "D:\Users\DELL\Downloads\Rozana Naam Shabana 128 Kbps.mp3"
// "D:\Users\DELL\Downloads\Pent Straight.mp3"


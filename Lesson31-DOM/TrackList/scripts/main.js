// LESSON 31 - DOCUMENT OBJECT MODEL
//1. Create a page that displays a numbered list of tracks:

const playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

function displayPlaylist() {    
    document.write(`1. ${playList[0].song} by: ${playList[0].author}`);
    document.write('<br>');   
    document.write(`2. ${playList[1].song} by: ${playList[1].author}`);
    document.write('<br>'); 
    document.write(`3. ${playList[2].song} by: ${playList[2].author}`);
    document.write('<br>');
    document.write(`4. ${playList[3].song} by: ${playList[3].author}`);
    document.write('<br>');
    document.write(`5. ${playList[4].song} by: ${playList[4].author}`);
    document.write('<br>'); 
    document.write(`6. ${playList[5].song} by: ${playList[5].author}`);
    document.write('<br>');
    document.write(`7. ${playList[6].song} by: ${playList[6].author}`);
    document.write('<br>');
    document.write(`8. ${playList[7].song} by: ${playList[7].author}`);
}
displayPlaylist(playList)
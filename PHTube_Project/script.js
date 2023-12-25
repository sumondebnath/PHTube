


let sortUrl = "https://openapi.programming-hero.com/api/videos/category/1000";

const allLoadedData = () => {
    // const all = document
    fetch("https://openapi.programming-hero.com/api/videos/category/1000").then((res) => res.json()).then((data) => allData(data.data));
    sortUrl = "https://openapi.programming-hero.com/api/videos/category/1000";
}

const musicLoadedData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1001").then((res) => res.json()).then((data) => data.data.length==0 ?noData():allData(data.data));
    sortUrl = "https://openapi.programming-hero.com/api/videos/category/1001";
}

const comedyLoadedData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1003").then((res) => res.json()).then((data) => data.data.length==0 ?noData():allData(data.data));
    sortUrl = "https://openapi.programming-hero.com/api/videos/category/1003";
}

const drawingLoadedData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1005").then((res) => res.json()).then((data) => data.data.length==0  ?noData():allData(data.data));
    // sortUrl = "https://openapi.programming-hero.com/api/videos/category/1005";
    sortUrl = noData();     // for this line given error.
}

const sortedData = () => {
    fetch(sortUrl).then((res) => res.json()).then((data) => sortByView(data.data));
}

const timeDate = (date) => {
    const hour = date / 3600;
    const remaind = date % 3600;
    const sec = remaind / 60;
    console.log(parseInt(hour));
    console.log(remaind);
    console.log(parseInt(sec));
}

const sortByView = (alData) => {
    allData(alData.sort((a,b) =>{
        return parseFloat(b.others.views) - parseFloat(a.others.views);
    }))
    // console.log(alData.others.views);
    // allData(alData);
}


const allData = (alldata) => {
    // console.log(alldata[0].category_id);
    try{
        const showData = document.getElementById("show-data");
        document.getElementById("show-data").innerHTML = null;
        alldata.forEach((data) => {
            // console.log(data);
            const card = document.createElement("div");
            card.classList.add("box-data");
            card.innerHTML = `
                <img class="allImg" src=${data.thumbnail} alt="thumbPicture">
                <div class="profile-container">
                    <img class="profile-img" src=${data.authors[0].profile_picture} alt="Profile Picture">
                    <h4 class="profile-title">${data.title}</h4>
                </div>
                <h5 class="profile-name">${data.authors[0].profile_name} <span>${data.authors[0].verified?'<i id="icon" class="fa-solid fa-circle-check"></i>':''}</span> </h5>
                <h5 class="profile-view">${data.others.views} views</h5>
            `;
            showData.appendChild(card);

            
        })
    }
    catch{
        console.log("No Data Here.");
    }
}

const noData = () =>{
    
    const showData = document.getElementById("show-data");
    document.getElementById("show-data").innerHTML = null;
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="empty">
            <img src="./resource/Icon.png" alt="Icon_picture">
            <h1 class="oop">Oops!!! Sorry, There is no content here.</h1>
        </div>
    `;
    showData.appendChild(card);
}


allLoadedData();
// drawingLoadedData();
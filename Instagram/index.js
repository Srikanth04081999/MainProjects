var random = Math.floor(Math.random() * 10+1);

document.querySelector('.numofpost').innerHTML = random

document.querySelector('.numoffollower').innerHTML = Math.floor(Math.random() * 10000);

document.querySelector('.numoffollowing').innerHTML = Math.floor(Math.random() * 10);

fetch('https://randomuser.me/api').then(response =>{
    response.json().then(data=>{
        let user=data.results[0];
            document.querySelector('.profilename').innerHTML = user.name.first
            document.querySelector('.bioname').innerHTML = user.name.first + ' ' + user.name.last
            document.querySelector('.profilepicture').src = user.picture.medium

            for(let i=0; i<random; i++)
            {
                let img = document.createElement('img');
                img.src = "https://picsum.photos/9"+i;
                document.querySelector('.posts').append(img);

            }

    })
})

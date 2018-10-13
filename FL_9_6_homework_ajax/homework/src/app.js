const http = {
    get: url => {
        const xhr = new XMLHttpRequest();

        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return; 
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);

        xhr.open(`GET`, url, true);
        xhr.send();
      });
    }
};

const container = document.querySelector('.container'),
    form = document.querySelector('#form'),
    lat = document.querySelector('#lat'),
    lon = document.querySelector('#lon'),
    button = document.querySelector('#submit');


form.addEventListener('change', () => {
    if (lat.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

button.addEventListener('click', () => {
    http.get(`https://api.onwater.io/api/v1/results/${lat.value},${lon.value}`)
        .then(request => {
            let obj = JSON.parse(request);
            if (obj.water) {
                container.classList.add('water');
                container.innerHTML = '<h2>WATER</h2>';
            } else {
                container.classList.add('land');
                container.innerHTML = '<h2>LAND</h2>';
            }
        })
        .catch(err => console.error(`Rejection: ${err}`));
});
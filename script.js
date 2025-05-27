// grab the status element from the DOM
const statusElement = document.getElementById('status');

// check if we can actually reach the internet
// using google's favicon as a lightweight ping target
async function checkInternetConnection() {
    try {
        // try to fetch google's favicon - if this works, we're online
        const response = await fetch('https://www.google.com/favicon.ico', {
            mode: 'no-cors', // don't care about CORS for this
            cache: 'no-cache', // don't cache this request
            timeout: 5000 // 5 second timeout
        });
        
        // we're online! update the UI
        statusElement.textContent = 'Yes';
        statusElement.classList.add('online');
        statusElement.classList.remove('offline');
    } catch (error) {
        // welp, looks like we're offline
        statusElement.textContent = 'No';
        statusElement.classList.add('offline');
        statusElement.classList.remove('online');
    }
}

// check every 5 seconds
setInterval(checkInternetConnection, 5000);

// do the first check right away
checkInternetConnection(); 
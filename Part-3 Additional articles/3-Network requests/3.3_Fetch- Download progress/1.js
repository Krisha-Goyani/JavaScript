async function readStream(response) {
    const reader = response.body.getReader();

    while (true) {
        const { done, value } = await reader.read(); // ✅ Now inside an async function

        if (done) {
            break;
        }

        console.log(`Received ${value.length} bytes`);
    }
}

// Example fetch request
async function fetchAndRead() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch some data
    await readStream(response); // Call the function to read the stream
}

fetchAndRead(); // Start the process

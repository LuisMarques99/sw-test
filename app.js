if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw-test/sw.js', { scope: './sw-test/' })
        .then((reg) => {
            // Registration worked
            console.log(`Registration succeeded. Scope is ${reg.scope}`);
        }).catch((error) => {
            // Registration failed
            console.log(`Registration failed with ${error}`);
        });
}
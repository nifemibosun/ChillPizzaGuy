document.addEventListener("DOMContentLoaded", () => {
    const requestOptions = {
        method: "get",
        headers: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MzM1NzUxMDI1ODIsImVtYWlsIjoibmlmZW1pYm9zdW43MEBnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJhcGlWZXJzaW9uIjoidjIiLCJpYXQiOjE3MzM1NzUxMDJ9.2jxxhzChHL0CsDU4RJN8yLi0orkpUxk2HuwITzGG_8Q"}
    }
          
    const fetchData = async () => {
        try {
            const response = await fetch("https://pro-api.solscan.io/v2.0/token/meta", requestOptions)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));

            
            if (response.success == true) {
                document.getElementById("current-price").textContent = `$${response.data.price}`;
                document.getElementById("market-cap").textContent = `$${response.data.market_cap}`;
                document.getElementById("total-holders").textContent = `$${response.data.holder}`;
            } else {
                console.error("Error fetching token data:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    setInterval(fetchData, 5000);

    fetchData();
});

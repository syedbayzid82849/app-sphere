export const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("installedApps");
    if (storedAppSTR) {
        const storeAppData = JSON.parse(storedAppSTR);
        return storeAppData;
    }
    else {
        return [];
    }
}

export const addToStoreDB = (id) => {
    const storedAppData = getStoredApp();
    if (storedAppData.includes(id)){
        console.log("object");
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installedApps", data)
    } 
}
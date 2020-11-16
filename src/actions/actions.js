export const ADDFEATURE = "ADDFEATURE";
export const REMOVEFEATURE = "REMOVEFEATURE";

export const addFeature = feature => {
    return { 
        type: ADDFEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    return {
        type: REMOVEFEATURE,
        payload: feature
    }
}
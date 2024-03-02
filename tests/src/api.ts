export const getDegrees = (city: string): Promise<number> => {
    return fetch(`/foo/${city}`)
        .then(response => response.json())
        .then(json => json.degrees);
}
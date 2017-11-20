export const getAverageLoans = (data) => {
    let average = 0;
    let total = 0;
    let ratings = [];
    data.forEach(item => {
        total += item.amount;
        ratings = (ratings.indexOf(item.rating) === -1) ? ratings.concat(item.rating) : ratings;
    });
    ratings.sort();
    average = (total / data.length).toFixed(2) || 0;
    return {average, ratings};
}

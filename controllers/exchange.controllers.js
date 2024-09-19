const getCurrencyFromAPI = async () => {
    const apiResponse = await fetch('https://open.er-api.com/v6/latest');
    const data = await apiResponse.json();
    return data;
}

const getCurrencies = async (req, res) => {
    try {
        const allCurrenciesDataList = await getCurrencyFromAPI();
        const currencyList = Object.keys(allCurrenciesDataList.rates);

        res.status(200).send({ data: currencyList });
    } catch (error) {
        res.status(500).send({ message: "The service is currently down, please check again later" });
    }
}

module.exports = { getCurrencies };
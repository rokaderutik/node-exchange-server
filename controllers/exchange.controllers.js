const getCurrencyFromAPI = async (url) => {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return data;
}

const getCurrencies = async (req, res) => {
    try {
        const allCurrenciesDataList = await getCurrencyFromAPI('https://open.er-api.com/v6/latest');
        const currencyList = Object.keys(allCurrenciesDataList.rates);

        res.status(200).send({ data: currencyList });
    } catch (error) {
        res.status(500).send({ message: "The service is currently down, please check again later" });
    }
}

const getConvertedRate = async (req, res) => {
    const { value, currency, to_currency } = req.query;
    try {
        const currenciesRatesWRTGivenCurr = await getCurrencyFromAPI(`https://open.er-api.com/v6/latest/${currency}`);
        
        if(currenciesRatesWRTGivenCurr.result === 'error')
            return res.status(404).send({ message: "Cannot find given currency code" });

        const targetCuurencyRate = currenciesRatesWRTGivenCurr.rates[to_currency];
        if(!targetCuurencyRate)
            return res.status(404).send({ message: "Cannot find given currency code" });
        
        const convertedValue = targetCuurencyRate * value;

        res.status(200).send({ result: convertedValue });
    } catch (error) {
        res.status(500).send({ message: "The service is currently down, please check again later" });
    }
};

module.exports = { getCurrencies, getConvertedRate };
/*-------------------------------------------------------------------------------
	  Currency Exchange API 
	-------------------------------------------------------------------------------*/
	function get_exchange_rate(base_currency) {
        let params = {
            "base":base_currency
        }
		let data = axios.get('https://api.exchangeratesapi.io/latest', {
            params: params
          })
          .then(function (response) {
            console.log(response.data.rates);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
	}
$(function(){
    get_exchange_rate("USD")
})
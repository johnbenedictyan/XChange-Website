/*-------------------------------------------------------------------------------
	  Currency Exchange API 
	-------------------------------------------------------------------------------*/
	function asd(currency_obj){
		$(".base-currency").each(function(index){
			
		})
	}
	function get_exchange_rate(base_currency,load_dom) {
        let params = {
            "base":base_currency
        }
		let data = axios.get('https://api.exchangeratesapi.io/latest', {
            params: params
          })
          .then(function (response) {
            console.log(response.data.rates);
			  load_dom(response.data.rates)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
	}
$(function(){
	$(".currency")
    get_exchange_rate("USD",load_dom)
})
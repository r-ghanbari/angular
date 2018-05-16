app.factory('transactionService', ['$http', '$q', function ($http, $q) {

    return {
        getData: getData
     }


    function getData(params) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: JSON.stringify(params),
            url: "/UserPanel/Payment/GetTransactionInfo"
        }).then(function success(response) {

            deferred.resolve(response.data);

        }, function error(response) {

            deferred.reject(response);

        });
        return deferred.promise;
    }
}]);
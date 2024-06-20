const covidUrl = "https://dev.codekit.co/devcamp-api/covid-country.txt";
axios
  .get(covidUrl)
  .then((response) => {
    const allCovidData = response.data;

    let todayRecoverdArr = allCovidData.map((obj) => {
      return obj.todayRecovered;
    });
    console.log(todayRecoverdArr);
    let sumCovid = todayRecoverdArr.reduce((sum, todayRecoverdArr) => {
      return sum + todayRecoverdArr;
    }, 0);
    console.log("todatRecovered" + " " + sumCovid);

    let counTryarr = allCovidData
      .filter((obj) => {
        return obj.todayDeaths < 10 && obj.population > 100000000;
      })
      .map((obj, value) => {
        return obj.country 
      });
    console.log(counTryarr);

    // let countryArr = allCovidData.map((obj) => {
    //     return obj.country ;
    //   });
    // console.log(countryArr);

    // let todayDeathsArr = allCovidData.map((obj) => {
    //     return obj.todayDeaths;
    //   });
    // console.log(todayDeathsArr);

    // let counTryPoppulation = todayDeathsArr.fillter((x) => {
    //     return x >
    // });
  })
  .catch((err) => console.log(err));

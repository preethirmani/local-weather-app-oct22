export interface IcurrentWeatherData {
  dt : number,
  name : string,
  sys : {
    country : string
  },
  weather : [ {
    description : string,
    icon : string
  }
  ],

  main : {
    temp : number
  }

}

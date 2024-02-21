//Question 38 Cities :
function describe_city(city: string, country: string = 'default country'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('Karachi', 'Pakistan');
  describe_city('New York', 'USA');
  describe_city('London');
  
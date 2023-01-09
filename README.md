This is a weather-tracker App produced by Kara Howes, based on a react starter app by Technigo (for quick set-up).

The aim is to produce a weather app aimed at hikers/bikers/the adventurous types. It can tell you the weather of your starting point and your destination, so there should be no unpeasant surprised and you can dress/prepare accordingly.

I used the open-source openweathermap api (on their free plan) to access limited data. 
I have used Redux as a global state to store the information accessed from the api.

MVP:
* Input starting and destination cities/ to receive weather locally now.
* Want to mount a results component with the city name, actual temperature, feels like temperature and a description.
* Use Redux to store the Global state.
* Should look appealing.

Stretch goals.
* Have type input instead of select
* Use Moment to show the current time
* render differently depending on city conditions
* would like to be able to add approx time for the forecast

The "back" button in the results is a bit of a cheat; it merely refreshes the page. If I had more time, I would've structured the project differently so that the local storage would work correctly and one properly return to the search page.
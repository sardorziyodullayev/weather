import React from "react";
import type { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "./ui/card";

interface CurrentWeatherProps {
	data: WeatherData;
	locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
   const {
      weather: [CurrentWeather],
      main: {temp, feels_like, temp_min, temp_max, humidity },
      wind: {speed}
   } = data

	return (
      <>
         <Card className="overflow-hidden">
            <CardContent className="p-6">
               <div className="grid gap-6 md:grid-cols-2"></div>
            </CardContent>
         </Card>
      </>
   );
};

export default CurrentWeather;

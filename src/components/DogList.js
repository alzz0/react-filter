import React from "react";
import {Dog} from "./Dog";
export const DogList = props => {
  let allDogs = props.filteredDogs.map((d,index) => {
    return <Dog key={index}name={d.name} breed={d.breed}/>
  });
  return <div>{allDogs}</div>;
};

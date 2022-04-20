import React, { useState, useEffect } from "react";
import axios from "axios";
import DogImg from "./DogImg";
const imgurl = "https://api.thedogapi.com/v1/images/search?breed_id=";
let breedid;

function Display(props) {
  const renderData = ({ data }) => {
    if (data) {
      return data.map((breed) => {
        breedid = breed.id;
        return (
          <div key={breed.id}>
            <table>
              <tbody>
                <tr>
                  {console.log(breedid)}
                  <td>{breed.name}</td>
                  <td>{breed.height.imperial}</td>
                  <td>{breed.life_span}</td>
                  <td>
                    <DogImg id={breed.id} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
    } else {
      return <h1>use search to display dog breed!!</h1>;
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>LifeSpan</th>
            <th>Image</th>
          </tr>
        </thead>
      </table>
      {renderData(props)}
    </div>
  );
}

export default Display;

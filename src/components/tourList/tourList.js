import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";
import { tourData } from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.state;
    const sortedTour = tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({
      tours: sortedTour
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;

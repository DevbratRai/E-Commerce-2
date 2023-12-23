import React from "react";

const Home = () => {
  const items = [
    {
      date: "JUL16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px 30px",
        display: "block",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "30px",
          padding: "20px",
        }}
      >
        TOURS
      </h2>
      <div>
        {items.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid black",
                padding: "10px",
              }}
            >
              <span style={{ width: "12%" }}>{item.date}</span>
              <span style={{ width: "25%", color: "#777" }}>{item.city}</span>
              <span style={{ width: "53%", color: "#777" }}>{item.place}</span>
              <button
                style={{
                  width: "20%",
                  background: "#56ccff",
                  color: "white",
                  border: "none",
                  padding: "7px",
                  borderRadius: "5px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                }}
              >
                Buy Tickets
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
